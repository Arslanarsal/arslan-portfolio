// Centralized data — single source of truth for the portfolio

export const profile = {
  name: 'M. Arslan',
  fullName: 'Muhammad Arslan',
  title: 'Backend AI Developer',
  tagline: 'I build scalable APIs, agentic AI systems, and SaaS products that ship.',
  location: 'Gujrat, Punjab, Pakistan',
  email: 'arslanarsal455@gmail.com',
  phone: '+92 342 3407767',
  linkedin: 'https://linkedin.com/in/m-arslan-aa21a0246',
  github: 'https://github.com/Arslanarsal',
  website: 'https://chat-pilot.dev',
  yearsExperience: 2,
  about: `Backend AI Developer building production systems where backend engineering meets agentic AI. Over the last 2 years I have shipped scalable REST APIs, multi-tenant SaaS products, and AI agents that handle real workloads for international clients. My core stack is Node.js, NestJS, TypeScript, and PostgreSQL, with deep work on OpenAI and Anthropic Claude integrations, n8n automation, Docker, and DigitalOcean. I treat code, infrastructure, and AI orchestration as one system — not three.`,
};

export const skills = {
  Backend: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'JavaScript', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'Microservices'],
  'AI & Agents': ['OpenAI API', 'Anthropic Claude', 'AI Agents', 'Agentic AI', 'LLM Integration', 'Function Calling', 'RAG', 'Prompt Engineering', 'LangChain'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Database Design', 'Query Optimization'],
  'DevOps & Cloud': ['Docker', 'Nginx', 'GitHub Actions', 'CI/CD', 'DigitalOcean', 'AWS', 'Linux', 'Bash'],
  'Monitoring': ['Grafana', 'Prometheus', 'Log Management', 'Alerts & Dashboards'],
  Automation: ['n8n', 'Workflow Automation', 'WhatsApp Business API', 'Meta Cloud API', 'Instagram API', 'Embedded Signup'],
  'API & Security': ['JWT Auth', 'OAuth 2.0', 'RBAC', 'Swagger', 'Postman'],
  Tools: ['Git', 'GitHub', 'Agile', 'Scrum', 'Jest', 'Unit Testing', 'Code Review'],
};

export const projects = [
  {
    name: 'ChatPilot',
    tagline: 'Multi-Tenant WhatsApp CRM SaaS',
    description:
      'Production WhatsApp-first CRM for healthcare and service businesses. Multi-tenant architecture with full data isolation, AI bots with manual override, scheduled messaging, and real-time analytics.',
    image: '/images/chatpilot.png',
    stack: ['NestJS', 'PostgreSQL', 'TypeScript', 'WhatsApp Business API', 'OpenAI', 'Docker', 'DigitalOcean'],
    features: [
      'Multi-tenant SaaS with row-level data isolation',
      'AI bot automation with manual takeover',
      'Real-time message handling and analytics',
      'Scheduled messaging and broadcast campaigns',
      'CI/CD on GitHub Actions, deployed on DigitalOcean',
    ],
    impact: '60% higher client response rate · thousands of messages/day in production',
    live: 'https://chat-pilot.dev',
    github: 'https://github.com/Arslanarsal',
    status: 'Live',
  },
  {
    name: 'Hivemind',
    tagline: 'Distributed AI Agent Studio',
    description:
      'A distributed agent orchestration platform for building multi-step AI workflows. Connects multiple LLMs, tools, and data sources into reliable agent pipelines with retry logic and observability.',
    image: '/images/hivemind.png',
    stack: ['Node.js', 'TypeScript', 'OpenAI', 'Anthropic Claude', 'Redis', 'PostgreSQL', 'Docker'],
    features: [
      'Multi-agent orchestration with planning and recovery',
      'Tool use and function calling across providers',
      'Built-in retry, fallback, and observability',
      'Custom MCP and webhook integrations',
      'Visual flow builder for non-technical users',
    ],
    impact: 'Powers internal automation flows replacing ~40 hours/week of manual ops',
    live: '#',
    github: 'https://github.com/Arslanarsal',
    status: 'Active',
  },
  {
    name: 'Backend Automation Engine',
    tagline: 'n8n + Claude Code Integration Layer',
    description:
      'Custom backend layer that wires n8n workflows into Claude Code MCP servers, exposing Meta Ads, WhatsApp, Instagram, and Stripe data through a single agent interface.',
    image: '/images/architecture.png',
    stack: ['n8n', 'Node.js', 'Claude Code', 'MCP', 'Meta Graph API', 'Stripe', 'Postgres'],
    features: [
      'Plain-English data queries across 8+ platforms',
      'Local-first execution — client data never leaves infrastructure',
      'Custom MCP servers for internal tools',
      'Agent-driven report generation in seconds',
      'Drop-in replacement for Zapier and Make.com',
    ],
    impact: 'Cut 4-hour reports down to 90 seconds for marketing teams',
    live: '#',
    github: 'https://github.com/Arslanarsal',
    status: 'Active',
  },
];

