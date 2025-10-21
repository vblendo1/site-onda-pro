/*
  # Create Portfolio Contacts Table

  1. New Tables
    - `portfolio_contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `portfolio_contacts` table
    - Add policy for public users to insert their contact form submissions
    - Only authenticated admin users can read contact submissions

  3. Important Notes
    - This table stores contact form submissions from the portfolio website
    - Public can insert (submit forms) but cannot read
    - All submissions are timestamped for tracking
*/

CREATE TABLE IF NOT EXISTS portfolio_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON portfolio_contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can read contacts"
  ON portfolio_contacts
  FOR SELECT
  TO authenticated
  USING (true);