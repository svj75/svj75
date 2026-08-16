import {
  MetricItem,
  PillarItem,
  CareerRole,
  EarlyCareerCompany,
  ServiceCard,
  PhilosophyStage,
  CaseStudy,
  ExpertiseCategory,
  EducationItem
} from '../types';

export const HERO_METRICS: MetricItem[] = [
  { id: 'exp', value: 27, suffix: '+ Years', label: 'Experience', sublabel: 'Enterprise ITES & Consulting' },
  { id: 'fte', value: 1500, suffix: '+ FTE', label: 'Transitions & Consolidation', sublabel: 'Multi-function Scope' },
  { id: 'programs', value: 200, suffix: '+', label: 'Global Programs', sublabel: 'Delivered Worldwide' },
  { id: 'countries', value: 30, suffix: '+ Countries', label: 'Transformation Experience', sublabel: 'Global Operating Models' }
];

export const TRANSFORMATION_METRICS: MetricItem[] = [
  { id: 'm1', value: 27, suffix: '+', label: 'Years Experience', sublabel: 'Strategic Leadership' },
  { id: 'm2', value: 200, suffix: '+', label: 'Global Programs', sublabel: 'End-to-End Governance' },
  { id: 'm3', value: 1500, suffix: '+', label: 'FTEs Transitioned / Consolidated', sublabel: 'Cross-functional Scale' },
  { id: 'm4', value: 25, suffix: '+', label: 'Processes Transformed', sublabel: 'F&A, S2P, O2C, GCC' },
  { id: 'm5', value: 70, suffix: '+', label: 'Global Clients', sublabel: 'Fortune & Enterprise Scale' },
  { id: 'm6', value: 30, suffix: '+', label: 'Countries Covered', sublabel: 'Cross-border Execution' }
];

