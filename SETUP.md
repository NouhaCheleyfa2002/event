# Quick Setup Guide

## ✅ What's Been Built

Your premium international mobility conference landing page is now complete with:

### 🎨 **9 Premium Sections**

1. **Navbar** - Minimal navigation with glowing CTA
2. **Hero Section** - Massive glowing headline with hero image
3. **Video Section** - Partner logos + video showcase with atmospheric lighting
4. **Agenda Section** - Two-day agenda in elegant card layout
5. **Speakers Section** - Grid showcase with hover effects
6. **Testimonials Section** - Auto-rotating carousel with success stories
7. **Pricing Section** - Three-tier pricing with featured card spotlight
8. **FAQ Section** - Interactive accordion
9. **CTA Section** - Final conversion push with stats
10. **Footer** - Complete footer with links and social

### 🎯 Design Features

✅ **Luxury-Tech Aesthetic** - Dark navy with neon cyan accents  
✅ **Editorial Typography** - Playfair Display serif + Inter sans-serif  
✅ **Atmospheric Glows** - Multi-layered shadows and cyan lighting  
✅ **Glassmorphism** - Subtle transparency and backdrop blur  
✅ **Smooth Animations** - Hover effects, transitions, auto-rotating testimonials  
✅ **Fully Responsive** - Mobile-first design  
✅ **Accessibility Ready** - Semantic HTML, ARIA labels, keyboard navigation  

## 🚀 Running the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

## 📝 Next Steps

### Immediate Customization

#### 1. **Replace Hero Image**
Edit: `components/HeroSection.tsx`
```tsx
// Line ~85 - Uncomment and add your image path
<Image 
  src="/your-hero-image.jpg"
  alt="Conference Hero"
  fill
  className="object-cover"
  priority
/>
```

#### 2. **Add Video**
Edit: `components/VideoSection.tsx`
```tsx
// Line ~75 - Replace placeholder with your video URL
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allowFullScreen
/>
```

#### 3. **Update Event Details**
- **Event Name**: Search for "MOBILITY2024" and replace
- **Dates**: Update in agenda section
- **Location**: Add venue information
- **Pricing**: Edit pricing values in `PricingSection.tsx`

#### 4. **Add Real Speakers**
Edit: `components/SpeakersSection.tsx`
- Replace placeholder initials with actual photos
- Update names, titles, and organizations

#### 5. **Customize Partners**
Edit: `components/VideoSection.tsx`
- Update the `partners` array with your actual partners

#### 6. **Update Contact Info**
Edit: `components/Footer.tsx`
- Add real social media links
- Update footer links and legal pages

### Content Files to Edit

| File | What to Change |
|------|----------------|
| `app/layout.tsx` | Page title and meta description |
| `components/HeroSection.tsx` | Main headline, description, hero image |
| `components/VideoSection.tsx` | Partners list, video embed |
| `components/AgendaSection.tsx` | Event schedule and sessions |
| `components/SpeakersSection.tsx` | Speaker information and photos |
| `components/TestimonialsSection.tsx` | Success stories and testimonials |
| `components/PricingSection.tsx` | Prices, features, currency |
| `components/FAQSection.tsx` | Questions and answers |
| `components/Footer.tsx` | Links, social media, legal info |

## 🎨 Design Customization

### Change Primary Color

Find and replace `#14E8F0` (cyan) with your brand color across all files.

### Adjust Spacing

All sections use consistent spacing with `py-32` (top/bottom padding). Adjust for tighter/looser layouts.

### Typography

Fonts are defined in `app/layout.tsx`:
- Serif: Playfair Display
- Sans-serif: Inter

To change fonts, replace these imports.

## 📱 Testing

### Responsive Testing
Test on these breakpoints:
- **Mobile**: 375px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

### Browser Testing
Test on:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel dashboard.

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Deploy from GitHub
- **Custom Server**: Run `npm start` after build

## 🔧 Troubleshooting

### Fonts Not Loading
- Check internet connection (Google Fonts CDN)
- Verify font imports in `app/layout.tsx`

### Tailwind Styles Not Applied
- Restart dev server: `npm run dev`
- Check for syntax errors in className

### Images Not Showing
- Verify image paths are correct
- Use Next.js Image component for optimization
- Place images in `/public` folder

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Shadcn/ui**: https://ui.shadcn.com

## 💡 Tips

1. **Performance**: All images should use Next.js `<Image>` component for optimization
2. **SEO**: Update meta tags in `app/layout.tsx`
3. **Analytics**: Add Google Analytics or Plausible in layout
4. **Forms**: Integrate registration form with your backend/email service
5. **CMS**: Consider adding a headless CMS (Sanity, Contentful) for easy content updates

## 🎯 Current Status

✅ Complete landing page structure  
✅ All sections designed and responsive  
✅ Premium animations and effects  
✅ Ready for content customization  
⏳ Add real content (images, videos, text)  
⏳ Connect registration form  
⏳ Deploy to production  

---

**Questions?** Refer to `PROJECT_GUIDE.md` for detailed documentation.

**Ready to launch?** Just add your content and deploy! 🚀
