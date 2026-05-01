// Centralized data — single source of truth for the portfolio

export const profile = {
  name: 'M. Arslan',
  fullName: 'Muhammad Arslan',
  title: 'Full Stack Developer · AI & Automation Engineer',
  tagline:
    'Full Stack Developer building backend systems, AI agents, Meta Ad funnels, and Claude Code automation for real businesses.',
  location: 'Gujrat, Punjab, Pakistan',
  email: 'arslanarsal455@gmail.com',
  phone: '+92 342 3407767',
  linkedin: 'https://linkedin.com/in/m-arslan-aa21a0246',
  github: 'https://github.com/Arslanarsal',
  upwork: 'https://www.upwork.com/freelancers/~01731d026ab6d0a9b9',
  website: 'https://chat-pilot.dev',
  yearsExperience: 3,
  about: `I am a Full Stack Developer and AI Automation Engineer with 3+ years of hands-on experience building production systems for real clients. I cover the full stack — backend APIs, AI agents, Meta API integrations, ad funnels, automation pipelines, and DevOps — so a client only needs one person to ship the whole product. My main work right now is ChatPilot, a live WhatsApp CRM with AI bots used by clinics and agencies in Pakistan and the UAE. On Upwork I am a top-rated freelancer with 5.0 reviews, working with clients in the UAE, Europe, and the US on WhatsApp Business setup, Meta Ads funnels, n8n / Make.com automation, voice and call agents, and Claude Code agentic systems.`,
};

export const skills = {
  'Full Stack': [
    'Node.js',
    'NestJS',
    'Express.js',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'Tailwind CSS',
  ],
  'Backend & APIs': [
    'REST APIs',
    'GraphQL',
    'WebSockets',
    'Microservices',
    'JWT Auth',
    'OAuth 2.0',
    'RBAC',
    'Swagger',
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
    'LangChain',
  ],
  'Meta API & Ads': [
    'Meta Cloud API',
    'WhatsApp Business API',
    'Instagram Graph API',
    'Meta Ads Manager',
    'Ad Funnels',
    'Conversion API',
    'Pixel Tracking',
    'Audience Targeting',
    'Embedded Signup',
  ],
  Automation: [
    'n8n',
    'Make.com',
    'Zapier',
    'Workflow Automation',
    'Webhooks',
    'Scheduled Jobs',
    'Custom MCP Servers',
  ],
  'Data & Funnels': [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Prisma ORM',
    'Funnel Analytics',
    'Data Pipelines',
    'Query Optimization',
    'ETL',
  ],
  'DevOps & Cloud': [
    'Docker',
    'Nginx',
    'GitHub Actions',
    'CI/CD',
    'DigitalOcean',
    'AWS',
    'Vercel',
    'Linux',
    'Bash',
  ],
  'Monitoring & QA': [
    'Grafana',
    'Prometheus',
    'Log Management',
    'Alerts & Dashboards',
    'Jest',
    'Unit Testing',
    'Code Review',
  ],
};

export const projects = [
  {
    name: 'ChatPilot',
    tagline: 'WhatsApp CRM with AI Bots',
    description:
      'A multi-tenant WhatsApp CRM built for clinics and service businesses. AI bots chat with customers 24/7, staff can take over any time, and many businesses run on the same system without sharing data.',
    image: '/images/chatpilot.png',
    stack: [
      'NestJS',
      'PostgreSQL',
      'TypeScript',
      'WhatsApp Business API',
      'OpenAI',
      'Docker',
      'DigitalOcean',
    ],
    features: [
      'Multi-tenant SaaS with full data isolation',
      'AI bots that reply 24/7 with smooth handover to staff',
      'Live message handling and full chat history',
      'Bulk campaigns and scheduled messages',
      'Auto deploy with GitHub Actions on DigitalOcean',
    ],
    impact: '60% more client replies · thousands of messages a day',
    live: 'https://chat-pilot.dev',
    github: 'https://github.com/Arslanarsal',
    status: 'Live',
  },
];

