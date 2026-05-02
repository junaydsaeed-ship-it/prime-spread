# HANDOFF.md — Prime Spread Website

## 1. Project Overview
Next.js 16.2.4 marketing website for **Prime Spread**, a London-based food influencer marketing agency connecting food/cooking creators with kitchen appliance brands.

**Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4, Framer Motion v12, Lucide React, shadcn-style components.

**Key files:**
- `components/Navigation.tsx` — pill nav with scroll transition; `PillNav` sub-component
- `app/page.tsx` — home hero (EtherealShadow) + services preview + contact form
- `app/about/page.tsx` — **two components in one file**: `AboutContactForm` (sub, lines 47–145) and `AboutPage` default export (line 147+, hero at ~151)
- `app/services/page.tsx`, `app/influencers/page.tsx`, `app/contact/page.tsx` — inner pages
- `components/ui/etheral-shadow.tsx` — animated SVG displacement hero bg
- `components/Footer.tsx`, `components/CustomCursor.tsx`
- `public/prime-spread-logo.svg` — 800×800, dark green + gold

**Repo:** https://github.com/junaydsaeed-ship-it/prime-spread

---

## 2. Current Status
**Uncommitted changes in 5 files** — need commit + push before closing.

**Completed this session:**
- Replaced flat nav with frosted-glass pill (logo left, pill right)
- Logo: 96×96px, absolute `left:72 top:32`, text label removed
- Scroll transition at 80px: banner fades out, centred floating pill fades in (Framer Motion)
- Floating pill uses `bg-[#1B2632]/90` for readability over light sections
- `PillNav` extracted as shared component; always uses home/white style (no `isHome` branching)
- Inner pages: `pt-16`/`pt-36` removed from `<main>`; moved to first `<section>` (`pt-44`) so coloured bg fills behind transparent nav
- About page: found and fixed the real hero (default export line ~151, not the sub-component)

---

## 3. Key Decisions
- **Nav always transparent** — user rejected solid bg on inner pages; page background bleeds up behind nav
- **PillNav single style** — user said "copy exact same style"; `isHome` branching removed entirely
- **Padding on section not main** — only way to extend coloured bg to page top
- **About page has two components** — editing `AboutContactForm` by mistake is a known trap; always edit `AboutPage` default export
- **`floating` prop** — only the scrolled centred pill gets dark bg; banner stays transparent

---

## 4. Next Steps
1. **Commit + push** — 5 dirty files: `Navigation.tsx`, `about/page.tsx`, `services/page.tsx`, `influencers/page.tsx`, `contact/page.tsx`
2. **Verify about page in browser** — dark hero should now fill to very top
3. **Wire up contact forms** — fake `useState` success on all 3 forms (`app/contact/page.tsx`, `AboutContactForm`, `app/page.tsx` HomeContactForm); use Resend or Formspree
4. **Replace placeholder details** — `hello@primespread.co.uk`, `+44 (0)20 7123 4567`
5. **Add real social links** — Footer Globe/Share2/Mail icons all link to `#`
6. **Deploy to Vercel** — repo ready; connect `junaydsaeed-ship-it/prime-spread`
7. **Test mobile nav** — hamburger + slide-down menu unverified on real device

---

## 5. Context Notes
- **READ before EDIT hook** — must `Read` file before `Edit`; `Write` bypasses it
- **Nav height = 144px** (`minHeight: 144`); inner page first sections need `pt-44` minimum to clear nav
- **Scroll threshold = 80px** — `handleScroll` in `Navigation.tsx`; tweak here if transition timing feels off
- **About page trap** — file has `AboutContactForm` (sub-component, cream bg, form) and `AboutPage` (default export, dark hero). Always target `AboutPage`.
- **EtherealShadow maskImage** — if hero animation is static, check Network tab for blocked `framerusercontent.com` image; fallback: replace `maskImage` at `etheral-shadow.tsx:157` with CSS `radial-gradient`
- **lucide-react v16** — no Instagram/LinkedIn icons; use Globe, Share2, Mail
- **No fake stats, no team section, no women in images** — standing client directives