export const experience = [
  {
    role: 'Backend AI Developer',
    company: 'Qodeon Lab',
    location: 'Gujrat, Pakistan',
    period: 'January 2025 — Present',
    description:
      'Building scalable REST APIs, AI agents, and DevOps infrastructure for production systems serving international clients.',
    highlights: [
      'Architected REST APIs in Node.js, NestJS, and Express handling 50k+ daily requests',
      'Developed agentic AI systems with OpenAI + Anthropic Claude, cutting manual ops by 50%',
      'Containerized services with Docker, deployed on DigitalOcean with GitHub Actions CI/CD',
      'Set up Grafana + Prometheus dashboards for real-time observability',
      'Reduced API response time by 40% through Redis caching and query tuning',
    ],
    color: '#D97757',
  },
  {
    role: 'Founder & Lead Backend Engineer',
    company: 'ChatPilot',
    location: 'Remote',
    period: 'April 2024 — January 2025',
    description:
      'Designed and shipped a multi-tenant WhatsApp CRM SaaS from zero to live production with paying clients.',
    highlights: [
      'Built end-to-end SaaS on NestJS, PostgreSQL, and TypeScript with full tenant isolation',
      'Integrated WhatsApp Business API with AI bots and manual override flow',
      'Deployed on DigitalOcean with Docker, Nginx, and CI/CD',
      'Worked directly with international clients across timezones',
      'Live at chat-pilot.dev — currently serving real customers',
    ],
    color: '#60A5FA',
  },
];

export const achievements = [
  {
    title: 'ICPC 2025 Regional',
    subtitle: 'Programming Contest Participant',
    description:
      'Qualified and competed in the ICPC 2025 Regional Programming Contest representing the University of Gujrat.',
    icon: 'Trophy',
    metric: '2025',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: '700+ LeetCode',
    subtitle: 'Algorithmic Problem Solving',
    description:
      'Solved 700+ problems across DSA topics — arrays, graphs, DP, trees, and system design.',
    icon: 'Code2',
    metric: '700+',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Live SaaS Shipped',
    subtitle: 'ChatPilot in Production',
    description:
      'Built and shipped a multi-tenant SaaS handling thousands of messages per day for international clients.',
    icon: 'Rocket',
    metric: 'Live',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: '40% Faster APIs',
    subtitle: 'Performance Optimization',
    description:
      'Reduced API response time across production services through Redis caching and query tuning.',
    icon: 'Zap',
    metric: '-40%',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Agentic AI Systems',
    subtitle: 'OpenAI + Claude Integrations',
    description:
      'Built production AI agents with function calling, tool use, and recovery — not just chatbots.',
    icon: 'Brain',
    metric: 'Multi-Agent',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Zero to Production',
    subtitle: 'Full Stack Ownership',
    description:
      'End-to-end systems: backend, AI layer, infra, and CI/CD — shipped without freelancer handoffs.',
    icon: 'Target',
    metric: 'E2E',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export const aiCapabilities = [
  {
    category: 'AI Agents',
    icon: 'Bot',
    title: 'Production AI Agents',
    description:
      'Real agents that plan multi-step work, call tools, manage memory, and recover from errors. Not just chatbots — systems that actually do work.',
    items: [
      'Lead qualification on WhatsApp + Meta Ads',
      'Content repurposing: 1 video → 14 platform posts',
      'Internal ops agents reading Slack and logging billables',
      'Research agents pulling competitive intelligence',
    ],
  },
  {
    category: 'WhatsApp Automation',
    icon: 'MessageCircle',
    title: 'Meta Cloud API + Business Suite',
    description:
      'Production WhatsApp automation through the official Meta Cloud API with template approval, business verification, and 24-hour window handling.',
    items: [
      'Multi-tenant WhatsApp CRM (ChatPilot, live)',
      'Meta-approved message templates and campaigns',
      'Coexistence mode — same number on mobile + cloud',
      'Embedded Signup for one-click client onboarding',
    ],
  },
  {
    category: 'n8n Workflows',
    icon: 'Workflow',
    title: 'Visual Automation at Scale',
    description:
      'Custom n8n nodes and complex workflow design that wires AI agents into existing business systems without breaking.',
    items: [
      'Custom n8n nodes for internal APIs',
      'AI agent nodes for OpenAI and Claude orchestration',
      'Self-hosted n8n on DigitalOcean with Docker',
      'Webhook + cron + queue patterns at production scale',
    ],
  },
  {
    category: 'Backend Integration',
    icon: 'Network',
    title: 'Connect Anything to Anything',
    description:
      'Backend layers that connect Meta Ads, Instagram, Stripe, Shopify, HubSpot, and Postgres into unified pipelines accessible through plain English.',
    items: [
      'Meta Graph API + Instagram Business API',
      'Stripe + Shopify + HubSpot integrations',
      'Custom MCP servers for Claude Code',
      'Live data pulls across 8+ platforms',
    ],
  },
  {
    category: 'Embedded Signup',
    icon: 'UserPlus',
    title: 'Frictionless Onboarding',
    description:
      'Meta Embedded Signup flows that take a client from form fill to live WhatsApp business number in under 10 minutes.',
    items: [
      'Meta Business verification flow',
      'WABA + phone number provisioning',
      'Template pre-loading and approval',
      'Auto-billing setup via Stripe',
    ],
  },
  {
    category: 'Real-World Cases',
    icon: 'Sparkles',
    title: 'What I Have Shipped',
    description:
      'Concrete production systems built for real businesses — not demos, not tutorials. Code running in production today.',
    items: [
      'WhatsApp lead-qualification agent for healthcare clinics',
      'Auto-pricing SaaS scraping competitors and updating Shopify',
      'AI ops agent reading Slack and drafting client updates',
      'Pricing intelligence pipelines with margin analysis',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Gujrat',
    period: '2022 — 2026',
    location: 'Gujrat, Pakistan',
  },
  {
    degree: 'Diploma in Automation Engineering Technology',
    school: 'TEVTA Punjab',
    period: '2019 — 2022',
    location: 'Gujrat, Pakistan',
  },
];
