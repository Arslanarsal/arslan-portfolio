// Centralized data — single source of truth for the portfolio

export const profile = {
  name: 'M. Arslan',
  fullName: 'Muhammad Arslan',
  title: 'AI Automation & Integration Specialist · Full Stack Developer',
  tagline:
    'I build AI automation and integration systems that run in production — AI agents and chatbots on OpenAI and Claude, RAG over your own data, and n8n, Make, and Zapier workflows — backed by full stack engineering in Node.js, NestJS, Python, React, and Next.js.',
  location: 'Gujrat, Punjab, Pakistan',
  email: 'arslanarsal455@gmail.com',
  phone: '+92 342 3407767',
  linkedin: 'https://linkedin.com/in/m-arslan-aa21a0246',
  github: 'https://github.com/Arslanarsal',
  upwork: 'https://www.upwork.com/freelancers/arslan009',
  website: 'https://chat-pilot.dev',
  yearsExperience: 3,
  about: `I am an AI Automation & Integration Specialist and Full Stack Developer with 3+ years of hands-on experience shipping systems that businesses actually run in production, not demos.

Most of my work is AI and automation. I build AI agents and chatbots on the OpenAI, Anthropic Claude, and Google Gemini APIs using tool and function calling, conversation memory, and human handover, so the AI takes real actions and knows when to pass a conversation to a person. I design RAG systems over a company's own documents with vector databases, so answers stay grounded in real data and can be traced back to a source. I build automation workflows in n8n, Make, and Zapier, custom API and webhook integrations, and full GoHighLevel and CRM setups covering lead capture, routing, follow-up, and appointment booking.

What separates me from a typical automation operator is that I am also a full stack developer, so when something isn't possible with a native connector, I build it. I write services and REST APIs in Node.js, NestJS, Express, TypeScript, and Python with FastAPI, design PostgreSQL and MongoDB schemas, use Redis and queues for background work, and build the interfaces and admin dashboards in React and Next.js. I ship with Docker, CI/CD, and monitoring on AWS and DigitalOcean.

I build automation the way software should be built — with retries, rate limit handling, idempotency, error logging, and alerts — so leads, orders, and tasks never silently disappear. I hold a 100% Job Success Score and a 5.0 client rating on Upwork.`,
};

