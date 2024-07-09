
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bxluhldahxrqbukrqcdy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHVobGRhaHhycWJ1a3JxY2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NTM3MTYsImV4cCI6MjAzNTAyOTcxNn0.0fcUept_tAqKCks-TYp0gp_8kZPDzOMiLAN8JEijvXg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
