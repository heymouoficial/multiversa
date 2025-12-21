
export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  color: string;
  icon: string;
}


export interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

// Database Interfaces

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ChatSession {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
  updated_at: string;
  metadata?: Record<string, any>;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  created_at: string;
  tokens?: number;
}
