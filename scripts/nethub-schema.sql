CREATE TABLE IF NOT EXISTS public.nethub_state (
  id smallint PRIMARY KEY CHECK (id = 1),
  data jsonb NOT NULL CHECK (jsonb_typeof(data) = 'object')
);

ALTER TABLE public.nethub_state ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.nethub_state FROM PUBLIC, anon, authenticated;