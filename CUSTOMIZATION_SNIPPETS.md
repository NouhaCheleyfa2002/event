# 🎨 Customization Code Snippets

Quick copy-paste snippets for common customizations.

---

## 🎯 Quick Changes

### Change Event Name

**Find:** `MOBILITY2024`  
**Replace with:** Your event name

```tsx
// In Navbar.tsx and Footer.tsx
MOBILITY<span className="text-[#14E8F0]">2024</span>

// Replace with:
YOUR_EVENT<span className="text-[#14E8F0]">2024</span>
```

### Change Primary Color

**Find:** `#14E8F0` (cyan)  
**Replace with:** Your brand color

Use Find & Replace across all files for consistency.

---

## 🖼️ Adding Images

### Hero Section Image

```tsx
// In components/HeroSection.tsx (around line 85)
// Replace the placeholder div with:

<Image 
  src="/hero-conference.jpg"
  alt="International Mobility Conference"
  fill
  className="object-cover"
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Speaker Photos

```tsx
// In components/SpeakersSection.tsx
// Replace the avatar div with:

<div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#14E8F0]/40">
  <Image 
    src={`/speakers/${speaker.image}.jpg`}
    alt={speaker.name}
    fill
    className="object-cover"
  />
</div>
```

---

## 🎥 Video Embed

### YouTube Video

```tsx
// In components/VideoSection.tsx (around line 75)
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Event Highlights"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Vimeo Video

```tsx
<iframe
  className="w-full h-full"
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?title=0&byline=0&portrait=0"
  title="Event Highlights"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
/>
```

---

## 📝 Content Updates

### Update Hero Headline

```tsx
// In components/HeroSection.tsx
<h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-medium text-[#F5F5F5] leading-[1.1] tracking-tight">
  Your Custom
</h1>
<h1 
  className="font-serif italic text-6xl lg:text-7xl xl:text-8xl font-medium text-[#14E8F0] leading-[1.1] tracking-tight"
  style={{ textShadow: `0 0 10px rgba(20,232,240,0.5), 0 0 20px rgba(20,232,240,0.4), 0 0 40px rgba(20,232,240,0.25)` }}
>
  Headline Here.
</h1>
```

### Add/Remove Agenda Items

```tsx
// In components/AgendaSection.tsx
const agenda = {
  day01: {
    title: "Day One Theme",
    items: [
      "9:00 AM - Opening keynote",
      "10:30 AM - Panel discussion",
      "12:00 PM - Networking lunch",
      // Add more items...
    ]
  },
  day02: {
    title: "Day Two Theme",
    items: [
      // Your items...
    ]
  }
};
```

### Update Pricing

```tsx
// In components/PricingSection.tsx
const pricingPlans = [
  {
    name: "Basic Pass",
    description: "Perfect for individuals",
    price: "299",
    currency: "USD", // Change currency
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    featured: false
  },
  // More plans...
];
```

---

## 🔗 Adding Forms

### Contact Form (with Formspree)

```tsx
// Create components/ContactForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        setStatus("Thanks! We'll be in touch soon.");
        form.reset();
      } else {
        setStatus("Oops! There was a problem.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-[#14E8F0] focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-[#14E8F0] focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-[#14E8F0] focus:outline-none"
      />
      <Button 
        type="submit"
        className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium px-8 py-6 rounded-full shadow-[0_0_20px_rgba(20,232,240,0.35)]"
      >
        Send Message
      </Button>
      {status && <p className="text-white/75 text-sm">{status}</p>}
    </form>
  );
}
```

---

## 📊 Analytics Integration

### Google Analytics 4

```tsx
// In app/layout.tsx, add to <head>:

<Script 
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Track Button Clicks

```tsx
// Add onClick handler to any button:
onClick={() => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Register Now',
    });
  }
}}
```

---

## 🎨 Style Variations

### Different Accent Color (Purple)

```tsx
// Replace cyan values with purple:
// #14E8F0 → #A855F7

// Adjust glow shadows:
style={{
  textShadow: `
    0 0 10px rgba(168,85,247,0.5),
    0 0 20px rgba(168,85,247,0.4),
    0 0 40px rgba(168,85,247,0.25)
  `
}}

// Adjust background glows:
style={{
  background: 'radial-gradient(circle at 65% 40%, rgba(168,85,247,0.18), transparent 60%)'
}}
```

### Lighter Background

```tsx
// In app/globals.css, replace:
body {
  background: #021326; // Dark navy
}

// With:
body {
  background: #0a1929; // Lighter navy
}
```

### Change Border Radius Style

```tsx
// More rounded (pill-like):
rounded-[40px] // Instead of rounded-[28px]

// More square:
rounded-[16px] // Instead of rounded-[28px]

// Completely square:
rounded-none
```

---

## 🌐 SEO & Meta Tags

### Update Page Metadata

```tsx
// In app/layout.tsx
export const metadata: Metadata = {
  title: "Your Event Name 2024 | International Conference",
  description: "Join us for the premier international mobility and career financing conference. Connect with global leaders and unlock funding opportunities.",
  keywords: ["international mobility", "conference", "career funding", "global opportunities"],
  authors: [{ name: "Your Organization" }],
  openGraph: {
    title: "Your Event Name 2024",
    description: "The premier international mobility conference",
    url: "https://yourdomain.com",
    siteName: "Your Event Name",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Event Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Event Name 2024",
    description: "The premier international mobility conference",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
};
```

---

## 📱 Mobile Menu

### Add Hamburger Menu

```tsx
// In components/Navbar.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/[0.08] sticky top-0 bg-[#021326]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-serif text-white font-medium">
            MOBILITY<span className="text-[#14E8F0]">2024</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Your nav items */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button className="block w-full text-left text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] py-2">
              About
            </button>
            <button className="block w-full text-left text-white/65 hover:text-white uppercase text-sm tracking-[0.15em] py-2">
              Agenda
            </button>
            {/* More items... */}
          </div>
        )}
      </div>
    </nav>
  );
}
```

---

## 🔔 Newsletter Signup

### Simple Newsletter Form

```tsx
// Create components/NewsletterForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace with your email service API
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-[#14E8F0] focus:outline-none"
      />
      <Button 
        type="submit"
        className="bg-[#14E8F0] text-[#021326] hover:bg-[#14E8F0]/90 font-medium px-8 rounded-full"
      >
        Subscribe
      </Button>
      {status && <p className="text-white/75 text-sm mt-2">{status}</p>}
    </form>
  );
}
```

---

## 🎭 Animation Variants

### Fade In on Scroll

```tsx
// Install framer-motion:
// npm install framer-motion

"use client";

import { motion } from "framer-motion";

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Your content */}
    </motion.div>
  );
}
```

### Stagger Children

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" whileInView="show">
  <motion.div variants={item}>Item 1</motion.div>
  <motion.div variants={item}>Item 2</motion.div>
  <motion.div variants={item}>Item 3</motion.div>
</motion.div>
```

---

## 🔧 Performance Optimization

### Lazy Load Images

```tsx
import Image from "next/image";

<Image
  src="/large-image.jpg"
  alt="Description"
  width={1200}
  height={800}
  loading="lazy" // Lazy load
  quality={85} // Adjust quality
  placeholder="blur" // Show blur while loading
  blurDataURL="data:image/jpeg;base64,..." // Low quality placeholder
/>
```

### Dynamic Imports

```tsx
// For heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Don't render on server
});
```

---

These snippets cover the most common customizations. Mix and match as needed!
