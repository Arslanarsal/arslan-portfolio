// Centralized data — single source of truth for the portfolio

export const profile = {
  name: 'M. Arslan',
  fullName: 'Muhammad Arslan',
  title: 'Backend Engineer · DevOps & AI Agents',
  tagline:
    'Backend engineer building scalable APIs, AI agent systems, and reliable cloud infrastructure with Node.js, NestJS, Docker, and Kubernetes.',
  location: 'Gujrat, Punjab, Pakistan',
  email: 'arslanarsal455@gmail.com',
  phone: '+92 342 3407767',
  linkedin: 'https://linkedin.com/in/m-arslan-aa21a0246',
  github: 'https://github.com/Arslanarsal',
  upwork: 'https://www.upwork.com/freelancers/~01731d026ab6d0a9b9',
  website: 'https://chat-pilot.dev',
  yearsExperience: 3,
  about: `I am a Backend Engineer with 3+ years of hands-on experience building production systems for real clients. I design and ship scalable REST APIs and microservices with Node.js, NestJS, and Express, backed by PostgreSQL, MongoDB, and Redis. On the infrastructure side I containerize services with Docker, deploy on Kubernetes and DigitalOcean, run CI/CD pipelines, and set up monitoring with Prometheus and Grafana so systems stay reliable under real load. I also build AI agent systems with OpenAI and Claude — chat, voice, and tool-calling agents that run in production. My focus is clean, maintainable code and systems that are fast, observable, and built to last.`,
};

export const skills = {
  'Backend & APIs': [
    'Node.js',
    'NestJS',
    'Express.js',
    'TypeScript',
    'REST APIs',
    'GraphQL',
    'WebSockets',
    'Microservices',
    'JWT Auth',
    'OAuth 2.0',
    'RBAC',
  ],
  'Databases': [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Prisma ORM',
    'Data Modeling',
    'Query Optimization',
    'Caching',
    'ETL',
  ],
  'DevOps & Cloud': [
    'Docker',
    'Kubernetes',
    'Helm',
    'CI/CD',
    'GitHub Actions',
    'Nginx',
    'DigitalOcean',
    'AWS',
    'Linux',
    'Bash',
  ],
  'Monitoring & QA': [
    'Prometheus',
    'Grafana',
    'Log Management',
    'Alerts & Dashboards',
    'Health Checks',
    'Jest',
    'Unit Testing',
    'Code Review',
  ],
  'AI & Agents': [
    'OpenAI API',
    'Anthropic Claude',
    'Claude Code',
    'AI Agents',
    'Voice & Call Agents',
    'LLM Integration',
    'RAG',
    'Function Calling',
    'Custom MCP Servers',
  ],
  'Automation & Integrations': [
    'n8n',
    'Make.com',
    'Webhooks',
    'Scheduled Jobs',
    'Workflow Automation',
    'Third-party APIs',
    'WhatsApp / Meta Cloud API',
  ],
  'Languages & CP': [
    'C++',
    'JavaScript',
    'Python',
    'SQL',
    'Data Structures',
    'Algorithms',
    'Dynamic Programming',
    'Graphs',
  ],
};

export const projects = [
  {
    slug: 'chatpilot',
    name: 'ChatPilot',
    tagline: 'Multi-tenant AI CRM Platform',
    description:
      'A full multi-tenant AI CRM platform built on business messaging. It pairs a NestJS backend, a dedicated messaging server, a real-time web dashboard, and an AI agent layer so many businesses run on one system with full data isolation. AI agents chat with customers 24/7 and staff can take over any conversation at any time.',
    image: '/images/chatpilot.png',
    role: 'Backend & AI Engineer · Founder',
    year: '2024 — Present',
    status: 'Live',
    problem:
      'Service businesses were losing leads because customer messages went unanswered outside working hours. There was no single place to manage conversations, AI replies, and staff handover across many businesses at scale — and most tools could not isolate each business safely on shared infrastructure.',
    architecture: [
      'Multi-tenant NestJS backend (API server) with strict per-tenant data isolation and role-based access',
      'Dedicated messaging server that connects to the WhatsApp / Meta Cloud API and handles inbound and outbound messages',
      'Queue-based message processing (Redis + BullMQ) so the system stays fast and never drops messages under load',
      'AI agent layer (OpenAI) that reads conversation context, answers, books, and follows up — with smooth handover to human staff',
      'Real-time web dashboard for live chats, history, templates, bulk campaigns, and per-number AI on/off control',
      'PostgreSQL for core relational data and Redis for caching, sessions, and queues',
      'Dockerized services deployed on DigitalOcean behind Nginx, with GitHub Actions CI/CD and zero-downtime releases',
      'Prometheus + Grafana monitoring with health checks and alerts so issues are caught early',
    ],
    stack: [
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'TypeScript',
      'OpenAI',
      'WhatsApp / Meta Cloud API',
      'Docker',
      'Nginx',
      'DigitalOcean',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
    ],
    results: [
      'Handles 50,000+ messages per day in production',
      'AI resolves around 80% of conversations on its own',
      '60% more client replies for businesses on the platform',
      'Serves multiple paying businesses on one isolated multi-tenant system',
      'Zero-downtime deploys with automated CI/CD and live monitoring',
    ],
    live: 'https://chat-pilot.dev',
    github: 'https://github.com/Arslanarsal',
  },
];

