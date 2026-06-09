# Supabase Setup Guide

Follow these steps to set up registration functionality with Supabase.

## Step 1: Install Dependencies

```bash
npm install @supabase/supabase-js
```

## Step 2: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new account or sign in
3. Click "New Project"
4. Fill in:
   - Project name: mobility-event
   - Database password: (choose a strong password)
   - Region: (choose closest to your users)
5. Wait for project to be created (1-2 minutes)

## Step 3: Get API Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (under Project API)
   - **anon/public key** (under Project API keys)

## Step 4: Create Environment File

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   copy .env.local.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 5: Create Database Table

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL:

```sql
-- Create participants table
CREATE TABLE participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  university TEXT,
  study_level TEXT,
  package_type TEXT NOT NULL CHECK (package_type IN ('group', 'student', 'professional')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index on email for faster lookups
CREATE INDEX idx_participants_email ON participants(email);

-- Create index on created_at for sorting
CREATE INDEX idx_participants_created_at ON participants(created_at DESC);

-- Enable Row Level Security
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for registration)
CREATE POLICY "Allow public insert" ON participants
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow only authenticated users to read (for admin panel)
CREATE POLICY "Allow authenticated read" ON participants
  FOR SELECT
  TO authenticated
  USING (true);
```

4. Click **Run** to execute the SQL

## Step 6: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000
3. Click "Register Now" or "Get Your Ticket"
4. Fill out the registration form
5. Submit

6. Check Supabase dashboard:
   - Go to **Table Editor** → **participants**
   - You should see your test registration!

## Step 7: View Registrations

### Option 1: Supabase Dashboard
1. Go to **Table Editor** → **participants**
2. View all registrations in a table format
3. Export to CSV if needed

### Option 2: Create Admin Panel (Optional)
You can create a simple admin page to view registrations:

```tsx
// app/admin/page.tsx
import { supabase } from "@/lib/supabase";

export default async function AdminPage() {
  const { data: participants } = await supabase
    .from("participants")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Registrations</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Package</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {participants?.map((p) => (
            <tr key={p.id}>
              <td>{p.first_name} {p.last_name}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
              <td>{p.package_type}</td>
              <td>{new Date(p.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## Troubleshooting

### Error: "Invalid API key"
- Check that you copied the **anon/public** key (not the service_role key)
- Make sure there are no extra spaces in `.env.local`
- Restart your dev server after adding env variables

### Error: "relation 'participants' does not exist"
- Make sure you ran the SQL query in Step 5
- Check that the table was created in **Table Editor**

### Registration not appearing
- Check browser console for errors
- Verify env variables are correct
- Check Supabase logs in dashboard → **Logs**

## Security Notes

1. **Row Level Security (RLS)** is enabled
   - Public users can only INSERT (register)
   - Only authenticated users can SELECT (view) data
   
2. **No payment data** is stored
   - The form only collects contact information
   - Payment is handled separately offline

3. **Email validation**
   - Consider adding email verification in production
   - You can use Supabase Auth for this

## Next Steps

1. ✅ Test registration flow
2. ✅ Verify data in Supabase
3. 📧 Set up email notifications (optional):
   - Use Supabase Edge Functions
   - Or integrate with services like SendGrid, Resend
4. 📊 Create admin dashboard to manage registrations
5. 🔒 Add authentication for admin access

---

**Need help?** Check:
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
