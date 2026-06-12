# n8n Workflow Setup Guide

## Database Schema

Your Supabase `participants` table now includes these fields:

### Core Fields
- `id` (UUID) - Unique identifier for each participant
- `first_name` (TEXT) - Participant's first name
- `last_name` (TEXT) - Participant's last name
- `email` (TEXT) - Participant's email address
- `phone` (TEXT) - Phone number
- `university` (TEXT) - University/organization name
- `study_level` (TEXT) - Study level or position
- `package_type` (TEXT) - One of: 'group', 'student', 'professional'

### Payment Tracking Fields
- `payment_status` (TEXT) - One of: 'pending', 'paid', 'cancelled'
- `payment_proof_url` (TEXT) - URL to payment proof screenshot/document
- `payment_deadline` (TIMESTAMPTZ) - Default: 7 days from registration

### Timestamp Fields
- `registered_at` (TIMESTAMPTZ) - When participant registered
- `created_at` (TIMESTAMPTZ) - Record creation timestamp
- `updated_at` (TIMESTAMPTZ) - Last update timestamp (auto-updates)

### Email Tracking Fields (for n8n automation)
- `confirmation_email_sent` (BOOLEAN) - Has confirmation email been sent?
- `reminder_1_sent` (BOOLEAN) - Has first payment reminder been sent?
- `final_reminder_sent` (BOOLEAN) - Has final payment reminder been sent?

---

## How to Apply the Migration

### Option 1: Using Supabase Dashboard (Recommended)
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** (in the left sidebar)
3. Click **New Query**
4. Copy the contents of `supabase-migration.sql`
5. Paste into the SQL editor
6. Click **Run** to execute

### Option 2: Using Supabase CLI
```bash
supabase db push
```

---

## n8n Workflow Triggers

### 1. New Registration Trigger
**When:** A new participant registers
**What to do:**
- Send confirmation email with:
  - Registration details
  - Payment deadline (7 days)
  - Payment instructions
  - Bank account details
- Set `confirmation_email_sent = TRUE`

### 2. Payment Reminder 1 (Day 3)
**Trigger:** Run daily at 9 AM
**Filter:** 
```sql
WHERE payment_status = 'pending' 
  AND reminder_1_sent = FALSE 
  AND registered_at < NOW() - INTERVAL '3 days'
  AND payment_deadline > NOW()
```
**What to do:**
- Send first reminder email
- Include 4 days remaining notice
- Set `reminder_1_sent = TRUE`

### 3. Final Payment Reminder (Day 6)
**Trigger:** Run daily at 9 AM
**Filter:**
```sql
WHERE payment_status = 'pending' 
  AND final_reminder_sent = FALSE 
  AND registered_at < NOW() - INTERVAL '6 days'
  AND payment_deadline > NOW()
```
**What to do:**
- Send urgent final reminder
- Include 1 day remaining notice
- Explain cancellation policy
- Set `final_reminder_sent = TRUE`

### 4. Payment Deadline Passed (Day 8)
**Trigger:** Run daily at 9 AM
**Filter:**
```sql
WHERE payment_status = 'pending' 
  AND payment_deadline < NOW()
```
**What to do:**
- Update `payment_status = 'cancelled'`
- Send cancellation notification email
- Offer option to re-register

### 5. Payment Received
**When:** Admin updates `payment_status = 'paid'`
**What to do:**
- Send payment confirmation email
- Include event details
- Add calendar invite (.ics file)
- Send location details

---

## n8n Workflow Example Structure

```
Workflow: Registration & Payment Management

1. Webhook Trigger (from Supabase)
   ↓
2. Supabase Get Record
   ↓
3. Send Confirmation Email
   ↓
4. Update confirmation_email_sent = TRUE

---

Workflow: Daily Payment Reminders

1. Cron Trigger (Daily at 9 AM)
   ↓
2. Supabase Query (Get pending payments)
   ↓
3. Loop through participants
   ↓
4. Check reminder status
   ↓
5. Send appropriate email
   ↓
6. Update reminder flags
```

---

## Supabase Webhooks for n8n

To trigger n8n workflows when data changes:

1. In Supabase Dashboard → **Database** → **Webhooks**
2. Create new webhook:
   - **Name:** "New Registration"
   - **Table:** participants
   - **Events:** INSERT
   - **Webhook URL:** Your n8n webhook URL
   - **HTTP Method:** POST

---

## Email Template Variables

### Confirmation Email
- `{{first_name}}` - Participant's first name
- `{{last_name}}` - Participant's last name
- `{{package_type}}` - Selected package
- `{{payment_deadline}}` - Formatted deadline date
- `{{email}}` - Participant's email

### Reminder Emails
- `{{days_remaining}}` - Days until deadline
- `{{payment_deadline}}` - Formatted deadline date
- Bank account details (static)

---

## Testing Checklist

- [ ] New registration triggers confirmation email
- [ ] Reminder 1 sent on day 3
- [ ] Final reminder sent on day 6
- [ ] Status changes to 'cancelled' after deadline
- [ ] Payment confirmation email sent when marked as paid
- [ ] All email tracking flags update correctly

---

## Environment Variables for n8n

Add these to your n8n environment:

```env
SUPABASE_URL=https://nrvonvnttvjxuxkgamzl.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_password
```

---

## Support

If you need help with:
- Setting up n8n workflows
- Email templates
- Supabase queries

Refer to:
- n8n documentation: https://docs.n8n.io
- Supabase documentation: https://supabase.com/docs