export const services = [
  {
    icon: 'Server',
    title: 'Backend APIs & Systems',
    description:
      'Scalable REST and GraphQL APIs, microservices, and multi-tenant SaaS backends with Node.js, NestJS, and Express. Clean, tested, and documented.',
    items: ['REST / GraphQL APIs', 'Microservices', 'Auth & RBAC', 'Multi-tenant SaaS'],
  },
  {
    icon: 'Database',
    title: 'Databases & Performance',
    description:
      'Data modeling and tuning for PostgreSQL, MongoDB, and Redis. Caching, query optimization, and data pipelines that keep apps fast as they grow.',
    items: ['Schema design', 'Query optimization', 'Redis caching', 'Data pipelines'],
  },
  {
    icon: 'Container',
    title: 'DevOps & Cloud',
    description:
      'Containerize with Docker, orchestrate with Kubernetes, and ship with CI/CD on DigitalOcean and AWS. Reliable, repeatable deploys with zero downtime.',
    items: ['Docker & Kubernetes', 'CI/CD pipelines', 'Nginx & Linux', 'Cloud deployment'],
  },
  {
    icon: 'Activity',
    title: 'Monitoring & Reliability',
    description:
      'Observability with Prometheus and Grafana — dashboards, alerts, and health checks so problems get caught early and systems stay reliable.',
    items: ['Prometheus & Grafana', 'Alerts & dashboards', 'Log management', 'Health checks'],
  },
  {
    icon: 'Bot',
    title: 'AI Agents & LLM Systems',
    description:
      'Production AI agents with OpenAI and Claude — chat, voice, and tool-calling agents with RAG, function calling, and custom MCP servers.',
    items: ['Chat & voice agents', 'RAG & function calling', 'Custom MCP servers', 'Claude Code'],
  },
  {
    icon: 'Workflow',
    title: 'Automation & Integrations',
    description:
      'End-to-end automation with n8n and Make, plus third-party API integrations that connect your tools and remove manual work.',
    items: ['n8n & Make workflows', 'Webhooks & jobs', 'Third-party APIs', 'CRM integrations'],
  },
];

export const experience = [
  {
    role: 'Backend Engineer · AI & DevOps',
    company: 'Qodeon Lab',
    location: 'Gujrat, Pakistan',
    period: 'January 2025 — Present',
    description:
      'Lead backend, AI agent, and DevOps work for clients in Pakistan, the UAE, and Europe.',
    highlights: [
      'Built and shipped REST APIs with Node.js, NestJS, and Express in production',
      'Containerized services with Docker and deployed on Kubernetes and DigitalOcean',
      'Set up CI/CD with GitHub Actions for automated, zero-downtime deploys',
      'Built Grafana and Prometheus dashboards for live server health tracking',
      'Made APIs 40% faster using Redis caching and database query optimization',
      'Built AI agents with OpenAI and Claude that cut manual client work by 50%',
    ],
    color: '#06B6D4',
  },
  {
    role: 'Founder · Lead Backend Engineer',
    company: 'ChatPilot (Live SaaS)',
    location: 'Pakistan · UAE Clients',
    period: '2024 — Present',
    description:
      'Built ChatPilot from zero — a multi-tenant AI CRM used by clinics, agencies, and service businesses.',
    highlights: [
      'Designed and shipped multi-tenant SaaS with full data isolation',
      'Queue-based message processing built for high-volume messaging',
      'AI agents replying 24/7 with smooth handover to human staff',
      'Dockerized deployment with automated CI/CD on DigitalOcean',
      'In production with paying clients in Pakistan and the UAE',
    ],
    color: '#22D3EE',
  },
  {
    role: 'Backend & Automation Freelancer',
    company: 'Upwork',
    location: 'Remote · Global Clients',
    period: '2023 — Present',
    description:
      'Freelance backend and automation engineer — APIs, AI agents, n8n / Make automation, and integrations for clients worldwide.',
    highlights: [
      'Top-rated freelancer with repeat clients in the UAE, Europe, and the US',
      'Built backend services, AI agents, and automation pipelines end to end',
      'Voice and call agents with OpenAI Realtime and Claude',
      'Delivered third-party API and messaging integrations',
    ],
    color: '#0891B2',
  },
];

