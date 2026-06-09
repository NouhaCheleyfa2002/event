# International Mobility Conference Landing Page

A premium, luxury-tech landing page for an international mobility and career financing conference. Built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎨 Design Philosophy

This landing page combines:
- **Editorial Typography** (fashion magazine style with Playfair Display serif)
- **Cyber-Luxury Aesthetic** (neon cyan accents with atmospheric glows)
- **Dark Cinematic Palette** (deep navy #021326 with strategic lighting)
- **Glassmorphism** (subtle transparency and backdrop blur effects)
- **Layered Depth** (multiple shadow and glow layers for dimensionality)

## 🏗️ Project Structure

```
mobility-event/
├── app/
│   ├── layout.tsx          # Root layout with custom fonts
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and theme
├── components/
│   ├── Navbar.tsx          # Navigation with minimal design
│   ├── HeroSection.tsx     # Hero with glowing headline
│   ├── VideoSection.tsx    # Video showcase with partners
│   ├── AgendaSection.tsx   # Two-day agenda card
│   ├── SpeakersSection.tsx # Speaker grid showcase
│   ├── PricingSection.tsx  # Three-tier pricing cards
│   ├── FAQSection.tsx      # Interactive accordion FAQ
│   ├── CTASection.tsx      # Final conversion section
│   └── Footer.tsx          # Footer with links
└── components/ui/
    └── button.tsx          # Reusable button component
```

## 🎯 Key Features

### Design System
- **Primary Color**: Cyan `#14E8F0` - Used for accents, CTAs, and glowing effects
- **Background**: Deep Navy `#021326` - Creates premium dark atmosphere
- **Typography**: 
  - Serif (Playfair Display): Headlines and emphasis
  - Sans-serif (Inter): Body text and UI elements

### Section Breakdown

#### 1. **Navbar**
- Minimal design with uppercase navigation
- Logo with serif typography + cyan year accent
- Glowing cyan CTA button

#### 2. **Hero Section**
- Two-column split layout (55% content / 45% image)
- Massive serif headline with italic glowing "Without Borders"
- Event badge with cyan border
- Dual CTA buttons (primary glowing, secondary ghost)
- Radial cyan background glow
- Hero image with ambient cyan lighting

#### 3. **Video Section**
- Partner logos strip (subtle serif wordmarks)
- Editorial heading: "The event, in motion."
- Large video container with heavy border radius
- Cyan ambient glow underneath video
- Atmospheric depth through layered shadows

#### 4. **Agenda Section**
- Editorial heading: "Two Days. One Horizon."
- Large card with two-column layout (Day 01 / Day 02)
- Minimal horizontal dash separators
- Exceptional use of negative space
- Subtle borders and typography hierarchy

#### 5. **Speakers Section**
- Grid layout with hover effects
- Avatar placeholders with gradient backgrounds
- Cyan glow effects on hover
- Clean typography hierarchy
- "View All Speakers" CTA

#### 6. **Pricing Section**
- Three-tier pricing (Student / Group / Professional)
- Featured card with cyan border glow and badge
- Large serif price typography
- Minimal feature lists with dash separators
- Glowing primary CTA vs. ghost secondary

#### 7. **FAQ Section**
- Interactive accordion with smooth animations
- Plus icon rotates to X when open
- Cyan accent on active questions
- Clean typography with generous spacing

#### 8. **CTA Section**
- Large glowing card with stats
- Dual CTA buttons
- Trust signals at bottom
- Heavy radial cyan background glow

#### 9. **Footer**
- Brand column with logo and social links
- Three-column link structure
- Subtle hover effects
- Bottom bar with legal links

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Change Colors

Update the cyan accent color throughout:
```css
/* Find and replace #14E8F0 with your preferred accent color */
```

### Replace Hero Image

In `components/HeroSection.tsx`:
```tsx
// Uncomment and add your image
<Image 
  src="/your-hero-image.jpg"
  alt="International Conference"
  fill
  className="object-cover"
  priority
/>
```

### Add Video

In `components/VideoSection.tsx`:
```tsx
// Replace placeholder with your video embed
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Event Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Update Partner Logos

In `components/VideoSection.tsx`:
```tsx
const partners = [
  "Your Partner 1",
  "Your Partner 2",
  // Add more partners
];
```

### Modify Agenda Content

In `components/AgendaSection.tsx`:
```tsx
const agenda = {
  day01: {
    title: "Your Day 1 Title",
    items: [
      "Your agenda item 1",
      "Your agenda item 2",
      // Add more items
    ]
  },
  // Same for day02
};
```

### Update Pricing

In `components/PricingSection.tsx`:
```tsx
const pricingPlans = [
  {
    name: "Your Plan Name",
    description: "Plan description",
    price: "999",
    currency: "USD", // or your currency
    features: ["Feature 1", "Feature 2"],
    featured: true // or false
  }
];
```

## 🎭 Design Details

### Glow Effects
All cyan elements use multi-layered text-shadow:
```css
text-shadow: 
  0 0 10px rgba(20,232,240,0.5),
  0 0 20px rgba(20,232,240,0.4),
  0 0 40px rgba(20,232,240,0.25);
```

### Background Gradients
Radial glows create atmospheric depth:
```css
background: radial-gradient(
  circle at 65% 40%, 
  rgba(0,255,255,0.18), 
  transparent 60%
);
```

### Border Treatment
Extremely subtle borders:
```css
border: 1px solid rgba(255,255,255,0.08);
```

### Shadow System
Soft, spread-out shadows:
```css
box-shadow: 0 30px 80px rgba(0,0,0,0.45);
```

## 📱 Responsive Design

All sections are fully responsive with:
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Flexible grid layouts
- Adjusted typography scales
- Touch-friendly interactive elements

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios

## 🔧 Tech Stack

- **Framework**: Next.js 16.2.7 (App Router)
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or support, contact the development team.

---

Built with precision and attention to detail for a premium conference experience.
