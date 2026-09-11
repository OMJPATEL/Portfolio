export const identity = {
  name: 'Om Patel',
  location: 'Winnipeg, Manitoba, Canada',
  email: 'ompatel787887@gmail.com',
  phone: '(204) 869-5370',
  linkedin: 'https://linkedin.com/in/patelom29',
  github: 'https://github.com/OMJPATEL',
  tagline: 'IT infrastructure support and full-stack development.',
  summary:
    "I keep systems running and I build the software that runs on them — nearly two years across production monitoring, incident response, and full-stack delivery.",
}

export type ServiceCategory = {
  label: string
  status: 'operational' | 'monitoring'
  items: string[]
}

export const services: ServiceCategory[] = [
  {
    label: 'Infrastructure & Monitoring',
    status: 'operational',
    items: ['Datadog', 'Prometheus', 'Grafana', 'DNS & networking fundamentals', 'ITSM ticketing workflows'],
  },
  {
    label: 'Cloud & Identity',
    status: 'operational',
    items: ['Microsoft 365 / Entra ID', 'AWS (Cloud Foundations)', 'Access & licensing administration'],
  },
  {
    label: 'Development',
    status: 'operational',
    items: ['React', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL', 'API & functional testing'],
  },
  {
    label: 'Scripting & Tooling',
    status: 'operational',
    items: ['PowerShell', 'Bash', 'Git / GitHub', 'Jira', 'Power BI'],
  },
]

export type LogEntry = {
  id: string
  role: string
  org: string
  period: string
  location: string
  summary: string
  details: string[]
}

export const experience: LogEntry[] = [
  {
    id: 'northfield',
    role: 'System Support Specialist — Co-op',
    org: 'Northfield IT · NFL club production web infrastructure',
    period: 'Jan 2026 – May 2026',
    location: 'Winnipeg, MB',
    summary:
      'Monitored and supported live, always-on production infrastructure for a high-visibility client where uptime was the primary measure of success.',
    details: [
      'Monitored health and performance of live production web infrastructure using Datadog, Prometheus, and Grafana',
      'Identified anomalies proactively and escalated before end-user impact',
      'Logged and tracked incidents through ITSM ticketing workflows from identification to resolution',
      'Reproduced reported issues to confirm root cause, working with development teams to verify fixes',
      'Correlated application logs against monitoring telemetry to shorten time to root cause',
      'Documented recurring issues and resolutions in internal knowledge base articles',
    ],
  },
  {
    id: 'upinsmoke',
    role: 'Store Manager',
    org: 'Up in Smoke · cannabis retail',
    period: 'Jul 2026 – Present',
    location: 'Winnipeg, MB',
    summary:
      'Own the store website and point-of-sale systems across all locations, plus first-line technical response and a 15-person team.',
    details: [
      'Manage and maintain the store website — content, product listings, functionality, uptime',
      'Administer the point-of-sale system across all locations: user setup, pricing updates, transaction troubleshooting',
      'Verify systems are functioning correctly at every location, catching errors before they affect operations',
      'First point of contact for technical issues affecting sales operations; escalate to vendors and drive to resolution',
      'Build Power BI reports from sales and operational data for staffing and inventory decisions',
    ],
  },
  {
    id: 'jaypad',
    role: 'IT Consultant — Freelance',
    org: 'Jaypad Foundation',
    period: 'Aug 2022 – Nov 2023',
    location: 'Vadodara, India',
    summary: 'Sole technical contact for small-business clients — provisioning, support, and plain-language documentation.',
    details: [
      'Administered Microsoft 365 and Entra ID environments — provisioning, licensing, access, mailbox support',
      'Managed competing client priorities without a formal ticketing system',
      'Handled end-to-end problem intake, diagnosis, and resolution as sole technical contact',
      'Explained root causes to non-technical clients in plain language; produced written setup guides',
    ],
  },
]

export const additionalExperience = [
  {
    role: 'Merchandise Specialist',
    org: 'Costco Wholesale',
    period: 'May 2024 – Jul 2026',
    location: 'Winnipeg, MB',
  },
]

export const incident = {
  title: 'Incident: subdomain resolution failure',
  intro:
    'A client subdomain went down. Working alongside a principal engineer at Northfield IT, I helped trace the failure from the edge back to its source.',
  steps: [
    {
      label: 'Report received',
      detail: 'Subdomain unreachable for end users. Production incident opened.',
    },
    {
      label: 'Query authoritative nameservers',
      detail: 'Queried all four of the vendor\u2019s authoritative nameservers directly — each returned NOERROR with the correct A record.',
    },
    {
      label: 'Trace the delegation chain',
      detail: 'Traced resolution from the root servers down through the delegation chain, ruling out DNS propagation as the cause.',
    },
    {
      label: 'Root cause isolated',
      detail: 'Isolated a credential error upstream of DNS as the actual cause — resolved under senior guidance, documented for the knowledge base.',
    },
  ],
}

export type Project = {
  name: string
  description: string
  stack: string[]
  href: string
  highlight: string
}

export const projects: Project[] = [
  {
    name: 'StreamMark',
    description: 'A video bookmarking app that lets users save, organize, and revisit their favorite videos anytime.',
    stack: ['React', 'TypeScript', 'PostgreSQL'],
    href: 'https://github.com/OMJPATEL/StreamMark',
    highlight: 'PostgreSQL data modelling as a core feature, with API testing and functional test coverage built in from the start.',
  },
  {
    name: 'EduTrack Pro',
    description: 'An education management platform for tracking student and course workflows.',
    stack: ['Node.js', 'Firebase', 'TypeScript'],
    href: 'https://github.com/OMJPATEL/Edu_Track_Project',
    highlight: 'Built and manually tested core features each iteration, reproducing and resolving defects against requirements.',
  },
  {
    name: 'API Management',
    description: 'A service for managing and testing API endpoints and access.',
    stack: ['TypeScript'],
    href: 'https://github.com/OMJPATEL/API_Management',
    highlight: 'API-first design, extending the same testing discipline used across production support work.',
  },
]

export const education = {
  degree: 'Diploma, Application Development and Delivery (Honours)',
  school: 'Red River College Polytechnic — Exchange District Campus',
  period: 'April 2026',
  detail: 'GPA 4.13 / 4.5. Software development lifecycle, relational databases, web application development, Agile delivery.',
}

export const certifications = [
  'AWS Academy Graduate — Cloud Foundations (June 2025)',
  'ITIL Foundations — IT Service Management',
]
