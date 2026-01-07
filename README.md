# 11+ Quest 🎮

An anime/K-style gamified 11+ exam practice app with real exam timing, leaderboards, and XP system.

![11+ Quest](https://img.shields.io/badge/Next.js-14-black)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue)

## Features

- 🎯 **Realistic Mock Exams** - Full 45-min (50 questions) and Quick 15-min (20 questions) mocks
- 📚 **4 Subjects** - Verbal Reasoning, Non-Verbal Reasoning, English, Maths
- ⭐ **3 Difficulty Levels** - Easy, Medium, Hard with progressive difficulty
- 🔥 **Combo Streaks** - Get bonus XP for consecutive correct answers
- ⚡ **XP System** - Earn points and level up
- 🏆 **Global Leaderboard** - Compete with other players
- 📊 **Personal Dashboard** - Track your progress
- 🎨 **Anime/K-Style Design** - Fun, engaging interface with animations
- 🔐 **Google Login** - Simple, secure authentication

## Quick Start

### 1. Create Supabase Project (5 mins)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **Settings → API** and copy:
   - `Project URL`
   - `anon public` key

### 2. Set Up Database Tables

Go to **SQL Editor** in Supabase and run this:

```sql
-- Scores table
CREATE TABLE scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name TEXT,
  user_avatar TEXT,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  subject TEXT NOT NULL,
  level TEXT NOT NULL,
  time_taken INTEGER DEFAULT 0,
  xp_earned INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User stats table
CREATE TABLE user_stats (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  user_name TEXT,
  user_avatar TEXT,
  total_xp INTEGER DEFAULT 0,
  total_correct INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 0,
  mock_exams_completed INTEGER DEFAULT 0,
  perfect_scores INTEGER DEFAULT 0,
  best_streak INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- Policies for scores
CREATE POLICY "Users can insert own scores" ON scores
  FOR INSERT WITH CHECK (auth.uid() = user_id);
  
CREATE POLICY "Anyone can view scores" ON scores
  FOR SELECT USING (true);

-- Policies for user_stats
CREATE POLICY "Users can manage own stats" ON user_stats
  FOR ALL USING (auth.uid() = user_id);
  
CREATE POLICY "Anyone can view stats" ON user_stats
  FOR SELECT USING (true);

-- Create indexes
CREATE INDEX idx_scores_user_id ON scores(user_id);
CREATE INDEX idx_scores_percentage ON scores(percentage DESC);
CREATE INDEX idx_scores_created_at ON scores(created_at DESC);
CREATE INDEX idx_user_stats_xp ON user_stats(total_xp DESC);
```

### 3. Enable Google OAuth

1. In Supabase, go to **Authentication → Providers**
2. Enable **Google**
3. You'll need to set up Google OAuth:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a project (or use existing)
   - Go to **APIs & Services → Credentials**
   - Create **OAuth 2.0 Client ID** (Web application)
   - Add authorized redirect URI: `https://YOUR_PROJECT.supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase

### 4. Deploy to Vercel

#### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/11plus-quest)

#### Option B: Manual Deploy

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
4. Deploy!

### 5. Update OAuth Redirect

After deploying, add your Vercel URL to Google OAuth:
- Authorized redirect URI: `https://your-app.vercel.app/auth/callback`

## Local Development

```bash
# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run dev server
npm run dev
```

## Project Structure

```
11plus-quest/
├── app/
│   ├── page.tsx          # Landing/Login page
│   ├── quiz/page.tsx     # Main quiz
│   ├── leaderboard/      # Global leaderboard
│   ├── dashboard/        # Personal stats
│   └── auth/callback/    # OAuth callback
├── components/
│   ├── Quiz.tsx          # Main quiz component
│   ├── Navbar.tsx        # Navigation
│   └── QuickMockModal.tsx
├── lib/
│   ├── supabase/         # Supabase clients
│   ├── questions.ts      # Question bank
│   └── types.ts          # TypeScript types
└── README.md
```

## Customization

### Adding More Questions

Edit `lib/questions.ts` to add more questions to each subject/level.

### Changing Exam Timing

In `components/Quiz.tsx`, modify:
- `mockTimeLimit` for full mock (default: 45 minutes)
- Quick mock time (default: 15 minutes)
- Subject mock time (default: 10 minutes)

### Styling

The app uses Tailwind CSS. Main colors are defined in `tailwind.config.ts`.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Auth & Database**: Supabase
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript

## License

MIT - Feel free to use for your own 11+ prep!

---

Made with 💜 for 11+ students everywhere. 화이팅! 🚀
