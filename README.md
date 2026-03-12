# The Conduct Office — Website

Regulatory intelligence and compliance risk advisory for UK businesses.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Hosting**: Vercel
- **Domain**: conductoffice.co.uk
- **Design system**: GOV.UK Design System–inspired (Arial, institutional layout, no gradients)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to `main` on GitHub → Vercel auto-deploys.

## Structure

```
src/
  app/
    layout.tsx           — Root layout (Header + Footer)
    page.tsx             — Homepage
    privacy-policy/      — Privacy policy
    responsible-disclosure/ — Responsible disclosure policy
    terms/               — Terms of engagement
  components/
    Header.tsx           — Top band + nav + phase banner
    Footer.tsx           — Footer with legal links
  styles/
    globals.css          — Design tokens + GOV.UK utilities
public/                  — Static assets (logo, favicon)
```
