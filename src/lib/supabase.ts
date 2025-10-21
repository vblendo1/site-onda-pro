import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  nome_completo: string;
  nome_empresa: string;
  cnpj: string;
  email_comercial: string;
  whatsapp: string;
  cidade: string;
  estado: string;
  tipo_negocio: string;
  created_at?: string;
}
