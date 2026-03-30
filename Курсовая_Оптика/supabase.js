// Инициализируем клиент
const supabaseUrl = 'https://your-project-ref.supabase.co'; // из Settings → API
const supabaseKey = 'your-anon-key'; // из Settings → API
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Глобальная переменная для хранения корзины
let cart = [];