export const ABOUT_PILLARS: PillarItem[] = [
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Operating models, transformation roadmaps, GCC/SSC strategy and business case development.',
    deliverables: [
      'Target Operating Model (TOM) Design',
      'GCC & Captive Strategy (TCAAS / D-Cap™)',
      'Enterprise Transformation Roadmaps',
      'Value Case & Cost-Benefit Modeling'
    ],
    icon: 'Compass'
  },
  {
    id: 'execution',
    title: 'Execution',
    description: 'Large-scale transitions, PMO, governance, stabilization and change management.',
    deliverables: [
      'Multi-Country Transition Governance',
      'Rigorous Knowledge Transfer Frameworks',
      'PMO & Stage-Gate Stabilization',
      'Stakeholder & Change Management'
    ],
    icon: 'Layers'
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Digital transformation, automation, GenAI, ML, RPA and technology-enabled operating models.',
    deliverables: [
      'AI & GenAI Process Integration',
      'Robotic Process Automation (RPA)',
      'Digital Workflows & ERP Enablement',
      'Analytics & Data-Driven Insights'
    ],
    icon: 'Cpu'
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'quintes',
    company: 'Quintes Global',
    role: 'Vice President – Solutioning & Transformation',
    period: '2020 – Present',
    badge: 'Current Leadership',
    summary: 'Executive leadership across pre-sales, solution architecture, GCC/captive incubation, and AI-enabled transformation roadmaps.',
    focusAreas: [
      'Solutioning & transformation leadership',
      'GCC and captive setup',
      'Pre-sales and business development',
      'Operating model strategy',
      'Digital and AI-enabled transformation',
      'Transformation roadmaps',
      'TCAAS / D-Cap™ models'
    ],
    keyHighlights: [
      'Architected dedicated Transformation Centric As-A-Service (TCAAS) and Dedicated Captive (D-Cap™) solution models for enterprise clients.',
      'Led comprehensive pre-sales responses, commercial structuring, and transformation roadmaps across diverse global accounts.',
      'Pioneered AI-enabled operational frameworks integrating intelligent automation into standard business workflows.'
    ]
  },
  {
    id: 'wns',
    company: 'WNS Global Services',
    role: 'Senior Consultant – Transition',
    period: '2015 – 2020',
    summary: 'Managed high-stakes multi-country transitions, finance and procurement consolidations, and digital solution delivery.',
    focusAreas: [
      'Large-scale F&A and Procurement transitions',
      'Transition governance',
      'Solution design',
      'Client engagements',
      'Digital enablement',
      'Multi-country consolidation'
    ],
    keyHighlights: [
      'Spearheaded end-to-end transition governance for Fortune 500 accounts across EMEA, Americas, and APAC.',
      'Orchestrated multi-geography consolidation of Record-to-Report (R2R), Procure-to-Pay (P2P), and Order-to-Cash (O2C).',
      'Embedded digital enablement and automated controls into transition baselines to accelerate time-to-steady-state.'
    ]
  },
  {
    id: 'quatrro',
    company: 'Quatrro FPO Solutions',
    role: 'Senior Manager – Transition',
    period: '2013 – 2015',
    summary: 'Led transition due diligence, pre-sales solutioning, and process stabilization across business process verticals.',
    focusAreas: [
      'Pre-sales',
      'Due diligence',
      'Solution design',
      'Transition and stabilization',
      'Process improvement'
    ],
    keyHighlights: [
      'Conducted onsite due diligence assessments to quantify FTE requirements, process bottlenecks, and migration risks.',
      'Designed robust transition frameworks ensuring uninterrupted business continuity and rapid stabilization.',
      'Led continuous improvement programs driving initial post-transition productivity gains.'
    ]
  },
  {
    id: 'haribhakti',
    company: 'New Haribhakti Business Services',
    role: 'Senior Manager – Transitions – Business Services',
    period: '2011 – 2013',
    summary: 'Drove Source-to-Pay (S2P) transformation, RFP solution modeling, and enterprise business services migration.',
    focusAreas: [
      'Transition',
      'Due diligence',
      'S2P transformation',
      'RFI/RFP management',
      'Process redesign',
      'Technology implementation'
    ],
    keyHighlights: [
      'Directed end-to-end RFI/RFP solutioning and client defense for large-scale corporate business services mandates.',
      'Led Source-to-Pay process redesign coupled with workflow technology implementation.',
      'Standardized operating procedures and control matrices across shared services migrations.'
    ]
  },
  {
    id: 'genpact',
    company: 'Genpact',
    role: 'Senior Manager – Transitions – Global Clients',
    period: '2006 – 2011',
    summary: 'Foundational leadership in global F&A transitions, PMO structure, and multi-country shared services migration.',
    focusAreas: [
      'Global F&A transitions',
      'Shared services',
      'PMO',
      'Solution design',
      'Process transformation',
      'Multi-country transitions'
    ],
    keyHighlights: [
      'Executed complex multi-phase global transitions for blue-chip multinational clients.',
      'Established rigorous PMO governance models that became gold-standard operational benchmarks.',
      'Consolidated distributed country accounting teams into centralized shared service hubs.'
    ]
  }
];

export const EARLY_CAREER: EarlyCareerCompany[] = [
  { name: 'AOL India', role: 'Operations & Process Leadership', period: '2005 – 2006', domain: 'ITES / Technology' },
  { name: 'Customer First Services', role: 'Operations Management', period: '2003 – 2005', domain: 'Customer Operations' },
  { name: 'BPL Bespro', role: 'Process Management', period: '2002 – 2003', domain: 'BPO / Shared Services' },
  { name: 'Ganesh Metal Industries', role: 'Commercial & Systems Execution', period: '2000 – 2002', domain: 'Manufacturing / Systems' },
  { name: 'Excel Soft Technologies', role: 'Software & Technology Support', period: '1997 – 2000', domain: 'IT & Software Services' }
];

