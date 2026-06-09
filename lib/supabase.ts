import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our database
export type ParticipantRegistration = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  university?: string;
  study_level?: string;
  package_type: "group" | "student" | "professional";
  created_at?: string;
};
