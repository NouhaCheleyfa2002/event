# 🚀 Quick Start Guide

Get your site running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
npm install @supabase/supabase-js
```

## Step 2: Add Your Content

### Update Notion Link
**File**: `components/HeroSection.tsx` (Line 9)
```tsx
const handleViewProgram = () => {
  window.open("https://your-notion-link.com", "_blank");
};
```

### Add Main Video
**File**: `components/VideoSection.tsx` (Line 70-75)
```tsx
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Event Video"
  allowFullScreen
/>
```

### Add Testimonial Videos
**File**: `components/TestimonialsSection.tsx` (Line 8-10)
```tsx
const testimonials = [
  { videoId: "VIDEO_ID_1", name: "Amira Ben Salem", ... },
  { videoId: "VIDEO_ID_2", name: "Karim Mansour", ... },
  { videoId: "VIDEO_ID_3", name: "Yasmine Trabelsi", ... },
];
```

## Step 3: Setup Supabase

1. Go to [supabase.com](https://supabase.com) and create project
2. Copy your credentials from Settings → API
3. Create `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key-here
   ```
4. Run this SQL in Supabase SQL Editor:
   ```sql
   CREATE TABLE participants (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT NOT NULL,
     university TEXT,
     study_level TEXT,
     package_type TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
   );

   ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Allow public insert" ON participants
     FOR INSERT TO public WITH CHECK (true);
   ```

## Step 4: Test It!

```bash
npm run dev
```

Visit http://localhost:3000

### Test These:
1. ✅ Click "View Program" → Should open Notion
2. ✅ Click "Get Your Ticket" → Should scroll to pricing
3. ✅ Click "Register Now" → Should open modal
4. ✅ Fill form and submit → Should show success message
5. ✅ Check Supabase → Should see registration in `participants` table

## Step 5: Deploy

```bash
# Build
npm run build

# Deploy to Vercel
vercel

# Or push to GitHub and connect to Vercel/Netlify
```

---

## 📋 Content Checklist

- [ ] Added Notion link
- [ ] Added main video
- [ ] Added 3 testimonial videos
- [ ] Setup Supabase
- [ ] Added environment variables
- [ ] Tested registration form
- [ ] Checked mobile responsive

---

## 🔗 Important Links

- **Supabase Dashboard**: View registrations
- **Full Setup Guide**: See `SUPABASE_SETUP.md`
- **All Changes**: See `CHANGES_SUMMARY.md`

---

## ❓ Quick Troubleshooting

**Registration not saving?**
- Check `.env.local` has correct Supabase credentials
- Restart dev server after adding env variables
- Check Supabase table was created

**Videos not showing?**
- Make sure video IDs are correct
- Check video is public/embeddable
- Try different video (test with known working ID)

**Notion link not working?**
- Make sure Notion page is published/shared
- Use the full URL including https://

---

**That's it! You're ready to go! 🎉**

For detailed setup, see `SUPABASE_SETUP.md`
For all changes, see `CHANGES_SUMMARY.md`