export const WHAT_I_DO: ServiceCard[] = [
  {
    id: 'transformation-strategy',
    title: 'Transformation Strategy',
    shortDesc: 'Crafting future-ready operating models, transformation roadmaps, and value-driven business cases for enterprise agility.',
    iconName: 'Compass',
    deliverables: [
      'Target Operating Model (TOM) definition',
      'Strategic transformation roadmaps & milestones',
      'Value architecture & business case modeling',
      'Operating maturity & readiness assessment'
    ],
    keyOutcomes: 'Clear strategic alignment, predictable ROI, and an actionable roadmap from current-state to future-state operations.'
  },
  {
    id: 'gcc-captive-setup',
    title: 'GCC / Captive Setup',
    shortDesc: 'End-to-end incubation, governance structuring, and scaling of Global Capability Centers and Dedicated Captive (D-Cap™) units.',
    iconName: 'Building2',
    deliverables: [
      'Location feasibility & entity structuring',
      'TCAAS & D-Cap™ captive framework execution',
      'Governance, risk & compliance infrastructure',
      'Talent, process & technology assimilation'
    ],
    keyOutcomes: 'Accelerated captive time-to-market with built-in scalability, IP control, and long-term cost optimization.'
  },
  {
    id: 'solution-design',
    title: 'Solution Design & Pre-Sales',
    shortDesc: 'Architecting winning commercial, operational, and technical solutions for large-scale enterprise engagements and RFPs.',
    iconName: 'FileSpreadsheet',
    deliverables: [
      'RFI / RFP solution architecture & response defense',
      'Commercial costing & pricing models',
      'Process due diligence & FTE baseline sizing',
      'Executive client presentations & negotiations'
    ],
    keyOutcomes: 'High win-rate solution blueprints with robust risk-adjusted margins and seamless operational handover.'
  },
  {
    id: 'large-scale-transitions',
    title: 'Large-Scale Transitions',
    shortDesc: 'Disciplined, stage-gated migration of critical business functions across multi-country geographies with zero business disruption.',
    iconName: 'Workflow',
    deliverables: [
      'Multi-phase transition governance & PMO',
      'Comprehensive Knowledge Transfer (KT) frameworks',
      'Parallel run verification & SLA baselining',
      'Stage-gate signoff & steady-state stabilization'
    ],
    keyOutcomes: 'Zero-defect process cutovers, guaranteed business continuity, and rapid stabilization to SLA targets.'
  },
  {
    id: 'operating-model-design',
    title: 'Operating Model Design',
    shortDesc: 'Restructuring functional workflows, shared services hierarchies, and organizational spans to maximize efficiency.',
    iconName: 'LayoutGrid',
    deliverables: [
      'Shared Services / GBS organizational design',
      'Span-of-control & RACI matrix optimization',
      'Cross-functional process harmonization',
      'Performance metrics & KPI dashboard architecture'
    ],
    keyOutcomes: 'Elimination of operational silos, heightened transparency, and lower cost-to-serve.'
  },
  {
    id: 'ai-digital-transformation',
    title: 'AI & Digital Transformation',
    shortDesc: 'Pragmatic infusion of GenAI, Machine Learning, and Robotic Process Automation into core business operations.',
    iconName: 'Sparkles',
    deliverables: [
      'AI & automation opportunity discovery',
      'GenAI augmented workflow integration',
      'RPA & Intelligent Document Processing (IDP)',
      'Digital metrics & predictive operational insights'
    ],
    keyOutcomes: 'Quantifiable operational productivity, enhanced decision velocity, and human-in-the-loop AI integration.'
  }
];

