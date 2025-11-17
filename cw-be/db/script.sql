CREATE TABLE party (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  abbreviation text
);

CREATE TABLE leader (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  photo_url text,
  party_id uuid REFERENCES party(id),
  corruption_score int DEFAULT 0
);

CREATE TABLE corruption_case (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  amount_involved numeric,
  year int,
  status text DEFAULT 'ALLEGED',
  sources json,
  leader_id uuid REFERENCES leader(id)
);

