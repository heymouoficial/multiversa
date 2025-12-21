/**
 * Embeddings Service for Multiversa Brain
 * Uses Gemini text-embedding-004 model (768 dimensions)
 */

import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.warn('Missing VITE_GEMINI_API_KEY environment variable');
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

/**
 * Generate embedding vector for a single text
 * @param text - Text to embed
 * @returns 768-dimensional vector
 */
export async function generateEmbedding(text: string): Promise<number[]> {
    try {
        const result = await ai.models.embedContent({
            model: 'text-embedding-004',
            contents: text,
        });
        return result.embeddings?.[0]?.values || [];
    } catch (error) {
        console.error('Error generating embedding:', error);
        throw error;
    }
}

/**
 * Generate embeddings for multiple texts in batch
 * @param texts - Array of texts to embed
 * @returns Array of 768-dimensional vectors
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
    const embeddings = await Promise.all(texts.map(t => generateEmbedding(t)));
    return embeddings;
}

/**
 * Chunk text into smaller pieces for embedding
 * @param text - Full text to chunk
 * @param chunkSize - Maximum characters per chunk (default 1000)
 * @param overlap - Overlap between chunks (default 200)
 */
export function chunkText(
    text: string,
    chunkSize: number = 1000,
    overlap: number = 200
): string[] {
    const chunks: string[] = [];
    let start = 0;

    // Clean text
    const cleanText = text.replace(/\s+/g, ' ').trim();

    while (start < cleanText.length) {
        let end = Math.min(start + chunkSize, cleanText.length);

        // Try to break at sentence boundary
        if (end < cleanText.length) {
            const lastPeriod = cleanText.lastIndexOf('.', end);
            if (lastPeriod > start + chunkSize / 2) {
                end = lastPeriod + 1;
            }
        }

        chunks.push(cleanText.slice(start, end).trim());
        start = end - overlap;

        // Avoid infinite loop
        if (start >= cleanText.length) break;
    }

    return chunks.filter(c => c.length > 0);
}