export const PHILOSOPHY_STAGES: PhilosophyStage[] = [
  {
    id: 'understand',
    step: '01',
    title: 'Understand',
    quote: 'Diagnose the current state before prescribing the solution.',
    description: 'Thorough due diligence to map process bottlenecks, cultural dynamics, baseline metrics, and organizational pain points.',
    deliverables: ['As-Is Process Mapping', 'FTE & Volume Baseline', 'Root Cause Diagnosis']
  },
  {
    id: 'design',
    step: '02',
    title: 'Design',
    quote: 'Build fit-for-purpose operating models aligned to business outcomes.',
    description: 'Architecting target operating models, governance structures, technology stacks, and commercial arrangements tailored to strategic goals.',
    deliverables: ['To-Be Blueprint', 'Governance Model', 'Value & Cost Architecture']
  },
  {
    id: 'transform',
    step: '03',
    title: 'Transform',
    quote: 'Execute transition, consolidation and process redesign with disciplined governance.',
    description: 'Rigorous stage-gated transition execution, knowledge transfer, risk mitigation, and cross-functional change management.',
    deliverables: ['Stage-Gate Transition', 'Knowledge Transfer PMO', 'Parallel Run Validation']
  },
  {
    id: 'enable',
    step: '04',
    title: 'Enable',
    quote: 'Integrate technology, automation, analytics and AI.',
    description: 'Deploying digital workflows, intelligent automation, GenAI augmentation, and real-time operational telemetry into newly stabilized operations.',
    deliverables: ['AI & Automation Overlay', 'Digital Workflows', 'Telemetry & KPIs']
  },
  {
    id: 'scale',
    step: '05',
    title: 'Scale',
    quote: 'Build sustainable, scalable operations that continuously improve.',
    description: 'Embedding continuous improvement mechanisms, institutionalized knowledge, and adaptable capacity to absorb future enterprise growth.',
    deliverables: ['Continuous Improvement (CI)', 'Scale-Ready Infrastructure', 'Long-Term Value Capture']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fa-consolidation',
    title: 'Global F&A Consolidation',
    category: 'Finance Transformation',
    challenge: 'A multinational organization faced fragmented accounting operations across 12 countries with disparate ERP instances, inconsistent chart-of-accounts, and lengthy month-end financial close cycles.',
    approach: 'Architected a centralized finance shared services hub. Standardized core sub-processes across AP, AR, O2C, and R2R with clear RACI matrices, unified accounting policies, and stage-gated transition governance.',
    impact: 'Successfully consolidated operations across all geographies into a single high-performing center with zero financial close delays, standardized controls, and enhanced operational visibility.',
    tags: ['R2R', 'P2P', 'O2C', 'Multi-Country', 'Shared Services']
  },
  {
    id: 'shared-services',
    title: 'Shared Services Setup',
    category: 'Operating Model Design',
    challenge: 'An enterprise needed to transition from decentralized, redundant functional departments into an integrated shared services center capable of multi-functional delivery across global business units.',
    approach: 'Designed end-to-end Target Operating Model (TOM), governance charter, service level agreements (SLAs), and operational tiering spanning finance, procurement, and administrative support services.',
    impact: 'Delivered an agile, multi-tenant GBS delivery framework that significantly improved service responsiveness, eliminated process redundancies, and established unified performance tracking.',
    tags: ['GBS', 'Target Operating Model', 'Governance', 'SLA Framework']
  },
  {
    id: 'tech-transformation',
    title: 'Technology-Led Transformation',
    category: 'Digital Enablement',
    challenge: 'High operational friction caused by manual handoffs, legacy spreadsheet dependencies, and disconnected departmental software tools across mission-critical enterprise workflows.',
    approach: 'Spearheaded digital workflow integration connecting ERP, CRM, and analytics platforms. Embedded automated validation gates and structured data pipelines to streamline handoffs.',
    impact: 'Achieved streamlined straight-through processing, substantial reduction in manual reconciliation touchpoints, and real-time operational dashboards for leadership decision-making.',
    tags: ['ERP Integration', 'Digital Workflows', 'Automation', 'Analytics']
  },
  {
    id: 'procurement-transformation',
    title: 'Procurement Transformation',
    category: 'Source-to-Pay (S2P)',
    challenge: 'Inefficient vendor management, maverick spend across regional offices, and fragmented purchase order lifecycles resulting in supplier friction and limited contract compliance.',
    approach: 'Redesigned the entire Source-to-Pay lifecycle. Digitized requisition workflows, established centralized catalog management, and instituted strict compliance checkpoints with automated three-way matching.',
    impact: 'Significantly enhanced contract compliance, reduced requisition-to-PO cycle times, and optimized supplier relationship management across global procurement channels.',
    tags: ['S2P', 'Vendor Management', 'Workflow Digitization', 'Compliance']
  },
  {
    id: 'large-scale-transition',
    title: 'Large-Scale Transition Governance',
    category: 'Program Execution',
    challenge: 'Migrating multi-tier operational processes across numerous international entities with tight regulatory deadlines and stringent zero-disruption client mandates.',
    approach: 'Implemented a standardized transition PMO utilizing rigorous Knowledge Transfer (KT) frameworks, shadow-reverse-shadow milestones, parallel run validations, and stage-gate signoffs.',
    impact: 'Executed full transition on schedule with zero customer-facing disruptions, meeting all contractual SLA baselines within 30 days of steady-state handover.',
    tags: ['PMO', 'Knowledge Transfer', 'Stage-Gate', 'Risk Mitigation']
  },
  {
    id: 'gcc-transformation',
    title: 'GCC / Captive Transformation',
    category: 'Captive Strategy',
    challenge: 'A global enterprise required a dedicated captive unit to retain strategic IP and scale complex capabilities without the rigid cost structure of traditional in-house models.',
    approach: 'Structured and launched a Dedicated Captive (D-Cap™) framework, covering location strategy, legal compliance, infrastructure readiness, talent onboarding, and technology integration.',
    impact: 'Established a mature, self-sustaining Global Capability Center with scalable operational architecture, robust risk controls, and continuous improvement mechanisms.',
    tags: ['GCC', 'D-Cap™', 'Captive Setup', 'Talent Strategy']
  }
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    category: 'Transformation',
    description: 'Holistic business and operating model restructuring.',
    skills: [
      'Business Transformation',
      'Operating Model Design (TOM)',
      'Process Transformation & Harmonization',
      'Digital Transformation Strategy',
      'Transformation Roadmaps',
      'Maturity Assessment'
    ]
  },
  {
    category: 'Solutioning',
    description: 'Front-end commercial and operational solution architecture.',
    skills: [
      'Pre-Sales Leadership',
      'RFI / RFP Solution Architecture',
      'Due Diligence & Baseline Assessment',
      'Solution Design & Sizing',
      'Business Case & Financial Modeling',
      'TCAAS & D-Cap™ Models'
    ]
  },
  {
    category: 'Execution',
    description: 'Disciplined governance and stage-gated program execution.',
    skills: [
      'Global Program Management',
      'Transition PMO Governance',
      'Multi-Country Transition Management',
      'Change Management & Communication',
      'Process Stabilization & Hypercare',
      'SLA & Quality Management'
    ]
  },
  {
    category: 'Business Functions',
    description: 'Deep functional domain expertise across enterprise operations.',
    skills: [
      'Finance & Accounting (R2R, P2P, O2C)',
      'Procurement & Source-to-Pay (S2P)',
      'Shared Services / GBS Operations',
      'GCC / Dedicated Captive Centers',
      'Commercial Operations',
      'Customer Operations'
    ]
  },
  {
    category: 'Technology',
    description: 'Pragmatic technology enablement and intelligent tools.',
    skills: [
      'GenAI in Business Operations',
      'Robotic Process Automation (RPA)',
      'Machine Learning Applications',
      'ERP Transformation & Integration',
      'Digital Workflow Orchestration',
      'Operational Analytics & Reporting'
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'MBA – Project Management',
    institution: 'Sikkim Manipal University (SMU)',
    year: '2017',
    type: 'degree',
    detail: 'Advanced specialization in strategic project governance, enterprise program management, and organizational leadership.'
  },
  {
    degree: 'BSc IT (Information Technology)',
    institution: 'Sikkim Manipal University (SMU)',
    year: '2014',
    type: 'degree',
    detail: 'Core foundation in software systems, database architecture, networks, and technology operations.'
  },
  {
    degree: 'Six Sigma Green Belt',
    institution: 'Quality & Process Excellence',
    type: 'certification',
    detail: 'DMAIC methodologies, statistical process control, root cause analysis, and continuous improvement.'
  },
  {
    degree: 'Higher Diploma in Software Engineering',
    institution: 'Aptech Computer Education',
    type: 'certification',
    detail: 'Software engineering principles, systems analysis, algorithm design, and development methodologies.'
  }
];
