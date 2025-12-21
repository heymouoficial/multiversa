/**
 * Vector Store Service for Multiversa Brain
 * Uses Supabase PGVector for semantic search
 */

import { supabase } from './supabase';
import { generateEmbedding, chunkText } from './embeddings';

interface SearchResult {
    id: string;
    content: string;
    similarity: number;
    metadata: Record<string, any>;
    document_name?: string;
}

interface MemoryResult {
    id: string;
    content: string;
    memory_type: string;
    similarity: number;
}

/**
 * Search for similar documents using semantic search
 * @param query - Search query text
 * @param namespace - Filter by namespace (optional)
 * @param limit - Maximum results to return
 * @param threshold - Minimum similarity threshold (0-1)
 */
export async function searchDocuments(
    query: string,
    namespace?: string,
    limit: number = 5,
    threshold: number = 0.7
): Promise<SearchResult[]> {
    try {
        const embedding = await generateEmbedding(query);

        const { data, error } = await supabase.rpc('match_documents', {
            query_embedding: embedding,
            match_threshold: threshold,
            match_count: limit,
            filter_namespace: namespace || null
        });

        if (error) {
            console.error('Error searching documents:', error);
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error('Vector search failed:', error);
        return [];
    }
}

/**
 * Search agent memory for relevant context
 * @param query - Search query
 * @param agentName - Agent name ('nux', 'lumina', 'system')
 * @param limit - Maximum results
 */
export async function searchAgentMemory(
    query: string,
    agentName: 'nux' | 'lumina' | 'system',
    limit: number = 5
): Promise<MemoryResult[]> {
    try {
        const embedding = await generateEmbedding(query);

        const { data, error } = await supabase.rpc('match_agent_memory', {
            query_embedding: embedding,
            agent: agentName,
            match_count: limit
        });

        if (error) {
            console.error('Error searching agent memory:', error);
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error('Memory search failed:', error);
        return [];
    }
}

/**
 * Index a document by chunking and embedding it
 * @param name - Document name
 * @param content - Full text content
 * @param fileType - File type (pdf, docx, txt, etc.)
 * @param namespace - Namespace for organization
 * @param metadata - Additional metadata
 */
export async function indexDocument(
    name: string,
    content: string,
    fileType: string,
    namespace: string = 'default',
    metadata: Record<string, any> = {}
): Promise<{ documentId: string; chunkCount: number }> {
    // Create document record
    const { data: doc, error: docError } = await supabase
        .from('documents')
        .insert({
            name,
            file_type: fileType,
            content,
            namespace,
            metadata,
            status: 'processing'
        })
        .select()
        .single();

    if (docError || !doc) {
        throw new Error(`Failed to create document: ${docError?.message}`);
    }

    // Chunk the content
    const chunks = chunkText(content);

    // Generate embeddings and insert chunks
    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const embedding = await generateEmbedding(chunk);

        const { error: chunkError } = await supabase
            .from('document_chunks')
            .insert({
                document_id: doc.id,
                chunk_index: i,
                content: chunk,
                embedding,
                token_count: chunk.split(' ').length
            });

        if (chunkError) {
            console.error(`Failed to insert chunk ${i}:`, chunkError);
        }
    }

    // Update document status
    await supabase
        .from('documents')
        .update({
            status: 'indexed',
            chunk_count: chunks.length,
            updated_at: new Date().toISOString()
        })
        .eq('id', doc.id);

    return {
        documentId: doc.id,
        chunkCount: chunks.length
    };
}

/**
 * Store a memory for an agent
 * @param agentName - Agent name
 * @param content - Memory content
 * @param memoryType - Type of memory
 */
export async function storeAgentMemory(
    agentName: 'nux' | 'lumina' | 'system',
    content: string,
    memoryType: 'fact' | 'preference' | 'context' | 'conversation'
): Promise<string> {
    const embedding = await generateEmbedding(content);

    const { data, error } = await supabase
        .from('agent_memory')
        .insert({
            agent_name: agentName,
            memory_type: memoryType,
            content,
            embedding
        })
        .select()
        .single();

    if (error) {
        throw new Error(`Failed to store memory: ${error.message}`);
    }

    return data.id;
}

/**
 * Get RAG context for agent response
 * Combines document search + agent memory
 */
export async function getRAGContext(
    query: string,
    agentName: 'nux' | 'lumina' = 'nux',
    namespace?: string
): Promise<string> {
    // Search documents
    const docs = await searchDocuments(query, namespace, 3);

    // Search agent memory
    const memories = await searchAgentMemory(query, agentName, 2);

    // Build context string
    const parts: string[] = [];

    if (docs.length > 0) {
        parts.push('📚 CONOCIMIENTO BASE:');
        docs.forEach((d, i) => {
            parts.push(`[${i + 1}] ${d.content}`);
        });
    }

    if (memories.length > 0) {
        parts.push('\n🧠 MEMORIA DEL AGENTE:');
        memories.forEach((m, i) => {
            parts.push(`[${i + 1}] (${m.memory_type}) ${m.content}`);
        });
    }

    return parts.join('\n');
}
