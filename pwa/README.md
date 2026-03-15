# Tapan's Daily Blueprint — PWA v2

A mobile-first Progressive Web App for daily body recomposition tracking with mode-based workflow.

## Quick Deploy to GitHub Pages (5 minutes)

### Step 1: Create a GitHub repo
1. Go to [github.com/new](https://github.com/new)
2. Name it: `tapan-daily-blueprint`
3. Set to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2: Push files
```bash
cd tapan-daily-blueprint-pwa
git init
git add .
git commit -m "Initial PWA deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tapan-daily-blueprint.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: `main`, Folder: `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes for the build

### Step 4: Install on Android
1. Open Chrome on your phone
2. Go to `https://YOUR_USERNAME.github.io/tapan-daily-blueprint/`
3. Chrome will show an **"Install app"** banner at the bottom — tap it
4. Or: tap ⋮ (three dots) → **"Add to Home screen"** / **"Install app"**
5. The app will appear on your home screen as a standalone app

## Important Notes

- **If you rename the repo**, update `start_url` and `scope` in `manifest.json`, and the paths in `sw.js`
- **Data is stored in localStorage** — persists across sessions, survives app restarts
- **Offline support**: once loaded, the app works without internet via service worker caching
- **Updates**: after pushing changes, users may need to close and reopen the app (or wait for the service worker to update)

## Features
- 5 modes: Rise, Work, Study, Gym, Wind Down
- Anti-procrastination gym motivation system
- Protein tracking (130g daily target)
- Water intake tracking (3.5L target)
- Daily weight logging
- Exercise checklists (Push/Pull/Legs/Run)
- Energy & mood ratings
- 14-day history view
- Confetti celebrations on task completion

## Tech Stack
- Vanilla HTML + React 18 (CDN)
- localStorage for persistence
- Service Worker for offline support
- PWA manifest for installability
- Zero build tools required
