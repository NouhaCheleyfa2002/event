# 🗺️ Component Map & Visual Flow

Visual guide to the landing page structure and component hierarchy.

---

## 📐 Page Flow (Top to Bottom)

```
┌─────────────────────────────────────────────────────────────┐
│                        🔝 NAVBAR                             │
│  Logo | About • Agenda • Speakers • Pricing | Register Now  │
│                    (Sticky, Backdrop Blur)                   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      🎯 HERO SECTION                         │
│  ┌──────────────────┐  ┌─────────────────────────────────┐ │
│  │  • Badge         │  │                                 │ │
│  │  • Your Career   │  │      Hero Image                │ │
│  │  • Without       │  │    (Atmospheric)               │ │
│  │    Borders 🔵     │  │   [Cyan Windows]               │ │
│  │  • Description   │  │                                 │ │
│  │  • [Get Ticket]  │  └─────────────────────────────────┘ │
│  │  • [View Prog]   │      (Cyan Glow Underneath)         │
│  └──────────────────┘                                       │
│         (Radial Cyan Background Glow)                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    📹 VIDEO SECTION                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🔵 Global Partners | UNESCO • EU • World Bank • ... │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│        The event, in motion. 🔵                              │
│        Supporting text about the video...                   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                       │   │
│  │          [VIDEO PLAYER / PLACEHOLDER]                │   │
│  │              (Large Border Radius)                   │   │
│  │                                                       │   │
│  └─────────────────────────────────────────────────────┘   │
│            (Cyan Ambient Glow Underneath)                   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    📅 AGENDA SECTION                        │
│                                                              │
│         Two Days. One Horizon. 🔵                            │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ┌──────────────────┬──────────────────────────┐    │   │
│  │  │ 🔵 DAY 01        │ 🔵 DAY 02                │    │   │
│  │  │ Borderless       │ Capital, Policy          │    │   │
│  │  │ Careers          │ & Future                 │    │   │
│  │  │                  │                          │    │   │
│  │  │ — Opening...     │ — International...       │    │   │
│  │  │ — EU visa...     │ — Policy...              │    │   │
│  │  │ — Networking...  │ — Innovation...          │    │   │
│  │  │ — Workshop...    │ — Technology...          │    │   │
│  │  └──────────────────┴──────────────────────────┘    │   │
│  │           (Elegant Card with Subtle Border)          │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  👥 SPEAKERS SECTION                        │
│                                                              │
│         Meet the visionaries. 🔵                             │
│         Learn from global leaders...                        │
│                                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                   │
│  │  SC  │  │  AH  │  │  ER  │  │  MT  │                   │
│  │Sarah │  │Ahmed │  │Elena │  │Michael                    │
│  │Chen  │  │Hassan│  │Rodri.│  │Thomp. │                   │
│  └──────┘  └──────┘  └──────┘  └──────┘                   │
│  (Hover effects with cyan glow)                             │
│                                                              │
│              [View All Speakers →]                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                💬 TESTIMONIALS SECTION                      │
│                                                              │
│         Real stories. Real impact. 🔵                        │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  "                                                   │   │
│  │   [Rotating Testimonial Quote]                      │   │
│  │   — Amira Ben Salem / Berlin, Germany               │   │
│  │   [€18,000 Scholarship]                             │   │
│  │                                                      │   │
│  │   ● ━━━━ ●     ●    (Navigation Dots)               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                    │
│  │  92%    │  │  45+    │  │  €2M+   │                    │
│  │ Secured │  │Countries│  │ Funding │                    │
│  └─────────┘  └─────────┘  └─────────┘                    │
│       (Auto-rotating every 6 seconds)                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   💰 PRICING SECTION                        │
│                                                              │
│       Pick the pass that fits you. 🔵                        │
│                                                              │
│  ┌─────────┐  ┌──────────────┐  ┌─────────┐               │
│  │ Student │  │ [MOST POPULAR]│  │Professional             │
│  │  Pack   │  │  Group Forfait│  │  Pass   │               │
│  │         │  │───────────────│  │         │               │
│  │  350 DT │  │    850 DT 🔵  │  │ 1350 DT │               │
│  │         │  │               │  │         │               │
│  │ — Full  │  │ — All Student │  │ — All   │               │
│  │ — Work. │  │ — VIP Seat    │  │ — 1-on-1│               │
│  │ — Net.  │  │ — Consult.    │  │ — Exec  │               │
│  │         │  │               │  │         │               │
│  │[Select] │  │[Get Started]🔵│  │[Select] │               │
│  └─────────┘  └──────────────┘  └─────────┘               │
│               (Cyan Border Glow)                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                     ❓ FAQ SECTION                          │
│                                                              │
│      Questions? We've got answers. 🔵                        │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Who should attend this conference?          [+]     │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ What funding opportunities will be presented? [−]   │   │
│  │ ─────────────────────────────────────────────────── │   │
│  │ We'll showcase various funding mechanisms...        │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Will there be networking opportunities?      [+]     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│         Still have questions?                               │
│         Contact our support team →                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    🎯 CTA SECTION                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │         Ready to go borderless? 🔵                   │   │
│  │         Join hundreds of ambitious individuals...   │   │
│  │                                                      │   │
│  │   ┌─────────┬─────────┬─────────┐                  │   │
│  │   │  500+   │   50+   │   30+   │                  │   │
│  │   │Attendees│Speakers │Countries│                  │   │
│  │   └─────────┴─────────┴─────────┘                  │   │
│  │                                                      │   │
│  │   [Secure Your Spot 🔵]  [Download Brochure]       │   │
│  │                                                      │   │
│  │   🔒 Secure • 💯 Guarantee • 📧 Instant             │   │
│  └─────────────────────────────────────────────────────┘   │
│            (Heavy Cyan Radial Glow)                         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      🔗 FOOTER                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ MOBILITY2024🔵  │  Event  │ Resources │ Connect     │   │
│  │                 │  • About│ • FAQ     │ • Contact   │   │
│  │ Connecting...   │  • Speak│ • Venue   │ • Press     │   │
│  │                 │  • Agenda• Accom.   │ • Partners  │   │
│  │ [in] [x] [ig]   │  • Price│ • Travel  │ • News      │   │
│  └─────────────────────────────────────────────────────┘   │
│  ────────────────────────────────────────────────────────  │
│  © 2024 Conference  |  Privacy • Terms • Cookies           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Visual Design Elements

### Color Usage Map

| Element | Color | Purpose |
|---------|-------|---------|
| Headlines (1st part) | White `#F5F5F5` | Primary text, authority |
| Headlines (2nd part) | Cyan `#14E8F0` | Emphasis, energy |
| Body Text | White `rgba(255,255,255,0.75)` | Readability |
| Backgrounds | Navy `#021326` | Premium feel |
| Borders | White `rgba(255,255,255,0.08)` | Subtle structure |
| Primary CTA | Cyan `#14E8F0` | High conversion |
| Secondary CTA | Transparent | Low pressure |
| Section Labels | Cyan `#14E8F0` | Hierarchy markers |

