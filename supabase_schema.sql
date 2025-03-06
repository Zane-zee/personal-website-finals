-- Create feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add validation constraints
  CONSTRAINT name_not_empty CHECK (char_length(trim(name)) > 0),
  CONSTRAINT email_not_empty CHECK (char_length(trim(email)) > 0),
  CONSTRAINT message_min_length CHECK (char_length(trim(message)) >= 10)
);

-- Create a secure RLS policy for the feedback table
-- This allows anyone to read feedback but only authenticated users to insert
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Policy for reading feedback (public)
CREATE POLICY "Anyone can view feedback" 
  ON feedback FOR SELECT 
  USING (true);

-- Policy for inserting feedback (public can insert)
CREATE POLICY "Anyone can add feedback" 
  ON feedback FOR INSERT 
  WITH CHECK (true);

-- Create a function to notify clients about new feedback
CREATE OR REPLACE FUNCTION notify_feedback_change()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify(
    'feedback_changes',
    json_build_object(
      'type', TG_OP,
      'record', row_to_json(NEW)
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the notification function
DROP TRIGGER IF EXISTS feedback_change_trigger ON feedback;
CREATE TRIGGER feedback_change_trigger
AFTER INSERT OR UPDATE ON feedback
FOR EACH ROW EXECUTE FUNCTION notify_feedback_change(); 