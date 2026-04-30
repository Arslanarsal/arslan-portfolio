// Centralized data — single source of truth for the portfolio

export const profile = {
  name: 'M. Arslan',
  fullName: 'Muhammad Arslan',
  title: 'Backend AI Developer',
  tagline: 'I build APIs, AI agents, and SaaS products that work in real life.',
  location: 'Gujrat, Punjab, Pakistan',
  email: 'arslanarsal455@gmail.com',
  phone: '+92 342 3407767',
  linkedin: 'https://linkedin.com/in/m-arslan-aa21a0246',
  github: 'https://github.com/Arslanarsal',
  website: 'https://chat-pilot.dev',
  yearsExperience: 2,
  about: `I am a Backend Developer who works on AI agents and full systems. In the last 2 years I have built REST APIs, SaaS products, and AI bots that real clients use every day. My main stack is Node.js, NestJS, TypeScript, and PostgreSQL. I also work with OpenAI and Claude for AI agents, n8n for automation, and Docker on DigitalOcean for hosting. I take care of the backend, AI, and DevOps all together — not as separate jobs.`,
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
    tagline: 'WhatsApp CRM with AI Bots',
    description:
      'A WhatsApp CRM built for clinics and service businesses. It uses AI bots to chat with customers, lets staff jump in any time, and works for many businesses on the same system without sharing data.',
    image: '/images/chatpilot.png',
    stack: ['NestJS', 'PostgreSQL', 'TypeScript', 'WhatsApp Business API', 'OpenAI', 'Docker', 'DigitalOcean'],
    features: [
      'One system for many businesses with full data privacy',
      'AI bots that reply 24/7 with a takeover option for staff',
      'Live message handling and full chat history',
      'Send scheduled messages and bulk campaigns',
      'Auto deploy with GitHub Actions on DigitalOcean',
    ],
    impact: '60% more replies from clients · thousands of messages every day',
    live: 'https://chat-pilot.dev',
    github: 'https://github.com/Arslanarsal',
    status: 'Live',
  },
];

export const experience = [
  {
    role: 'Backend AI Developer',
    company: 'Qodeon Lab',
    location: 'Gujrat, Pakistan',
    period: 'January 2025 — Present',
    description:
      'Building backend APIs, AI agents, and full systems that real clients use every day.',
    highlights: [
      'Built REST APIs with Node.js, NestJS, and Express that handle 50k+ requests a day',
      'Made AI agents using OpenAI and Claude that cut manual work by 50 percent',
      'Set up Docker and Nginx on DigitalOcean with GitHub Actions for auto deploy',
      'Built Grafana and Prometheus dashboards to track server health live',
      'Made APIs 40 percent faster using Redis cache and better database queries',
    ],
    color: '#D97757',
  },
];

export const achievements = [
  {
    title: 'ICPC 2025 Regional',
    subtitle: 'Programming Contest',
    description:
      'Took part in ICPC 2025 Regional Programming Contest for University of Gujrat.',
    icon: 'Trophy',
    metric: '2025',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: '700+ LeetCode',
    subtitle: 'Problem Solving',
    description:
      'Solved 700+ coding problems on LeetCode — arrays, graphs, trees, and more.',
    icon: 'Code2',
    metric: '700+',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'ChatPilot Live',
    subtitle: 'SaaS in Production',
    description:
      'Built and launched ChatPilot — a live SaaS used by real clients.',
    icon: 'Rocket',
    metric: 'Live',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: '40% Faster APIs',
    subtitle: 'Speed Boost',
    description:
      'Made APIs 40 percent faster using Redis cache and better database queries.',
    icon: 'Zap',
    metric: '-40%',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'AI Agent Systems',
    subtitle: 'OpenAI + Claude',
    description:
      'Built real AI agents that plan steps, use tools, and recover from errors.',
    icon: 'Brain',
    metric: 'AI Agents',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Full Stack Owner',
    subtitle: 'Backend to Cloud',
    description:
      'I handle everything — backend, AI, database, and deploy — by myself.',
    icon: 'Target',
    metric: 'E2E',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export const aiCapabilities = [
  {
    category: 'AI Agents',
    icon: 'Bot',
    title: 'Real AI Agents That Work',
    description:
      'I build AI agents that plan steps, use tools, remember things, and fix errors on their own. They are real workers, not just chatbots.',
    items: [
      'WhatsApp lead bots that talk to customers',
      'Content bots that turn one video into many posts',
      'Office bots that read Slack and write reports',
      'Research bots that find info from many sources',
    ],
  },
  {
    category: 'WhatsApp Automation',
    icon: 'MessageCircle',
    title: 'WhatsApp with Meta Cloud API',
    description:
      'I connect WhatsApp Business to your system using the official Meta Cloud API — template approval, business setup, and message rules all handled.',
    items: [
      'ChatPilot — a live WhatsApp CRM I built',
      'Approved message templates for marketing',
      'Use the same number on phone and cloud',
      'Quick client onboarding in under 10 minutes',
    ],
  },
  {
    category: 'n8n Workflows',
    icon: 'Workflow',
    title: 'Visual Automation Tools',
    description:
      'I make custom n8n flows that connect AI agents to your business apps. Easy for non-tech people to use and edit later.',
    items: [
      'Custom n8n nodes for any API',
      'AI nodes for OpenAI and Claude',
      'Self hosted n8n on DigitalOcean with Docker',
      'Webhooks, scheduled jobs, and queues',
    ],
  },
  {
    category: 'Backend Integration',
    icon: 'Network',
    title: 'Connect Any App to Any App',
    description:
      'I link Meta Ads, Instagram, Stripe, Shopify, HubSpot, and your database so you can ask questions in plain English and get real answers.',
    items: [
      'Meta Ads and Instagram Business API',
      'Stripe, Shopify, and HubSpot connections',
      'Custom MCP servers for Claude Code',
      'Live data from 8 plus apps in one place',
    ],
  },
  {
    category: 'Embedded Signup',
    icon: 'UserPlus',
    title: 'Easy Client Onboarding',
    description:
      'Clients fill one form and get a working WhatsApp business number in under 10 minutes. No back and forth needed.',
    items: [
      'Meta business verification flow',
      'WhatsApp number setup and approval',
      'Templates loaded and ready to send',
      'Auto billing through Stripe',
    ],
  },
  {
    category: 'Real Use Cases',
    icon: 'Sparkles',
    title: 'What I Have Built',
    description:
      'Real systems for real businesses. These are not demos — they run in production today and earn money for clients.',
    items: [
      'WhatsApp lead bot for healthcare clinics',
      'Auto pricing SaaS that updates Shopify daily',
      'AI office bot that reads Slack and writes updates',
      'Price tracking system with profit analysis',
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