export const experience = [
  {
    role: 'Full Stack Developer · AI Engineer',
    company: 'Qodeon Lab',
    location: 'Gujrat, Pakistan',
    period: 'January 2025 — Present',
    description:
      'Lead full-stack work on backend, AI agents, automation, and DevOps for clients in Pakistan, UAE, and Europe.',
    highlights: [
      'Built REST APIs with Node.js, NestJS, and Express handling 50k+ requests per day',
      'Built AI agents using OpenAI and Claude that cut manual client work by 50%',
      'Set up Docker and Nginx on DigitalOcean with GitHub Actions for auto deploy',
      'Built Grafana and Prometheus dashboards for live server health tracking',
      'Made APIs 40% faster using Redis cache and database query optimisation',
      'Built Meta API and ad funnel integrations for marketing automation',
    ],
    color: '#D97757',
  },
  {
    role: 'Founder · Lead Engineer',
    company: 'ChatPilot (Live SaaS)',
    location: 'Pakistan · UAE Clients',
    period: '2024 — Present',
    description:
      'Built ChatPilot from zero — a multi-tenant WhatsApp CRM with AI bots used by clinics, agencies, and service businesses.',
    highlights: [
      'Designed and shipped multi-tenant SaaS with full data isolation',
      'AI bots replying 24/7 with smooth handover to human staff',
      'Live message handling, chat history, and message threads',
      'Bulk campaigns, scheduled messages, and template approval flow',
      'In production with paying clients in Pakistan and the UAE',
    ],
    color: '#10B981',
  },
  {
    role: 'Top-Rated Full Stack Freelancer',
    company: 'Upwork',
    location: 'Remote · Global Clients',
    period: '2023 — Present',
    description:
      'Freelance Full Stack Developer on Upwork — WhatsApp Business setup, Meta Ads funnels, AI agents, n8n / Make automation, and full stack web work.',
    highlights: [
      '5.0 stars from UAE client: "Great Full Stack Developer"',
      'Delivered WhatsApp Business setup + automation + canned responses',
      'Built Meta Ads funnels and Conversion API integrations',
      'Voice and call agents with OpenAI Realtime and Claude',
      'Repeat clients in UAE, Europe, and the US',
    ],
    color: '#14A800',
  },
];

export const upworkAchievement = {
  title: 'WhatsApp Business Consultant (Setup + Automation + Canned Responses)',
  period: 'Mar 25, 2026 — Apr 2, 2026',
  hours: '22 hours',
  rate: '$15.00 /hr',
  earned: '$180.00 earned',
  rating: 5.0,
  clientReview: 'Great Full Stack Developer',
  freelancerReview:
    'Karim was an excellent client. The WhatsApp Business project was well-defined and communication was seamless. Very professional and easy to work with. Would happily work together again!',
  client: {
    rating: 5.0,
    reviews: 87,
    country: 'United Arab Emirates · Dubai',
    spent: 'Over $90,000 total spent',
    hires: '125 Hires · 9 Active',
    member: 'Member since Sep 12, 2011',
    type: 'Expert · willing to pay higher rates',
  },
  url: 'https://www.upwork.com/freelancers/~01731d026ab6d0a9b9',
};

