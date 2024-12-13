export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}