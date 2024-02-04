import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://udhblsaoynfptfzxqoih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkaGJsc2FveW5mcHRmenhxb2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxNjE2MjcsImV4cCI6MjAxNzczNzYyN30.dw20SLfIFihJ6SwwMW_wW9xVAmfQwpLsak9BqPsAWgE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