### Glow System

```
┌─────────────────────────────────────────┐
│         Cyan Glow Architecture          │
│                                         │
│  Hero Headline ───────┐                │
│  Hero CTA Button ─────┤                │
│  Background Radials ──┼─→ Unified      │
│  Section Labels ──────┤   #14E8F0      │
│  Featured Card ───────┤   Color        │
│  Video Ambient ───────┘   Temperature  │
└─────────────────────────────────────────┘
```

### Typography Hierarchy

```
Hero Headlines:     text-8xl   (96px)
Section Headlines:  text-7xl   (72px)
Card Titles:        text-4xl   (36px)
Subsections:        text-xl    (20px)
Body Text:          text-lg    (18px)
Labels:             text-sm    (14px)
```

### Spacing System

```
Section Padding:    py-32  (8rem / 128px)
Card Padding:       p-16   (4rem / 64px)
Element Gaps:       gap-8  (2rem / 32px)
Text Line Height:   leading-relaxed (1.625)
```

---

## 🔄 Interactive States

### Button States
```
Default:    bg-cyan + shadow-cyan
Hover:      bg-cyan/90 + larger-shadow
Active:     scale-95
Focus:      outline-cyan
```

### Card States
```
Default:    border-white/8
Hover:      border-cyan/40 + shadow
Featured:   border-cyan/80 + glow
```

### Navigation States
```
Default:    text-white/65
Hover:      text-white
Active:     text-cyan (current section)
```

---

## 📱 Responsive Breakpoints

```
Mobile:     < 640px   (sm)
Tablet:     640-1024  (md, lg)
Desktop:    > 1024px  (lg, xl)

Layout Changes:
┌─────────────────────────────────────┐
│ Mobile:  Single column, stacked     │
│ Tablet:  Some 2-column grids        │
│ Desktop: Full multi-column layouts  │
└─────────────────────────────────────┘
```

---

## 🎭 Component Relationships

```
page.tsx (Main Orchestrator)
    │
    ├── Navbar (Fixed Position)
    │
    ├── HeroSection
    │   ├── Event Badge
    │   ├── Headline (2-part)
    │   ├── CTA Buttons
    │   └── Hero Image
    │
    ├── VideoSection
    │   ├── Partner Strip
    │   ├── Section Heading
    │   └── Video Container
    │
    ├── AgendaSection
    │   ├── Section Heading
    │   └── Agenda Card
    │       ├── Day 01 Column
    │       └── Day 02 Column
    │
    ├── SpeakersSection
    │   ├── Section Heading
    │   ├── Speaker Grid (4 cols)
    │   └── View All CTA
    │
    ├── TestimonialsSection
    │   ├── Section Heading
    │   ├── Testimonial Carousel
    │   │   ├── Quote
    │   │   ├── Author Info
    │   │   └── Navigation Dots
    │   └── Stats Bar
    │
    ├── PricingSection
    │   ├── Section Heading
    │   └── Pricing Grid (3 cols)
    │       ├── Student Card
    │       ├── Group Card (Featured)
    │       └── Professional Card
    │
    ├── FAQSection
    │   ├── Section Heading
    │   └── Accordion Items (6)
    │       └── [Interactive Expand/Collapse]
    │
    ├── CTASection
    │   ├── Final Heading
    │   ├── Stats Grid
    │   ├── CTA Buttons
    │   └── Trust Signals
    │
    └── Footer
        ├── Brand Column
        ├── Links Columns (3)
        └── Bottom Bar
```

---

## 🎯 User Journey Flow

```
Landing (Hero)
    ↓
Understand (Video + Partners)
    ↓
Explore (Agenda + Speakers)
    ↓
Trust (Testimonials + Social Proof)
    ↓
Decide (Pricing Options)
    ↓
Clarify (FAQ)
    ↓
Convert (Final CTA)
    ↓
Connect (Footer)
```

---

This visual map helps you understand the structure at a glance and makes customization easier.
