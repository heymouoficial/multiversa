-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Enable pgvector extension for semantic search
create extension if not exists vector;

-- PROFILES (Public user data)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Profiles
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- CHAT SESSIONS (Conversation threads)
create table public.chat_sessions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text default 'New Conversation',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  metadata jsonb default '{}'::jsonb
);

-- RLS for Chat Sessions
alter table public.chat_sessions enable row level security;
create policy "Users can view own sessions." on public.chat_sessions for select using (auth.uid() = user_id);
create policy "Users can insert own sessions." on public.chat_sessions for insert with check (auth.uid() = user_id);
create policy "Users can update own sessions." on public.chat_sessions for update using (auth.uid() = user_id);
create policy "Users can delete own sessions." on public.chat_sessions for delete using (auth.uid() = user_id);

-- CHAT MESSAGES (Individual messages)
create table public.chat_messages (
  id uuid default uuid_generate_v4() primary key,
  session_id uuid references public.chat_sessions(id) on delete cascade not null,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tokens int
);

-- RLS for Chat Messages
alter table public.chat_messages enable row level security;
create policy "Users can view messages from own sessions." on public.chat_messages for select using (
  exists (select 1 from public.chat_sessions where id = session_id and user_id = auth.uid())
);
create policy "Users can insert messages to own sessions." on public.chat_messages for insert with check (
  exists (select 1 from public.chat_sessions where id = session_id and user_id = auth.uid())
);

-- =====================================================
-- RAG SYSTEM TABLES (Multiversa Brain)
-- =====================================================

-- DOCUMENTS (Files uploaded for vectorization)
create table public.documents (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  file_type text not null, -- pdf, docx, xlsx, txt
  content text, -- Full text content
  chunk_count int default 0,
  namespace text default 'default', -- For organizing knowledge bases
  metadata jsonb default '{}'::jsonb,
  status text default 'pending' check (status in ('pending', 'processing', 'indexed', 'error')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- RLS for Documents
alter table public.documents enable row level security;
create policy "Documents are viewable by everyone." on public.documents for select using (true);
create policy "Authenticated users can insert documents." on public.documents for insert with check (auth.role() = 'authenticated');

-- DOCUMENT_CHUNKS (Fragments with embeddings - Gemini uses 768 dimensions)
create table public.document_chunks (
  id uuid default uuid_generate_v4() primary key,
  document_id uuid references public.documents(id) on delete cascade not null,
  chunk_index int not null,
  content text not null,
  embedding vector(768), -- Gemini text-embedding-004 dimension
  token_count int,
  created_at timestamp with time zone default now()
);

-- Create HNSW index for fast similarity search
create index document_chunks_embedding_idx on public.document_chunks 
using hnsw (embedding vector_cosine_ops);

-- RLS for Document Chunks
alter table public.document_chunks enable row level security;
create policy "Chunks are viewable by everyone." on public.document_chunks for select using (true);
create policy "Authenticated users can insert chunks." on public.document_chunks for insert with check (auth.role() = 'authenticated');

-- AGENT_MEMORY (Persistent memory for Nux/Lumina)
create table public.agent_memory (
  id uuid default uuid_generate_v4() primary key,
  agent_name text not null check (agent_name in ('nux', 'lumina', 'system')),
  memory_type text not null check (memory_type in ('fact', 'preference', 'context', 'conversation')),
  content text not null,
  embedding vector(768),
  relevance_score float default 1.0,
  access_count int default 0,
  last_accessed timestamp with time zone,
  created_at timestamp with time zone default now()
);

-- Index for agent memory search
create index agent_memory_embedding_idx on public.agent_memory 
using hnsw (embedding vector_cosine_ops);

-- CONNECTORS (Future integrations: WhatsApp, Email, etc.)
create table public.connectors (
  id uuid default uuid_generate_v4() primary key,
  type text not null check (type in ('whatsapp', 'email', 'instagram', 'linkedin', 'telegram')),
  name text not null,
  config jsonb default '{}'::jsonb, -- Encrypted credentials
  status text default 'inactive' check (status in ('active', 'inactive', 'error')),
  last_sync timestamp with time zone,
  created_at timestamp with time zone default now()
);

-- =====================================================
-- RPC FUNCTIONS FOR SEMANTIC SEARCH
-- =====================================================

-- Match documents by semantic similarity
create or replace function match_documents(
  query_embedding vector(768),
  match_threshold float default 0.7,
  match_count int default 5,
  filter_namespace text default null
)
returns table (
  id uuid,
  content text,
  similarity float,
  metadata jsonb,
  document_name text
)
language plpgsql
as $$
begin
  return query
  select
    dc.id,
    dc.content,
    1 - (dc.embedding <=> query_embedding) as similarity,
    d.metadata,
    d.name as document_name
  from public.document_chunks dc
  join public.documents d on dc.document_id = d.id
  where 
    (filter_namespace is null or d.namespace = filter_namespace)
    and 1 - (dc.embedding <=> query_embedding) > match_threshold
  order by dc.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- Match agent memory by semantic similarity
create or replace function match_agent_memory(
  query_embedding vector(768),
  agent text,
  match_count int default 5
)
returns table (
  id uuid,
  content text,
  memory_type text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    am.id,
    am.content,
    am.memory_type,
    1 - (am.embedding <=> query_embedding) as similarity
  from public.agent_memory am
  where am.agent_name = agent
  order by am.embedding <=> query_embedding
  limit match_count;
end;
$$;
