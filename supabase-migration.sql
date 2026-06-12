-- Update participants table for n8n workflow integration
-- This adds all necessary fields for payment tracking and automated email notifications

-- Drop the old table if you want to start fresh (CAREFUL: This deletes all data!)
-- DROP TABLE IF EXISTS participants;

-- Create or alter the participants table
CREATE TABLE IF NOT EXISTS participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  university TEXT,
  study_level TEXT,
  package_type TEXT NOT NULL CHECK (package_type IN ('group', 'student', 'professional')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'cancelled')),
  payment_proof_url TEXT,
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  payment_deadline TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days'),
  confirmation_email_sent BOOLEAN DEFAULT FALSE,
  reminder_1_sent BOOLEAN DEFAULT FALSE,
  final_reminder_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- If the table already exists, add the missing columns
-- Run these one by one if you already have data

ALTER TABLE participants ADD COLUMN IF NOT EXISTS id UUID PRIMARY KEY DEFAULT gen_random_uuid();
ALTER TABLE participants ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'cancelled'));
ALTER TABLE participants ADD COLUMN IF NOT EXISTS payment_proof_url TEXT;
ALTER TABLE participants ADD COLUMN IF NOT EXISTS registered_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE participants ADD COLUMN IF NOT EXISTS payment_deadline TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days');
ALTER TABLE participants ADD COLUMN IF NOT EXISTS confirmation_email_sent BOOLEAN DEFAULT FALSE;
ALTER TABLE participants ADD COLUMN IF NOT EXISTS reminder_1_sent BOOLEAN DEFAULT FALSE;
ALTER TABLE participants ADD COLUMN IF NOT EXISTS final_reminder_sent BOOLEAN DEFAULT FALSE;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_participants_email ON participants(email);
CREATE INDEX IF NOT EXISTS idx_participants_payment_status ON participants(payment_status);
CREATE INDEX IF NOT EXISTS idx_participants_payment_deadline ON participants(payment_deadline);
CREATE INDEX IF NOT EXISTS idx_participants_registered_at ON participants(registered_at);

-- Update function to automatically set updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_participants_updated_at ON participants;
CREATE TRIGGER update_participants_updated_at
  BEFORE UPDATE ON participants
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert for anonymous users (for registration)
CREATE POLICY "Allow public insert" ON participants
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow select for authenticated users (for n8n/admin)
CREATE POLICY "Allow authenticated select" ON participants
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow update for authenticated users (for n8n/admin)
CREATE POLICY "Allow authenticated update" ON participants
  FOR UPDATE
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON participants TO anon;
GRANT SELECT, UPDATE ON participants TO authenticated;
