# GOAF — Next.js + Tailwind + shadcn Starter

This starter models the structure and clean corporate look of f-logistics.nl and adapts it for GOAF (Logistics & Procurement).

## Features
- Next.js (app router)
- TypeScript
- Tailwind CSS
- Small component set (Header, Hero, Services, ContactForm)
- Easy to extend: add pages, API routes, CMS or headless backend.

## Getting started
1. Create a new Next.js app or copy these files into your project.
2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Run dev server:

```bash
npm run dev
```

4. Replace placeholder assets (e.g. `/public/assets/hero-logistics.jpg`) and update `lib/siteMetadata.ts`.

## Next steps / Recommendations
- Integrate shadcn/ui components by installing and importing the specific shadcn components you need.
- Add form handling at `/api/contact` with your email provider or a CRM integration.
- Add images: high-res hero, partner logos, case studies.
- Deploy to Vercel for zero-configuration Next.js hosting.
