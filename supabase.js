import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// 👇 ضع مفاتيحك هنا
const supabaseUrl = 'https://bcdyjkmqcdntdixtscfg.supabase.co';
const supabaseKey = 'sb_publishable_LRjpShmGJB6dd5nl3TpGAg_GfjDltQm';

export const supabase = createClient(supabaseUrl, supabaseKey);
