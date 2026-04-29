# M. Arslan — Backend AI Developer Portfolio

A modern, production-ready portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase backend engineering, agentic AI systems, and DevOps work for elite-level applications.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom dark theme)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Next Image** (optimized images)

## Sections

1. Hero — name, tagline, profile, CTAs
2. About — bio + key stats
3. Skills — categorized technical skills
4. Projects — ChatPilot, Hivemind, Backend Automation Engine
5. AI & Automation — AI agents, n8n, WhatsApp/Meta API, Instagram, embedded signup
6. Experience — Qodeon Lab + ChatPilot timeline + education
7. Achievements — ICPC, LeetCode, production wins
8. Contact — email, phone, LinkedIn, GitHub

## Local Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Build & Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

### Option 1 — Connect GitHub (recommended)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com/new
3. Import your repository
4. Vercel auto-detects Next.js → click **Deploy**
5. Get your live URL within 90 seconds

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. The first deploy creates a preview, run `vercel --prod` to deploy to production.

### Custom Domain

1. Buy a domain (or use one you own)
2. Vercel Dashboard → Project → Settings → Domains
3. Add your domain → update DNS records as instructed

## Project Structure

```
arslan-portfolio/
├── app/
│   ├── globals.css          # Tailwind + custom utilities
│   ├── layout.tsx           # Root layout, metadata, fonts
│   └── page.tsx             # Single-page composition
├── components/
│   ├── Navigation.tsx       # Sticky responsive nav
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About + stats
│   ├── Skills.tsx           # Skill categories
│   ├── Projects.tsx         # Featured projects
│   ├── AIAutomation.tsx     # AI/automation showcase
│   ├── Experience.tsx       # Timeline + education
│   ├── Achievements.tsx     # Wins grid
│   ├── Contact.tsx          # Contact channels
│   └── Footer.tsx           # Footer
├── lib/
│   └── data.ts              # Single-source-of-truth data
├── public/
│   └── images/              # Profile + project images
├── tailwind.config.ts       # Theme + animations
├── next.config.js           # Next.js config
├── tsconfig.json            # TypeScript config
└── package.json
```

## Updating Content

All portfolio content lives in `lib/data.ts`. Edit that single file to update:

- Personal info (`profile`)
- Skills (`skills`)
- Projects (`projects`)
- Work experience (`experience`)
- Achievements (`achievements`)
- AI capabilities (`aiCapabilities`)
- Education (`education`)

## Adding Images

1. Drop images in `public/images/`
2. Reference as `/images/your-image.png` in `lib/data.ts`
3. Next Image will optimize automatically

## License

Personal portfolio — © M. Arslan.
# arslan-portfolio
