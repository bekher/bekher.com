export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface Service {
  title: string;
  bestFor: string;
  proof: string[];
  deliverables: string[];
  timeline?: string;
  engagement?: string;
}

export interface CaseStudy {
  company: string;
  context: string;
  challenge: string[];
  solution: string[];
  results: string[];
}

export interface WorkStep {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
