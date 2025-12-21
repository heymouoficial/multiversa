-- Enable UUID extension
create extension if not exists "uuid-ossp";

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