export const skills = {
  'AI & LLM': [
    'OpenAI API',
    'Anthropic Claude',
    'Google Gemini',
    'Claude Code',
    'AI Agents',
    'Chatbots',
    'Voice & Call Agents',
    'Function / Tool Calling',
    'Agentic Workflows',
    'Prompt Engineering',
    'Conversation Memory',
    'Human-in-the-Loop',
  ],
  'RAG & Vector Search': [
    'RAG Architectures',
    'Embeddings',
    'Pinecone',
    'pgvector',
    'Chroma',
    'LangChain',
    'LangGraph',
    'LlamaIndex',
    'Chunking Strategies',
    'Semantic Search',
    'Reranking',
    'Custom MCP Servers',
  ],
  'Automation & Integrations': [
    'n8n',
    'Make.com',
    'Zapier',
    'Power Automate',
    'GoHighLevel',
    'Webhooks',
    'REST API Integration',
    'OAuth 2.0',
    'Scheduled Jobs',
    'WhatsApp / Meta Cloud API',
    'Twilio',
    'Playwright Scraping',
  ],
  'Backend & APIs': [
    'Python',
    'FastAPI',
    'Node.js',
    'NestJS',
    'Express.js',
    'TypeScript',
    'REST APIs',
    'GraphQL',
    'WebSockets',
    'Microservices',
    'JWT Auth',
    'RBAC',
  ],
  'Frontend': [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Responsive UI',
    'REST / HTTP',
    'Framer Motion',
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
  'Languages & CP': [
    'Python',
    'TypeScript',
    'JavaScript',
    'C++',
    'SQL',
    'Data Structures',
    'Algorithms',
    'Dynamic Programming',
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
    icon: 'Bot',
    title: 'AI Agents & Chatbots',
    description:
      'Production AI agents on OpenAI, Claude, and Gemini that hold real conversations, take actions through tool calling, qualify leads, book appointments, and hand over to a human when unsure.',
    items: ['Chat & voice agents', 'Tool / function calling', 'Human handover', 'Conversation memory'],
  },
  {
    icon: 'Workflow',
    title: 'AI Automation & Workflows',
    description:
      'End-to-end automation in n8n, Make, and Zapier, plus custom API and webhook integrations that connect your tools and remove hours of manual work every week.',
    items: ['n8n, Make & Zapier', 'Webhooks & scheduled jobs', 'Custom API integrations', 'Self-hosted n8n'],
  },
  {
    icon: 'Sparkles',
    title: 'RAG & Knowledge Assistants',
    description:
      'Assistants that answer strictly from your own documents and data — ingestion, chunking, embeddings, and semantic retrieval with sources cited, so nothing is invented.',
    items: ['RAG architectures', 'Vector databases', 'Document extraction', 'Cited answers'],
  },
  {
    icon: 'Network',
    title: 'CRM & Lead Automation',
    description:
      'GoHighLevel and CRM builds covering lead capture and routing, follow-up sequences, pipelines, and appointment booking — connected to everything else through the API.',
    items: ['GoHighLevel setups', 'Lead routing & follow-up', 'Appointment booking', 'Pipelines & reporting'],
  },
  {
    icon: 'Layout',
    title: 'Frontend & Web Apps',
    description:
      'Modern, responsive web apps and dashboards with React, Next.js, TypeScript, and Tailwind CSS — fast, clean, and built to convert.',
    items: ['React & Next.js', 'Responsive UI', 'Dashboards', 'Tailwind CSS'],
  },
  {
    icon: 'Server',
    title: 'Backend APIs & Systems',
    description:
      'Scalable REST and GraphQL APIs, microservices, and multi-tenant SaaS backends with Node.js, NestJS, Express, and Python with FastAPI. Clean, tested, and documented.',
    items: ['Node.js & NestJS', 'Python & FastAPI', 'Auth & RBAC', 'Multi-tenant SaaS'],
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
];

export const experience = [
  {
    role: 'AI Automation Engineer · Full Stack Developer',
    company: 'Qodeon Lab',
    location: 'Remote · Global Clients',
    period: 'January 2025 — Present',
    description:
      'Lead AI automation, agent, and full stack work for clients across the US, UK, Europe, and the UAE.',
    highlights: [
      'Built AI agents with OpenAI, Claude, and Gemini that cut manual client work by 50%',
      'Designed RAG systems over client documents so answers stay grounded and traceable',
      'Built n8n and Make workflows connecting CRMs, calendars, email, and reporting tools',
      'Built custom MCP servers so assistants query real business data through defined tools',
      'Shipped REST APIs and services with Node.js, NestJS, Express, and Python (FastAPI)',
      'Built React and Next.js dashboards and admin tools on top of the AI layer',
      'Made APIs 40% faster using Redis caching and database query optimization',
      'Owned DevOps with Docker, CI/CD, and monitoring for zero-downtime releases',
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
    role: 'AI Automation & Integration Freelancer',
    company: 'Upwork',
    location: 'Remote · Global Clients',
    period: '2023 — Present',
    description:
      'Freelance AI automation and integration engineer — AI agents, RAG assistants, n8n / Make / Zapier automation, GoHighLevel builds, and custom API integrations for clients worldwide.',
    highlights: [
      '100% Job Success Score and 5.0 average client rating with repeat clients',
      'Built AI agents, chatbots, and RAG assistants that answer from client data',
      'Built automation pipelines in n8n, Make, and Zapier with retries and alerting',
      'Delivered GoHighLevel and CRM builds: lead routing, follow-up, and booking',
      'Built Telegram, WhatsApp, and Meta Cloud API bots and integrations',
      'Voice and call agents with OpenAI Realtime and Claude',
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
