# Deployment & Submission Guide

## 1. Zip Submission (For Internship)
**IMPORTANT**: Do NOT zip the `node_modules` folder. It is huge and unnecessary.

### How to Zip Correctly:
1. Open the project folder `sammunat-landing-page`.
2. Select **only** these files/folders:
   - `src`
   - `public`
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `README.md`
   - `.gitignore`
   - `eslint.config.js`
3. Right-click -> **Send to** -> **Compressed (zipped) folder**.
4. **Result**: Your zip file will be **less than 1MB**. This easily passes the 50MB limit.

---

## 2. GitHub Deployment (Optional but Recommended)

Since this is a fresh project, follow these steps to put it on GitHub:

### Step A: Create Repo
1. Go to [GitHub.com/new](https://github.com/new).
2. Repository name: `sammunat-landing-page`.
3. Make it **Public**.
4. Click **Create repository**.

### Step B: Push Code
Run these commands in your terminal (VS Code):

```bash
# 1. Initialize Git (I have already done this for you)
# git init
# git add .
# git commit -m "Initial commit"

# 2. Link your repo (Replace URL with your own)
git remote add origin https://github.com/YOUR_USERNAME/sammunat-landing-page.git

# 3. Push code
git branch -M main
git push -u origin main
```

---

## 3. Live Deployment (Vercel)
1. Go to [Vercel.com](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Select your `sammunat-landing-page` repo from GitHub.
4. Click **Deploy**.
5. Done! You will get a live URL in 1 minute.
