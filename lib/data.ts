// Centralized data, single source of truth for the portfolio

export const profile = {
  name: 'M. Arslan',
  fullName: 'Muhammad Arslan',
  title: 'Full Stack AI Engineer · AI Automation Specialist',
  tagline:
    'I build AI systems that run in production. AI agents on Claude and OpenAI, RAG over your own data, and automation in n8n, Make, Zapier and GoHighLevel, backed by full stack engineering in Node.js, NestJS, Python, React and Next.js.',
  location: 'Remote · Europe, UK, US & Middle East Clients',
  email: 'arslanarsal455@gmail.com',
  phone: '+39 350 9644788',
  linkedin: 'https://linkedin.com/in/m-arslan-aa21a0246',
  github: 'https://github.com/Arslanarsal',
  upwork: 'https://www.upwork.com/freelancers/arslan009',
  website: 'https://chat-pilot.dev',
  yearsExperience: 3,
  about: `I am a Full Stack AI Engineer and AI Automation Specialist with 3+ years of hands on experience shipping systems that businesses actually run in production, not demos.

Most of my work is AI and automation. I build AI agents and chatbots on the OpenAI, Anthropic Claude and Google Gemini APIs using tool and function calling, conversation memory and human handover, so the AI takes real actions and knows when to pass a conversation to a person. I design RAG systems over a company's own documents with vector databases, so answers stay grounded in real data and can be traced back to a source. I build automation workflows in n8n, Make and Zapier, custom API and webhook integrations, and full GoHighLevel and CRM setups covering lead capture, routing, follow up and appointment booking.

I work at agency level in GoHighLevel, running sub accounts across multiple client accounts, building pipelines, custom fields and workflows for each one, and packaging setups as snapshots so onboarding the next client is repeatable rather than a rebuild. Where GoHighLevel runs out of room, the logic moves into n8n or into a service I write myself.

What separates me from a typical automation operator is that I am also a full stack developer, so when something is not possible with a native connector, I build it. I write services and REST APIs in Node.js, NestJS, Express, TypeScript and Python, design PostgreSQL and MongoDB schemas, use Redis and queues for background work, and build the interfaces and admin dashboards in React and Next.js. I ship with Docker, CI/CD and monitoring on AWS and DigitalOcean.

I build automation the way software should be built, with retries, rate limit handling, durable queues, idempotency, error logging and alerts, so leads, orders and tasks never silently disappear. One workflow estate I run live has 23 published workflows and 2,861 production executions with zero failed runs. I hold a 100% Job Success Score and a 5.0 client rating on Upwork.`,
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
    slug: 'quoting-automation',
    name: 'Quoting & Invoicing Automation',
    tagline: 'GoHighLevel + n8n Workflow Estate',
    description:
      'A live workflow estate that takes a business from an inbound WhatsApp message to a priced quote, an approved PDF and a paid invoice without anyone typing it out. GoHighLevel holds the customer and the pipeline, n8n does the thinking, and a person approves every price before it reaches a customer.',
    image: '/images/automation-dashboard.png',
    role: 'Automation Engineer · Sole Builder',
    year: '2025 to Present',
    status: 'Live in Production',
    problem:
      'Every enquiry arrived on WhatsApp as free text and someone on the team priced each job by hand and typed the quote out. Turnaround was about a day and work was being lost to whoever replied first. An earlier attempt had also been sending some customers two quotes for the same order.',
    architecture: [
      'GoHighLevel as the system of record across thirteen pipeline stages and nineteen custom fields, holding contacts, opportunities, conversations and the team dashboard',
      'n8n as the orchestration layer, self hosted, with twenty three published workflows covering intake, pricing, approval, invoicing and exception handling',
      'An LLM step that reads the free text a customer wrote and extracts the job detail into clean structured JSON, in whatever layout it arrives',
      'Live stock and pricing lookups against the client point of sale system over its API, so the AI never invents a number',
      'A durable queue behind every webhook, with the endpoint acknowledging first and doing the slow work in the background',
      'An atomic idempotency claim on the enquiry ID, written as a single insert that fails if the record already exists, so a retry can never produce a second quote',
      'Human approval gate before any quote reaches a customer, then automated PDF generation, invoice and payment link',
      'Supporting workflows for stuck order detection, restock notification, change requests and backlog re engagement',
    ],
    stack: [
      'n8n',
      'GoHighLevel',
      'OpenAI',
      'Anthropic Claude',
      'REST APIs',
      'Webhooks',
      'POS Integration',
      'PDF Generation',
      'Payment Links',
      'Queues',
      'WhatsApp Business API',
    ],
    results: [
      '23 published workflows running in production',
      '2,861 production executions with zero failed runs',
      'Over a thousand quotes processed, every one starting as a WhatsApp message',
      'Quote turnaround cut from around a day to a couple of minutes',
      'Duplicate quotes eliminated through webhook acknowledgement, queues and atomic idempotency',
    ],
    live: '',
    github: '',
  },
  {
    slug: 'ai-sms-booking-agent',
    name: 'AI SMS Booking Agent',
    tagline: 'Multi Account GoHighLevel + n8n Product',
    description:
      'An AI SMS assistant sold to small businesses that qualifies inbound leads and books appointments by text. Built and operated across multiple GoHighLevel sub accounts for a Canadian client, where I own both the CRM side and the n8n orchestration and onboard each of their own customers onto the system.',
    image: '/images/architecture.png',
    role: 'Automation & AI Engineer',
    year: '2025 to Present',
    status: 'Live in Production',
    problem:
      'The client customers were losing the majority of their leads because nobody can text a hundred and fifty people back within a minute and ask each of them five qualifying questions. Off the shelf tools could not carry a real conversation or book against a live calendar.',
    architecture: [
      'GoHighLevel as the CRM layer, white labelled, holding contacts, calendars, pipelines and sending the actual SMS',
      'n8n as the orchestration layer, catching each GoHighLevel event, gathering the full conversation context and calling the model',
      'An LLM gateway so any model can be swapped in per client without touching the workflows',
      'A per client system prompt that drives the qualification questions, with every answer written back into GoHighLevel custom fields as it arrives',
      'Live calendar availability checks so the agent offers only real open slots, then books and moves the opportunity to qualified',
      'Follow up sequences for non responders stretching over weeks rather than giving up after one message',
      'Snapshots and a repeatable onboarding runbook so a new client account is configured and live without rebuilding anything',
    ],
    stack: [
      'GoHighLevel',
      'n8n',
      'OpenRouter',
      'Anthropic Claude',
      'OpenAI',
      'REST APIs',
      'Webhooks',
      'SMS & Telephony',
      'Google Sheets',
    ],
    results: [
      'Operating across multiple client sub accounts on one product',
      'Leads answered and qualified within seconds instead of being missed',
      'Appointments booked straight into a live calendar with no human involved',
      'New client onboarding reduced to a repeatable snapshot and configuration process',
      'Qualified, not interested and no reply outcomes all tracked in the pipeline automatically',
    ],
    live: '',
    github: '',
  },
  {
    slug: 'chatpilot',
    name: 'ChatPilot',
    tagline: 'Multi-tenant AI CRM Platform',
    description:
      'A full multi-tenant AI CRM platform built on business messaging. It pairs a NestJS backend, a dedicated messaging server, a real-time web dashboard, and an AI agent layer so many businesses run on one system with full data isolation. AI agents chat with customers 24/7 and staff can take over any conversation at any time.',
    image: '/images/chatpilot.png',
    role: 'Backend & AI Engineer · Founder',
    year: '2024 to Present',
    status: 'Live',
    problem:
      'Service businesses were losing leads because customer messages went unanswered outside working hours. There was no single place to manage conversations, AI replies, and staff handover across many businesses at scale, and most tools could not isolate each business safely on shared infrastructure.',
    architecture: [
      'Multi-tenant NestJS backend (API server) with strict per-tenant data isolation and role-based access',
      'Dedicated messaging server that connects to the WhatsApp / Meta Cloud API and handles inbound and outbound messages',
      'Queue-based message processing (Redis + BullMQ) so the system stays fast and never drops messages under load',
      'AI agent layer (OpenAI) that reads conversation context, answers, books and follows up, with smooth handover to human staff',
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
    github: 'https://github.com/Arslanarsal/ChatPilot',
  },
  {
    slug: 'wb-connector',
    name: 'WB Connector',
    tagline: 'WhatsApp Connection Service',
    description:
      'A dedicated NestJS service that holds the live WhatsApp session and forwards every inbound message to the platform over webhooks. It exists so the messaging connection can crash, restart or scale on its own without ever taking the main application down with it.',
    image: '/images/architecture.png',
    role: 'Backend Engineer',
    year: '2025 to Present',
    status: 'In Production',
    problem:
      'Holding a live messaging connection inside the main application makes the whole system fragile. A dropped socket, a restart or a deploy takes messaging down with it, and every restart used to require scanning a QR code again, which is not acceptable for a business running on it.',
    architecture: [
      'Standalone NestJS service that owns the WhatsApp connection and nothing else, so it can be restarted independently of the main platform',
      'Session state persisted so a restart or redeploy reconnects on its own and never asks for a new QR scan',
      'Automatic reconnection with backoff when the connection drops, rather than silently going offline',
      'Inbound messages, media and voice notes forwarded to the platform through signed webhooks',
      'Media pipeline that downloads within the short-lived link window and stores files before they expire',
      'Multiple numbers on a single instance, each with isolated session state',
    ],
    stack: [
      'NestJS',
      'Node.js',
      'TypeScript',
      'Baileys',
      'Webhooks',
      'Redis',
      'Docker',
    ],
    results: [
      'Messaging stays up independently of the main application',
      'Restarts and deploys reconnect automatically with no QR rescan',
      'Handles text, media, documents and voice notes end to end',
      'Runs multiple business numbers on one instance',
    ],
    live: '',
    github: 'https://github.com/Arslanarsal/WB',
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
      'Assistants that answer strictly from your own documents and data. Ingestion, chunking, embeddings, and semantic retrieval with sources cited, so nothing is invented.',
    items: ['RAG architectures', 'Vector databases', 'Document extraction', 'Cited answers'],
  },
  {
    icon: 'Network',
    title: 'CRM & Lead Automation',
    description:
      'GoHighLevel and CRM builds covering lead capture and routing, follow-up sequences, pipelines and appointment booking, connected to everything else through the API.',
    items: ['GoHighLevel setups', 'Lead routing & follow-up', 'Appointment booking', 'Pipelines & reporting'],
  },
  {
    icon: 'Layout',
    title: 'Frontend & Web Apps',
    description:
      'Modern, responsive web apps and dashboards with React, Next.js, TypeScript and Tailwind CSS. Fast, clean and built to convert.',
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
      'Observability with Prometheus and Grafana. Dashboards, alerts and health checks so problems get caught early and systems stay reliable.',
    items: ['Prometheus & Grafana', 'Alerts & dashboards', 'Log management', 'Health checks'],
  },
];