export const achievements = [
  {
    title: '700+ LeetCode',
    subtitle: 'Problem Solving',
    description:
      'Solved 700+ coding problems on LeetCode — arrays, graphs, trees, DP, and system design.',
    icon: 'Code2',
    metric: '700+',
    color: 'from-cyan-500/20 to-sky-500/20',
  },
  {
    title: 'ICPC 2025 Regionalist',
    subtitle: 'Competitive Programming',
    description:
      'Contestant in the ICPC Asia West Regional Programming Contest representing University of Gujrat.',
    icon: 'Trophy',
    metric: 'ICPC',
    color: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'ChatPilot Live',
    subtitle: 'SaaS in Production',
    description:
      'Founded and shipped ChatPilot — a live AI CRM used by paying clients in production.',
    icon: 'Rocket',
    metric: 'Live',
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: '40% Faster APIs',
    subtitle: 'Performance',
    description:
      'Made client APIs 40% faster using Redis cache and database query optimization.',
    icon: 'Zap',
    metric: '-40%',
    color: 'from-teal-500/20 to-emerald-500/20',
  },
  {
    title: 'Won Programming Contests',
    subtitle: 'IUPC · CODE.A.THON · TECHON',
    description:
      'Won and placed in multiple programming competitions, including IUPC 2024 (Winner) and CODE.A.THON (1st).',
    icon: 'Award',
    metric: 'Winner',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'AI Agent Systems',
    subtitle: 'OpenAI · Claude · MCP',
    description:
      'Build real AI agents that plan steps, use tools, and recover from errors — chat, voice, and call agents.',
    icon: 'Brain',
    metric: 'AI Agents',
    color: 'from-indigo-500/20 to-cyan-500/20',
  },
];

export const aiCapabilities = [
  {
    category: 'AI Agents',
    icon: 'Bot',
    title: 'Chat, Voice & Call Agents',
    description:
      'I build AI agents that plan steps, use tools, remember context, and fix errors on their own — chat, voice, and full call agents that talk to customers in real time.',
    items: [
      'Lead bots that talk to customers 24/7',
      'Voice and call agents with OpenAI Realtime',
      'Tool-calling agents that take real actions',
      'Agents that read Slack and write reports',
    ],
  },
  {
    category: 'LLM Integration',
    icon: 'Sparkles',
    title: 'OpenAI & Claude in Production',
    description:
      'I integrate OpenAI and Claude into real backends — RAG over your data, function calling, and reliable prompt pipelines that run at scale, not just demos.',
    items: [
      'RAG over private data and docs',
      'Function calling and structured outputs',
      'Streaming responses and token control',
      'Guardrails and fallback handling',
    ],
  },
  {
    category: 'MCP & Claude Code',
    icon: 'Workflow',
    title: 'Custom MCP Servers & Agentic Ops',
    description:
      'I build agentic systems with Claude Code — custom MCP servers, Slack and GitHub integrations, and AI workflows that ship real code and run real operations.',
    items: [
      'Custom MCP servers for client tools',
      'Claude Code agents for code review and ops',
      'AI-driven CI/CD and deploy helpers',
      'Internal tools that read context and act',
    ],
  },
  {
    category: 'Automation',
    icon: 'Network',
    title: 'n8n & Make Workflows',
    description:
      'I build custom n8n and Make.com flows that connect AI agents to your business apps — easy for non-tech people to use and edit later.',
    items: [
      'Custom n8n nodes for any API',
      'AI nodes for OpenAI and Claude',
      'Self-hosted n8n on Docker',
      'Make.com scenarios with branching logic',
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
