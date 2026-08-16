export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface CareerRole {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  summary: string;
  focusAreas: string[];
  keyHighlights: string[];
}

export interface EarlyCareerCompany {
  name: string;
  role: string;
  period: string;
  domain: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  deliverables: string[];
  keyOutcomes: string;
}

export interface PhilosophyStage {
  id: string;
  step: string;
  title: string;
  quote: string;
  description: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  approach: string;
  impact: string;
  tags: string[];
}

export interface ExpertiseCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  type: 'degree' | 'certification';
  detail?: string;
}
