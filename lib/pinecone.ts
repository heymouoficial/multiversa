
import { Pinecone } from '@pinecone-database/pinecone';

// NOTE: Usually Pinecone operations are performed server-side (Edge Functions) to keep the API Key secure.
// Ensure VITE_PINECONE_API_KEY is only used in secure contexts or proxy.
const apiKey = import.meta.env.VITE_PINECONE_API_KEY;

export const pinecone = new Pinecone({
    apiKey: apiKey || 'placeholder-key',
});
