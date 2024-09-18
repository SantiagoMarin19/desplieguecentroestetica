import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gdgzbxlcnemmcxpgnowg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZ3pieGxjbmVtbWN4cGdub3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MjM1NzMsImV4cCI6MjA0MjE5OTU3M30.IQeOeOPyE606iz3agaSxy8igM1zLVQL_WxF5gCkGaso")

export default supabase;