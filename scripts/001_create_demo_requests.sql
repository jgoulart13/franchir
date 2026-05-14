-- Create demo_requests table to store form submissions
CREATE TABLE IF NOT EXISTS public.demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Allow authenticated users to view demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update demo requests" ON public.demo_requests;
DROP POLICY IF EXISTS "Allow authenticated users to delete demo requests" ON public.demo_requests;

-- Policy: Allow anyone to insert demo requests (public form submissions)
CREATE POLICY "Allow public to insert demo requests" ON public.demo_requests
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can view demo requests (admin access)
CREATE POLICY "Allow authenticated users to view demo requests" ON public.demo_requests
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update demo requests (admin access)
CREATE POLICY "Allow authenticated users to update demo requests" ON public.demo_requests
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can delete demo requests (admin access)
CREATE POLICY "Allow authenticated users to delete demo requests" ON public.demo_requests
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS demo_requests_email_idx ON public.demo_requests(email);
CREATE INDEX IF NOT EXISTS demo_requests_status_idx ON public.demo_requests(status);
CREATE INDEX IF NOT EXISTS demo_requests_created_at_idx ON public.demo_requests(created_at DESC);
