## Pathivara A One Group — Premium Job Link Agency Website

A multi-page TanStack Start site with a premium green/white/black identity, glassmorphism accents, smooth motion, and WhatsApp-first conversion.

### Brand & design system (src/styles.css)
- Primary: Premium Green `#0F8B6D` (oklch)
- Accent: Blue `#2563EB`
- Neutrals: Pure white, deep black `#0A0A0A`, soft greys for surfaces
- Glass token: translucent white with backdrop blur + soft shadow
- Gradient token: green → deep-green → subtle blue glow
- Typography: Poppins (display/headings) + Inter (body) via Google Fonts in `__root.tsx`
- Radius: 1rem base, 2rem for hero/cards
- Shadow tokens: elegant green-tinted, layered soft shadows
- Subtle background: SVG noise + blurred green/blue blobs

### Route architecture (separate routes, not hash anchors)
```
src/routes/
  __root.tsx         shared shell (navbar, footer, floating WhatsApp, scroll progress)
  index.tsx          Home (hero, trust strip, services preview, why-trust stats, testimonials, CTA)
  about.tsx          About + Mission/Vision/Why-choose-us
  services.tsx       Services grid + How it works timeline
  jobs.tsx           Job categories grid (Apply Now → WhatsApp)
  gallery.tsx        TikTok-style social proof gallery
  contact.tsx        Contact CTA + form (submits to WhatsApp)
```
Each route gets its own `head()` with unique title, description, og:title/description, canonical. Root holds Organization JSON-LD + sitewide og:type.

### Shared layout (in __root.tsx)
- Sticky glass navbar with logo mark + nav links + "Chat on WhatsApp" pill button
- Floating WhatsApp FAB (bottom-right, pulse animation) → `https://wa.me/9779862341430`
- Top scroll-progress bar (green gradient)
- Premium dark footer with logo, description, quick links, contact, socials (TikTok, Facebook, Instagram, WhatsApp), copyright
- Smooth-scroll behavior, fade-in on view transitions

### Page sections

**Home (`/`)**
1. Hero — full-bleed gradient + blurred green/blue blobs + noise, H1 "Connecting Nepalese Talent With Trusted Opportunities", subhead, two CTAs ("Apply for Jobs" → /contact, "Chat on WhatsApp"), 4 trust badges row (3000+ Candidates, Trusted in Kathmandu, Fast Response, Verified Opportunities)
2. Services preview — 3 highlighted cards linking to /services
3. Why Trust Us — animated counters (3000+ followers, 60K+ reach, hundreds trusted, fast updates, KTM-based) using IntersectionObserver
4. Testimonials — luxury slider (embla carousel) with star ratings, Nepalese names
5. Contact CTA strip → /contact + WhatsApp

**About (`/about`)** — luxury layout: intro card, Mission / Vision / Why Choose Us cards in glass style, leadership/credo block

**Services (`/services`)** — 6 premium animated cards (Job Placement, Recruitment Support, Staff Hiring, Career Guidance, Company Hiring Solutions, Fast Job Updates) with green glow on hover; below it the How It Works timeline (5 steps)

**Jobs (`/jobs`)** — 8 category cards (Warehouse Staff, Barista, Receptionist, Mini Mart Staff, Factory Workers, Delivery Riders, Office Staff, Retail Staff), each with Lucide icon, short description, "Apply Now" → WhatsApp with prefilled message (e.g. `?text=Hi, I'm interested in the Barista position`)

**Gallery (`/gallery`)** — masonry/TikTok-style grid (Office, Staff, Job updates, Recruitment posts) using generated placeholder images, hover zoom + overlay

**Contact (`/contact`)** — split layout: left = headline + WhatsApp CTA + Call button (tel:9744953912) + address/contact details + embedded Google Maps iframe for Tinkune; right = form (Full Name, Phone, Interested Job, Address, Message). On submit, build a WhatsApp message and `window.open('https://wa.me/9779862341430?text=...')` — no backend needed.

### Components (src/components/)
- `Navbar.tsx`, `Footer.tsx`, `WhatsAppFab.tsx`, `ScrollProgress.tsx`
- `Hero.tsx`, `TrustBadges.tsx`, `ServiceCard.tsx`, `JobCard.tsx`, `Counter.tsx` (animated), `TimelineStep.tsx`, `TestimonialSlider.tsx`, `GalleryGrid.tsx`, `ContactForm.tsx`, `SectionHeading.tsx`, `GlassCard.tsx`

### Assets
- Generate 4–6 premium images via imagegen: hero background abstract, office photo, staff photo, recruitment post mockups (saved to `src/assets/`)
- Lucide icons for all category/service/step icons
- Inline SVG for hero blobs and noise pattern

### Animations
- Tailwind keyframes already available (fade-in, scale-in, slide-in-right)
- Counter: requestAnimationFrame easing on intersection
- Card hover: translateY + green shadow glow
- Loader: lightweight CSS spinner on initial route transition

### SEO
- Per-route `head()` with title/description/og/canonical
- Organization + LocalBusiness JSON-LD in `__root.tsx` (address: Tinkune, Kathmandu; phone; sameAs socials)
- Semantic HTML (header/main/section/footer), alt text on all images, single H1 per page

### Out of scope
- No backend, no database, no auth (form posts directly to WhatsApp)
- No Lovable Cloud needed
- Real social URLs left as `#` placeholders until user provides them
