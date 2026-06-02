# RLC Studio Official Website — Architecture Plan

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4+ |
| UI Components | shadcn/ui (selective) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Font | Inter (D-DIN substitute — uppercase, tracking, condensed feel) |
| Deployment | Static Export → GitHub → Vercel |

## 2. Logo Asset Analysis & Selection

| File | Type | Best Use |
|---|---|---|
| `rlc-light1.png` | White icon mark on black | **Primary Hero Logo** — large, centered, cinematic |
| `rlc-light2.png` | Full wordmark + icon (light) | About section branding |
| `rlc-light3.png` | "RLC Games" text + small icon | **Navigation / Footer** — compact |
| `rlc-dark1.png` | Dark icon (invisible on dark) | Unused — not visible on black canvas |
| `rlc-dark2.png` | Dark wordmark (invisible) | Unused — not visible on black canvas |
| `rlc-dark3.png` | Dark text (invisible) | Unused — not visible on black canvas |
| `rlc-poster.png` | Reference poster showing all | Reference only — contains both variants |

**Selection**: Only light/white variants are usable since the entire site uses `{colors.canvas-night}` (#000000) as the primary canvas. Dark variants would be invisible.

## 3. Design Token Mapping (from DESIGN.md)

### Colors
```
--canvas-night: #000000        (primary background)
--canvas-night-soft: #0a0a0a   (subtle section separation)
--canvas-light: #ffffff        (rare — only contrast moments)
--on-primary: #ffffff          (primary text on dark)
--on-primary-mute: #f0f0fa     (secondary text)
--ink-mute: #5a5a5f            (tertiary/muted text)
--hairline-on-dark: #3a3a3f    (borders on dark)
```

### Typography (Inter as D-DIN substitute)
```
Display XXL:  80px / 700 / 0.95 lh / 1.6px tracking / UPPERCASE
Display XL:   60px / 700 / 1.2 lh / 1.2px tracking / UPPERCASE
Display LG:   48px / 700 / 1.25 lh / 0.96px tracking / UPPERCASE
Body LG:      16px / 400 / 1.7 lh / 0.32px tracking
Body MD:      16px / 400 / 1.5 lh / 0.32px tracking
Button Cap:   13px / 700 / 0.94 lh / 1.17px tracking / UPPERCASE
Micro Cap:    12px / 400 / 2.0 lh / 0.96px tracking / UPPERCASE
Caption:      13px / 400 / 1.5 lh / 0 tracking
```

### Spacing
```
4px / 8px / 12px / 16px / 18px / 24px / 32px / 48px
```

### Border Radius
```
4px (inputs) / 8px (cards) / 16px / 32px (pill CTAs) / 9999px (circles)
```

## 4. Folder Structure

```
/mnt/agents/output/app/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, global providers
│   ├── page.tsx                # Main page — assembles all sections
│   ├── globals.css             # Global styles, CSS variables, font imports
│   ├── sections/
│   │   ├── Hero.tsx            # Full-viewport hero with logo + headline
│   │   ├── About.tsx           # Origin story section
│   │   ├── Philosophy.tsx      # Philosophy & meaning behind RLC
│   │   ├── Founders.tsx        # 3 founder cards
│   │   ├── FutureGames.tsx     # Mysterious Coming Soon section
│   │   └── Footer.tsx          # Copyright, social, signature
│   ├── components/
│   │   ├── Navigation.tsx      # Fixed overlay nav (transparent)
│   │   ├── GhostButton.tsx     # Reusable pill outline CTA
│   │   ├── AudioToggle.tsx     # Ambient audio toggle button
│   │   ├── SectionEyebrow.tsx  # Reusable uppercase microtext label
│   │   └── ScrollReveal.tsx    # Scroll-triggered animation wrapper
│   └── hooks/
│       ├── useAudio.ts         # Audio context + toggle hook
│       └── useScrollPosition.ts # Scroll position for nav effects
├── components/ui/              # shadcn/ui components (auto-installed)
├── public/
│   ├── images/
│   │   ├── rlc-logo-light1.png     # Hero logo (icon mark)
│   │   ├── rlc-logo-light2.png     # Full wordmark
│   │   ├── rlc-logo-light3.png     # Nav text logo
│   │   └── hero-bg.jpg             # Generated cinematic hero background
│   └── audio/
│       └── ambient.mp3             # Generated ambient audio
├── lib/
│   └── utils.ts                # cn() utility from shadcn
├── next.config.js              # Static export config
├── tailwind.config.ts          # Extended with design tokens
├── tsconfig.json
└── package.json
```

## 5. Component Architecture

### Layout (`app/layout.tsx`)
- HTML lang="en"
- Metadata for SEO (title, description, og tags)
- Font loading (Inter from Google Fonts)
- AudioProvider context wrapper
- Navigation component (fixed, overlay-style)

### Page (`app/page.tsx`)
- Sequential section rendering
- ScrollReveal wrappers for each section
- AudioToggle floating button

### Section Specifications

#### Hero Section
- Full viewport height (100vh)
- Black background with generated cinematic game-themed background image
- Centered RLC logo icon (rlc-light1.png) — large (~200px)
- UPPERCASE headline: "WE ARE RLC" or similar
- Body text: short studio intro
- Single GhostButton CTA: "DISCOVER OUR STORY"
- Logo fade-in animation on load

#### About Section
- Full viewport height
- Black canvas with subtle gradient or background texture
- Section eyebrow: "OUR ORIGIN"
- Display headline about transformation
- Body text: professional storytelling of WhatsApp group → BigBearTeam → RLC Studio
- Timeline feel: Oct 19, 2021 date reference
- Scroll reveal animation

#### Philosophy Section
- Full viewport height
- Black canvas
- Section eyebrow: "OUR PHILOSOPHY"
- Display headline: "RESONATE. LIGHT. CREATE." (RLC meaning)
- 3-4 philosophy pillars with microtext descriptions
- Grid layout with subtle borders

#### Founders Section
- Comfortable height (not necessarily full viewport)
- Black canvas
- Section eyebrow: "THE TEAM"
- Display headline: "MEET THE FOUNDERS"
- 3 founder cards in a row (responsive: stack on mobile)
- Each card: name, role, description
- Hairline borders, minimal styling

#### Future Games Section
- Full viewport height
- Black canvas with atmospheric/mysterious background
- Section eyebrow: "WHAT'S NEXT"
- Display headline: "SOMETHING IS COMING"
- Mysterious teaser text
- No fake game titles — purely atmospheric
- Scroll-triggered reveal

#### Footer
- Compact height
- Black canvas
- RLC Games logo (rlc-light3.png) left-aligned
- Copyright text
- Social media placeholders (icon only, no links)
- Small signature line

### Reusable Components

#### GhostButton
- Props: children, href/onClick, variant ('dark' | 'light')
- Pill shape (32px border-radius)
- 1px border, transparent background
- Button-cap typography (13px, uppercase, 700)
- Hover: subtle background fill

#### Navigation
- Fixed position, overlay on hero
- Transparent background
- Logo left (rlc-light3.png), nav links right
- Links: smooth scroll to sections
- Mobile: hamburger menu below 768px

#### AudioToggle
- Floating button (bottom-right)
- Icon: volume-on / volume-off
- No autoplay — user must toggle
- Smooth fade in/out for audio

#### ScrollReveal
- Wrapper component using Framer Motion
- Props: children, delay, direction
- Fade-up animation on viewport enter

## 6. Animation Plan (Moderate, Smooth)

| Element | Animation | Trigger |
|---|---|---|
| Hero logo | Fade in + scale from 0.95 | Page load (0.5s delay) |
| Hero text | Fade in + translateY(20px→0) | Page load (staggered) |
| Section content | Fade in + translateY(30px→0) | Scroll into view |
| Nav | Background opacity 0→1 | Scroll past hero |
| Ghost buttons | Subtle background fill | Hover |
| Audio toggle | Scale pulse | Click |
| Founder cards | Stagger fade in | Scroll into view |

## 7. Responsive Breakpoints

| Name | Width | Changes |
|---|---|---|
| Wide | ≥1500px | Full layout, 1200px content column |
| Desktop | 1280-1499px | Default |
| Laptop | 961-1279px | Tighter type |
| Tablet | 768-960px | Display 60px, founders 2+1 grid |
| Mobile | 600-767px | Display 48px, single column |
| Small Mobile | <600px | Display 40px, hamburger nav |

## 8. SEO Requirements

- Meta title: "RLC Studio — Game Studio"
- Meta description: professional studio description
- OG tags for social sharing
- Semantic HTML (section, nav, footer, h1-h3 hierarchy)
- Alt text on all images
- Proper heading hierarchy

## 9. Content Strategy

### Hero Headline
"WE ARE RLC STUDIO"

### Hero Subtext
"An upcoming game studio built from passion, community, and the belief that great games start with great people."

### About Story (Professional)
"Every studio has an origin. Ours began on October 19, 2021 — not in a boardroom, but in a simple chat group of friends who loved to play Minecraft together. We called ourselves BigBearTeam.

What started as casual gaming sessions evolved into something deeper. Conversations shifted from playing games to creating them. Ideas turned into plans. A shared passion became a shared vision.

Today, RLC Studio carries that same spirit forward — transforming a community of gamers into a team of creators with a singular focus: building games that matter."

### Philosophy — RLC Meaning
"RLC stands for three principles that guide everything we do:

**RESONATE** — We create experiences that connect with players on a deeper level. Every pixel, every sound, every moment should feel meaningful.

**LIGHT** — We bring ideas to life. From the spark of imagination to the glow of a finished game, we illuminate the path from concept to reality.

**CREATE** — Creation is our core. We build worlds, craft stories, and forge experiences that leave a lasting impression."

### Founder Descriptions (Professional)
**FARID ALFIYANSAH** — Founder & Chief Visionary
"The architect of RLC's vision. Farid transformed a small gaming community into a studio with purpose, leading every step of the journey from concept to creation."

**HALIM** — Co-Founder & Creative Director
"A founding force behind RLC's creative identity. Halim brings the artistic sensibility and design thinking that shapes the studio's visual and experiential voice."

**FAUZAN YUSUF PRATAMA** — Co-Founder & Technical Director
"The technical backbone of RLC's ambitions. Fauzan drives the engineering vision that turns creative dreams into playable realities."

### Future Games
"SOMETHING IS COMING"
"We're building worlds we can't wait to share. The first title is in development — and it's just the beginning."

## 10. Asset Generation Plan

| Asset | Purpose | Method |
|---|---|---|
| hero-bg.jpg | Hero section background | AI generate — cinematic dark gaming atmosphere |
| ambient.mp3 | Background audio | AI generate — cinematic atmospheric loop |
| future-bg.jpg | Future Games section bg | AI generate — mysterious dark abstract |

## 11. Build & Deployment

```bash
# Development
cd /mnt/agents/output/app && npm run dev

# Production build (static export)
cd /mnt/agents/output/app && npm run build

# Output: out/ folder with index.html (static)
# Deploy to Vercel: import from GitHub repo
```

next.config.js:
```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
```

---

This architecture ensures:
- Clean separation of concerns
- Reusable components
- Scalable for future additions (game pages, team pages, etc.)
- Strict adherence to DESIGN.md tokens
- Professional cinematic feel
- SEO-friendly static export
- Mobile + desktop optimized
