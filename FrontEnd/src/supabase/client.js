import { createClient } from "@supabase/supabase-js";

export const clientUser = createClient(
    process.env.REACT_APP_URL_DATABASE, 
    process.env.REACT_APP_KEY_DATABASE,
)
