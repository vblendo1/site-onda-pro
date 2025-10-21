/*
  # Create leads table for Onda Pro landing page

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `nome_completo` (text) - Full name of the contact person
      - `nome_empresa` (text) - Company name
      - `cnpj` (text) - Brazilian company registration number
      - `email_comercial` (text) - Commercial email address
      - `whatsapp` (text) - WhatsApp contact number
      - `cidade` (text) - City location
      - `estado` (text) - State location
      - `tipo_negocio` (text) - Type of business (Papelaria/Comércio)
      - `created_at` (timestamptz) - Timestamp when lead was created

  2. Security
    - Enable RLS on `leads` table
    - Add policy for public insert (allows form submissions)
    - Add policy for authenticated read (for admin access)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo text NOT NULL,
  nome_empresa text NOT NULL,
  cnpj text NOT NULL,
  email_comercial text NOT NULL,
  whatsapp text NOT NULL,
  cidade text NOT NULL,
  estado text NOT NULL,
  tipo_negocio text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (for form submissions)
CREATE POLICY "Anyone can submit lead form"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all leads (for admin dashboard)
CREATE POLICY "Authenticated users can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);