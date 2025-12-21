
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
