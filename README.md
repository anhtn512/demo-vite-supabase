# React + Supabase Authentication Project# React + TypeScript + Vite



A modern web application built with React, TypeScript, Vite, Tailwind CSS, and Supabase authentication.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## FeaturesCurrently, two official plugins are available:



- ✅ User Authentication (Sign up, Sign in, Sign out)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- ✅ Protected Routes- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- ✅ Session Persistence

- ✅ User Dashboard with Profile Management## React Compiler

- ✅ Profile Information Display and Editing

- ✅ Modern UI with Tailwind CSS and shadcn/uiThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- ✅ Type-safe with TypeScript

- ✅ Fast Development with Vite## Expanding the ESLint configuration



## Tech StackIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:



- **Frontend**: React 18 + TypeScript```js

- **Build Tool**: Viteexport default defineConfig([

- **Styling**: Tailwind CSS + shadcn/ui components  globalIgnores(['dist']),

- **Backend**: Supabase (Authentication + Database)  {

- **Routing**: React Router v6    files: ['**/*.{ts,tsx}'],

- **State Management**: React Context API    extends: [

      // Other configs...

## Project Structure

      // Remove tseslint.configs.recommended and replace with this

```      tseslint.configs.recommendedTypeChecked,

src/      // Alternatively, use this for stricter rules

├── components/          # UI Components      tseslint.configs.strictTypeChecked,
│   ├── ui/             # shadcn/ui primitives (Button, Card, Input, etc.)      // Optionally, add this for stylistic rules
│   ├── layout/         # Layout components (Navbar, Layout, ProtectedRoute)      tseslint.configs.stylisticTypeChecked,
│   └── auth/           # Authentication components (LoginForm, RegisterForm)
├── pages/              # Page components      // Other configs...
│   ├── HomePage.tsx    ],
│   ├── LoginPage.tsx    languageOptions: {
│   ├── RegisterPage.tsx      parserOptions: {
│   └── DashboardPage.tsx        project: ['./tsconfig.node.json', './tsconfig.app.json'],
├── context/            # React Context providers        tsconfigRootDir: import.meta.dirname,
│   └── AuthContext.tsx      },
├── lib/                # Core utilities & configurations      // other options...
│   ├── supabase.ts     # Supabase client    },
│   └── utils.ts        # Helper functions  },
├── types/              # TypeScript type definitions])
│   └── auth.ts```
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use)

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up/sign in
2. Create a new project
3. Wait for the project to be set up

### 2. Enable Email Authentication

1. Go to Authentication > Providers in your Supabase dashboard
2. Enable Email provider (it's usually enabled by default)
3. Configure email templates if needed (Authentication > Email Templates)

### 3. (Optional) Set up User Profile Table

If you want to store additional user data, create a profile table:

```sql
-- Create a table for user profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  avatar_url text,

  constraint username_length check (char_length(full_name) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create a trigger to automatically create a profile for new users
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Features Walkthrough

### Authentication Flow

1. **Sign Up**: Users can register with email and password
2. **Sign In**: Existing users can log in with their credentials
3. **Session Management**: User sessions are automatically managed by Supabase
4. **Protected Routes**: Dashboard and other protected pages require authentication
5. **Sign Out**: Users can log out, which clears the session

### Dashboard

- View user profile information (email, user ID, creation date)
- Edit profile details (full name)
- Multiple tabs for organization (Profile, Settings)

### UI Components

The project uses shadcn/ui components built on top of Radix UI primitives:
- Button
- Card
- Input
- Label
- Tabs

All components are fully customizable with Tailwind CSS.

## Customization

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Wrap with `<ProtectedRoute>` if authentication is required

### Styling

- Global styles are in `src/index.css`
- Tailwind configuration is in `tailwind.config.js`
- Component styles use Tailwind utility classes

### Adding More UI Components

To add more shadcn/ui components, you can copy them from [shadcn/ui](https://ui.shadcn.com/) and paste them into `src/components/ui/`.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key |

## Deployment

### 🐳 Deploy with Docker (Recommended)

The easiest way to deploy this application is using Docker:

```bash
# Using Docker Compose
docker-compose up -d

# Or using Docker directly
docker build -t sample-app .
docker run -d -p 3000:80 sample-app
```

📖 See [DOCKER.md](./DOCKER.md) for detailed Docker deployment instructions.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## Troubleshooting

### Supabase Connection Issues

- Verify your environment variables are correct
- Check that your Supabase project is active
- Ensure email authentication is enabled in Supabase dashboard

### Build Errors

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## License

MIT

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
