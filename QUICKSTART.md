# Quick Start Guide

## 1. Set up Supabase

Before running the application, you need to set up your Supabase project:

### Create a Supabase Project

1. Go to https://supabase.com and sign in (or create an account)
2. Click "New Project"
3. Fill in the project details:
   - Name: Your project name
   - Database Password: Create a strong password
   - Region: Choose the closest region
4. Click "Create new project" and wait for setup to complete

### Get Your API Keys

1. Once the project is ready, go to **Settings** → **API**
2. You'll see two values you need:
   - **Project URL** (starts with `https://`)
   - **anon public** key (under "Project API keys")

## 2. Configure Environment Variables

1. In the root of your project, create a `.env` file:

```bash
cp .env.example .env
```

2. Open `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 3. Run the Application

```bash
# Install dependencies (if not done already)
npm install

# Start the development server
npm run dev
```

The application will open at http://localhost:5173

## 4. Test the Application

1. **Visit the homepage** - You should see the welcome page
2. **Sign Up** - Click "Sign Up" and create a new account
3. **Check your email** - Supabase sends a confirmation email
4. **Sign In** - Use your credentials to log in
5. **Access Dashboard** - You'll be redirected to the dashboard
6. **View Profile** - See your profile information in the Profile tab
7. **Edit Profile** - Try editing your profile name

## Common Issues

### "Missing Supabase environment variables" Error

- Make sure you created the `.env` file
- Check that the variable names are exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart the dev server after creating `.env`

### Email Not Arriving

- Check your spam folder
- In Supabase dashboard, go to Authentication → Email Templates
- For development, you can disable email confirmation:
  - Go to Authentication → Providers
  - Click on Email
  - Uncheck "Enable email confirmations"

### Port Already in Use

If port 5173 is in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

## Next Steps

- Customize the UI in `src/components/`
- Add more pages in `src/pages/`
- Modify the authentication flow in `src/context/AuthContext.tsx`
- Add database tables in Supabase and create new features
- Deploy to Vercel or Netlify (see README.md)

Enjoy building! 🚀
