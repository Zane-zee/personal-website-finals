# Supabase Setup for Feedback Form

This document provides instructions on how to set up Supabase for the real-time feedback form in this project.

## Prerequisites

1. A Supabase account (free tier is sufficient)
2. Access to the Supabase dashboard

## Setup Steps

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign in or create an account
2. Create a new project with a name of your choice
3. Wait for the database to be ready (this may take a few minutes)

### 2. Get Your API Credentials

1. In your Supabase project dashboard, go to Project Settings > API
2. Copy the "Project URL" and "anon public" key
3. Open the `.env` file in your project root
4. Replace the placeholder values with your actual credentials:
   ```
   VITE_SUPABASE_URL=your_actual_project_url
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key
   ```

### 3. Create the Feedback Table

1. In your Supabase dashboard, go to the SQL Editor
2. Create a new query
3. Copy and paste the SQL from the `supabase_schema.sql` file in this project
4. Run the query to create the feedback table and set up the real-time functionality

### 4. Enable Real-Time

1. In your Supabase dashboard, go to Database > Replication
2. Enable the "Realtime" option for the "feedback" table
3. Make sure the "Insert" event is selected

## Testing the Setup

1. Start your development server with `npm run dev`
2. Open the feedback page in your browser
3. Submit a test message
4. The message should appear in the list without refreshing the page
5. You can also verify in the Supabase dashboard that the data was inserted correctly

## Troubleshooting

- If real-time updates aren't working, check that you've enabled real-time for the feedback table in Supabase
- Verify that your .env file has the correct credentials and that you've restarted the development server after making changes
- Check the browser console for any errors related to Supabase connections

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Real-Time](https://supabase.com/docs/guides/realtime) 