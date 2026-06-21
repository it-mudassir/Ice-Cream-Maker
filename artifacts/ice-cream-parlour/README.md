# Scoops & Dreams — Ice Cream Parlour Website

A modern, fully responsive, and highly animated ice cream parlour website built with a premium pastel aesthetic. Every interaction is crafted to feel delicious — smooth animations, glassmorphism UI, a live shopping cart, and vibrant illustrated visuals throughout.

---

## Live Demo

Deploy to Vercel with one click or run locally (see instructions below).

---

## Features

- **Animated Hero** — illustrated SVG ice cream cone with stacking scoops, drips, sprinkles, cherry, and a floating entrance animation
- **Flavors Menu** — 12 flavors with animated filter tabs (All / Chocolate / Fruit / Special / Vegan), hover lift effects, and add-to-cart interaction
- **Featured Specials** — horizontal scroll strip with glowing borders and floating card animations
- **Shopping Cart Drawer** — slides in from the right with animated item add/remove and quantity controls
- **About Section** — scroll-triggered reveals and animated count-up stats
- **Locations** — 3 location cards with illustrated map and hover animations
- **Testimonials** — auto-scrolling carousel with glowing avatar borders and star ratings
- **Gallery** — masonry grid with hover zoom overlay and lightbox popup
- **Contact Form** — floating label inputs with smooth validation
- **Footer** — newsletter subscribe, social links, brand colors
- **Custom cursor glow** and floating sprinkles/stars throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Language | TypeScript 5.9 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Playfair Display + Plus Jakarta Sans (Google Fonts) |
| Package Manager | [pnpm](https://pnpm.io/) (workspace monorepo) |

---

## Project Structure

```
artifacts/ice-cream-parlour/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Animated hero with SVG ice cream illustration
│   │   ├── Navbar.tsx        # Sticky glassmorphism nav with cart badge
│   │   ├── Flavors.tsx       # Menu grid with filter tabs and cart animation
│   │   ├── FeaturedSpecials.tsx
│   │   ├── CartDrawer.tsx    # Slide-in cart with quantity controls
│   │   ├── About.tsx         # Brand story with count-up stats
│   │   ├── Locations.tsx     # Store cards with illustrated map
│   │   ├── Testimonials.tsx  # Auto-scrolling review carousel
│   │   ├── Gallery.tsx       # Masonry grid + lightbox
│   │   ├── Contact.tsx       # Floating label form
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── cart-context.tsx  # Global cart state via React Context
│   │   └── data.ts           # Static flavor/product data
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Pastel theme tokens + Google Fonts
├── vercel.json               # Vercel deployment config
├── vite.config.ts
└── package.json
```

---

## Getting Started (Local)

### Prerequisites

- Node.js 20+
- pnpm 9+

### Install

```bash
# From the monorepo root
pnpm install
```

### Run Dev Server

```bash
pnpm --filter @workspace/ice-cream-parlour run dev
```

The app will be available at `http://localhost:<PORT>`.

### Build for Production

```bash
pnpm --filter @workspace/ice-cream-parlour run build
```

Output is placed in `artifacts/ice-cream-parlour/dist/public/`.

---

## Deploying to Vercel

### Option 1 — Vercel CLI (recommended)

```bash
# From the monorepo root
vercel
```

Vercel will detect `vercel.json` automatically and use:

- **Build command:** `pnpm install && pnpm --filter @workspace/ice-cream-parlour run build`
- **Output directory:** `artifacts/ice-cream-parlour/dist/public`

### Option 2 — Vercel Dashboard

1. Import your Git repository at [vercel.com/new](https://vercel.com/new)
2. Vercel will auto-detect `vercel.json` — no manual configuration needed
3. Click **Deploy**

> **Note:** The `vercel.json` at the repo root handles SPA routing rewrites so that direct URL navigation works correctly.

---

## Design System

| Token | Value |
|---|---|
| Primary (Signature Pink) | `hsl(340 80% 65%)` |
| Secondary (Mint Green) | `hsl(160 40% 75%)` |
| Accent (Lavender) | `hsl(270 40% 75%)` |
| Background | `hsl(350 60% 98%)` — warm blush white |
| Foreground | `hsl(340 25% 20%)` — deep warm brown |
| Border radius | `1rem` |
| Heading font | Playfair Display (serif) |
| Body font | Plus Jakarta Sans (sans-serif) |

---

## License

MIT