export const achievements = [
  {
    title: '5.0 Upwork Rating',
    subtitle: 'Top-Rated Freelancer',
    description:
      'Earned a 5.0-star review from a UAE client who called me a "Great Full Stack Developer".',
    icon: 'Star',
    metric: '5.0★',
    color: 'from-emerald-500/20 to-green-500/20',
  },
  {
    title: '700+ LeetCode',
    subtitle: 'Problem Solving',
    description:
      'Solved 700+ coding problems on LeetCode — arrays, graphs, trees, DP, and system design.',
    icon: 'Code2',
    metric: '700+',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'ChatPilot Live',
    subtitle: 'SaaS in Production',
    description:
      'Founded and shipped ChatPilot — a live WhatsApp CRM SaaS used by paying clients today.',
    icon: 'Rocket',
    metric: 'Live',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: '40% Faster APIs',
    subtitle: 'Speed Boost',
    description:
      'Made client APIs 40% faster using Redis cache and database query optimisation.',
    icon: 'Zap',
    metric: '-40%',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'AI Agent Systems',
    subtitle: 'OpenAI · Claude · Claude Code',
    description:
      'Build real AI agents that plan steps, use tools, and recover from errors — chat, voice, and call agents.',
    icon: 'Brain',
    metric: 'AI Agents',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Meta API & Funnels',
    subtitle: 'WhatsApp · Instagram · Ads',
    description:
      'Build Meta Cloud API, ad funnels, Conversion API, and Embedded Signup flows for marketing teams.',
    icon: 'Target',
    metric: 'Meta API',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export const aiCapabilities = [
  {
    category: 'AI Agents',
    icon: 'Bot',
    title: 'Chat, Voice & Call Agents',
    description:
      'I build AI agents that plan steps, use tools, remember things, and fix errors on their own — chat, voice, and full call agents that talk to customers in real time.',
    items: [
      'WhatsApp lead bots that talk to customers',
      'Voice and call agents with OpenAI Realtime',
      'Content bots that turn one video into many posts',
      'Office bots that read Slack and write reports',
    ],
  },
  {
    category: 'Meta API & WhatsApp',
    icon: 'MessageCircle',
    title: 'WhatsApp & Meta Cloud API Expert',
    description:
      'I connect WhatsApp Business and Instagram to your system using the official Meta Cloud API — template approval, business verification, and Embedded Signup all handled.',
    items: [
      'ChatPilot — a live WhatsApp CRM I built',
      'Approved message templates for marketing',
      'Embedded Signup for one-click client onboarding',
      'Instagram Graph API for DM automation',
    ],
  },
  {
    category: 'Meta Ads & Funnels',
    icon: 'TrendingUp',
    title: 'Meta Ads Funnels & Tracking',
    description:
      'I build full Meta Ads funnels — Pixel, Conversion API, audience targeting, and dashboards that tell you exactly which ad turned into which paying customer.',
    items: [
      'Meta Pixel and Conversion API setup',
      'Custom audience and lookalike funnels',
      'Lead tracking from ad click to sale',
      'Live dashboards for ROI and CAC',
    ],
  },
  {
    category: 'n8n & Make Workflows',
    icon: 'Workflow',
    title: 'Visual Automation with n8n & Make',
    description:
      'I make custom n8n and Make.com flows that connect AI agents to your business apps. Easy for non-tech people to use and edit later.',
    items: [
      'Custom n8n nodes for any API',
      'AI nodes for OpenAI and Claude',
      'Self hosted n8n on DigitalOcean with Docker',
      'Make.com scenarios with branching logic',
    ],
  },
  {
    category: 'Claude Code Automation',
    icon: 'Sparkles',
    title: 'Claude Code Agentic Systems',
    description:
      'I build agentic systems with Claude Code — custom MCP servers, Slack and GitHub integrations, and AI workflows that ship real code and run real ops.',
    items: [
      'Custom MCP servers for client tools',
      'Claude Code agents for code review and ops',
      'AI-driven CI/CD and deploy pipelines',
      'Internal tools that read Slack and act',
    ],
  },
  {
    category: 'Real Use Cases',
    icon: 'Target',
    title: 'What I Have Built for Clients',
    description:
      'Real systems for real businesses. These are not demos — they run in production today and earn money for clients.',
    items: [
      'WhatsApp lead bot for healthcare clinics',
      'Auto pricing SaaS that updates Shopify daily',
      'Meta Ads funnel for an e-commerce brand',
      'Voice call agent for a sales team',
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
