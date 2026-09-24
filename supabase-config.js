// MakanMie Analytics configuration
// 1. Create a free project at https://supabase.com/
// 2. Put your Project URL and anon/public key below.
// 3. Run supabase.sql in Supabase SQL Editor.
window.makanmieSupabase = null;

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

if (window.supabase && SUPABASE_URL.startsWith('https://') && !SUPABASE_URL.includes('YOUR_') && !SUPABASE_ANON_KEY.includes('YOUR_')) {
    window.makanmieSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