export const experience = [
  {
    role: 'Automation Engineer · GoHighLevel & n8n',
    company: 'AI SMS Booking Product (Canada)',
    location: 'Remote · Canada Client',
    period: 'May 2025 to Present',
    description:
      'Own the GoHighLevel and n8n side of an AI SMS booking product sold to small businesses, working at agency level across multiple client sub accounts.',
    highlights: [
      'Run GoHighLevel at agency level, building and maintaining sub accounts for each end client with their own pipelines, custom fields, tags and calendars',
      'Build the n8n orchestration behind the product, catching every CRM event, gathering conversation context, calling the model and writing the result back through the API',
      'Package each setup as a snapshot and maintain a written onboarding runbook, so a new client account goes live without rebuilding the system',
      'Integrate the GoHighLevel API and webhooks across contacts, opportunities, calendars and conversations, plus live calendar availability so the agent books only real open slots',
      'Write per client system prompts and qualification flows, with every answer captured into custom fields as the conversation happens',
      'Build long running follow up sequences for non responders, and route qualified, not interested and no reply outcomes automatically through the pipeline',
      'Back every webhook with a durable queue and an idempotency claim, so a retry never double books or double messages a customer',
    ],
    color: '#0EA5E9',
  },
  {
    role: 'Full Stack AI Engineer',
    company: 'Qeyafa Vision AI',
    location: 'United Arab Emirates · Remote',
    period: 'August 2026 to Present',
    description:
      'Build AI powered products end to end, from backend services and APIs through to the frontend, deployment and production support.',
    highlights: [
      'Build backend services and REST APIs in Node.js, NestJS, Express and TypeScript on PostgreSQL and MongoDB',
      'Integrate Claude, OpenAI and Gemini into product features with tool calling, memory and human handover',
      'Build RAG pipelines over company documents with cited sources so answers can be verified',
      'Build React and Next.js frontends and admin dashboards on top of the AI layer',
      'Own deployment and infrastructure with Docker, CI/CD, AWS and DigitalOcean behind Nginx',
      'Set up monitoring, structured logging and alerting so failures surface before users report them',
    ],
    color: '#0EA5E9',
  },
  {
    role: 'AI Automation Engineer · Full Stack Developer',
    company: 'Qodeon Lab',
    location: 'Remote · Global Clients',
    period: 'January 2025 to August 2026',
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
    location: 'Remote · US, UK, Europe & UAE Clients',
    period: '2024 to Present',
    description:
      'Built ChatPilot from zero, a multi tenant AI CRM used by clinics, agencies, and service businesses.',
    highlights: [
      'Designed and shipped multi-tenant SaaS with full data isolation',
      'Queue-based message processing built for high-volume messaging',
      'AI agents replying 24/7 with smooth handover to human staff',
      'Dockerized deployment with automated CI/CD on DigitalOcean',
      'In production with paying clients across the UAE and beyond',
    ],
    color: '#22D3EE',
  },
  {
    role: 'AI Automation & Integration Freelancer',
    company: 'Upwork',
    location: 'Remote · Global Clients',
    period: '2023 to Present',
    description:
      'Freelance AI automation and integration engineer. AI agents, RAG assistants, n8n / Make / Zapier automation, GoHighLevel builds, and custom API integrations for clients worldwide.',
    highlights: [
      '100% Job Success Score and 5.0 average client rating with repeat clients',
      'Built AI agents, chatbots and RAG assistants that answer from client data with cited sources',
      'Built automation pipelines in n8n, Make and Zapier with durable queues, retries, idempotency and alerting',
      'Delivered GoHighLevel builds at agency level across multiple client accounts, covering sub accounts, snapshots, pipelines, lead routing, follow up and booking',
      'Wrote custom API and webhook integrations connecting CRM, ERP, point of sale, calendar and payment systems',
      'Built Telegram, WhatsApp and Meta Cloud API bots and integrations',
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
      'Solved 700+ coding problems on LeetCode covering arrays, graphs, trees, DP and system design.',
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
      'Founded and shipped ChatPilot, a live AI CRM used by paying clients in production.',
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
      'Build real AI agents that plan steps, use tools, and recover from errors. Chat, voice and call agents.',
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
      'I build AI agents that plan steps, use tools, remember context, and fix errors on their own. Chat, voice and full call agents that talk to customers in real time.',
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
      'I integrate OpenAI and Claude into real backends. RAG over your data, function calling, and reliable prompt pipelines that run at scale, not just demos.',
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
      'I build agentic systems with Claude Code. Custom MCP servers, Slack and GitHub integrations, and AI workflows that ship real code and run real operations.',
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
      'I build custom n8n and Make.com flows that connect AI agents to your business apps, easy for non technical people to use and edit later.',
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
    period: '2022 to 2026',
    location: 'Gujrat',
  },
  {
    degree: 'Diploma in Automation Engineering Technology',
    school: 'TEVTA Punjab',
    period: '2019 to 2022',
    location: 'Gujrat',
  },
];
