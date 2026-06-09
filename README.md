# International Mobility Conference Landing Page

A premium, luxury-tech landing page built with Next.js 16, React 19, and Tailwind CSS 4. Designed for an international mobility and project financing conference with a sophisticated dark aesthetic and neon cyan accents.

![License](https://img.shields.io/badge/license-Private-red)
![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- 🎨 **Premium Design System** - Luxury-tech aesthetic with editorial typography
- 🌊 **Smooth Animations** - Auto-rotating testimonials, accordion FAQ, hover effects
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- ♿ **Accessible** - ARIA labels, keyboard navigation, semantic HTML
- ⚡ **Performance Optimized** - Next.js Image optimization, code splitting
- 🎯 **SEO Ready** - Structured metadata, Open Graph tags
- 🔧 **Easy Customization** - Well-documented, modular components

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## 📋 Documentation

| Document | Description |
|----------|-------------|
| **[PROJECT_GUIDE.md](./PROJECT_GUIDE.md)** | Complete project documentation and design system |
| **[SETUP.md](./SETUP.md)** | Quick setup instructions and next steps |
| **[SUMMARY.md](./SUMMARY.md)** | Project overview and feature list |
| **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)** | Step-by-step checklist from dev to launch |
| **[COMPONENT_MAP.md](./COMPONENT_MAP.md)** | Visual guide to page structure |
| **[CUSTOMIZATION_SNIPPETS.md](./CUSTOMIZATION_SNIPPETS.md)** | Copy-paste code for common changes |

## 🎨 Design System

### Colors
- **Primary Background**: `#021326` (Deep Navy)
- **Primary Accent**: `#14E8F0` (Neon Cyan)
- **Text White**: `#F5F5F5`
- **Text Muted**: `rgba(255,255,255,0.75)`

### Typography
- **Headlines**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Key Features
- Multi-layered glow effects
- Atmospheric radial gradients
- Glassmorphism with backdrop blur
- Soft, spread-out shadows

## 📦 Sections Included

1. ✅ **Navbar** - Sticky navigation with smooth scroll
2. ✅ **Hero** - Massive glowing headline with hero image
3. ✅ **Video** - Partner showcase with video embed
4. ✅ **Agenda** - Two-day schedule in elegant card
5. ✅ **Speakers** - Grid showcase with hover effects
6. ✅ **Testimonials** - Auto-rotating carousel with stats
7. ✅ **Pricing** - Three-tier pricing with featured spotlight
8. ✅ **FAQ** - Interactive accordion
9. ✅ **CTA** - Final conversion section with stats
10. ✅ **Footer** - Complete footer with links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.7 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Language**: TypeScript 5

## 📝 Quick Customization

### 1. Replace Placeholders

```tsx
// Hero image - components/HeroSection.tsx
<Image src="/your-hero.jpg" alt="Conference" fill />

// Video embed - components/VideoSection.tsx
<iframe src="https://www.youtube.com/embed/YOUR_ID" />

// Update event name everywhere
MOBILITY2024 → YOUR_EVENT_NAME
```

### 2. Update Content

- Event details (dates, location)
- Pricing (amounts, currency, features)
- Speakers (names, photos, bios)
- FAQ (questions and answers)
- Footer (links, social media)

### 3. Change Colors

Find and replace `#14E8F0` with your brand color throughout the project.

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📈 Performance

- ⚡ Lighthouse Score: 90+ (ready for optimization)
- 🖼️ Next.js Image optimization
- 📦 Automatic code splitting
- 🔄 Lazy loading ready
- 🎯 SEO optimized

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliant

## 📱 Responsive Design

- **Mobile**: 375px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

All sections tested and optimized for mobile-first experience.

## 🔧 Development

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## 📞 Support

For questions or issues, refer to the documentation files:
- Check **SETUP.md** for setup issues
- Check **PROJECT_GUIDE.md** for design details
- Check **CUSTOMIZATION_SNIPPETS.md** for code examples

## 📄 License

This project is private and proprietary.

## 🙏 Credits

Built with precision and attention to detail for a premium conference experience.

---

**Ready to launch?** Follow the [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for deployment steps.
