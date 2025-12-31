# Deploying to Vercel

This guide covers deploying your RaniClean Service website to Vercel.

## Option 1: Deploy as Next.js App (Recommended for Vercel)

Vercel works best with Next.js apps (not static exports). This gives you:
- Automatic optimizations
- Edge functions support
- Better performance
- Automatic deployments from Git

### Step 1: Update Next.js Config

Remove the static export configuration:

**File: `next.config.ts`**

```typescript
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Remove output: "export" for Vercel deployment
  images: {
    unoptimized: false, // Enable image optimization on Vercel
  },
};

export default withNextIntl(nextConfig);
```

### Step 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up or log in (you can use your GitHub account)

3. **Import your project**
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js

4. **Configure project settings**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** Leave empty (Vercel handles this)
   - **Install Command:** `npm install` (default)

5. **Environment Variables (if needed)**
   - Currently, EmailJS credentials are in code
   - If you want to use env variables, add:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

6. **Click "Deploy"**
   - Vercel will build and deploy your app
   - You'll get a URL like: `ranicleanservice.vercel.app`

### Step 3: Configure Custom Domain

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add your domains:
   - `ranicleangservice.de`
   - `ranicleangservice.com`
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificates

---

## Option 2: Deploy as Static Site (Current Config)

If you want to keep the static export (for Hostinger compatibility), you can still deploy to Vercel:

### Step 1: Keep Current Config

Keep `output: "export"` in `next.config.ts` (current setup).

### Step 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Or for production:
   ```bash
   vercel --prod
   ```

4. **Configure in Vercel Dashboard**
   - Go to your project settings
   - Set **Output Directory** to `out`
   - Set **Build Command** to `npm run build`

### Step 3: Update Build Output

Vercel needs to know where the static files are. Create `vercel.json`:

**File: `vercel.json`**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/$1"
    }
  ]
}
```

---

## Recommended: Option 1 (Next.js App)

I recommend **Option 1** because:
- ✅ Better performance with Vercel's optimizations
- ✅ Automatic image optimization
- ✅ Edge functions support
- ✅ Better caching
- ✅ Automatic deployments from Git
- ✅ Preview deployments for PRs

---

## Quick Deploy Checklist

Before deploying:

- [ ] Update `next.config.ts` (remove `output: "export"` if using Option 1)
- [ ] Ensure all EmailJS credentials are set
- [ ] Test build locally: `npm run build`
- [ ] Push code to Git repository
- [ ] Deploy via Vercel dashboard or CLI
- [ ] Configure custom domains
- [ ] Test the deployed site

---

## Post-Deployment

1. **Test the contact form** - Make sure EmailJS is working
2. **Check all pages** - Verify all routes work correctly
3. **Test language switching** - Ensure EN/DE switching works
4. **Verify SEO** - Check meta tags and structured data
5. **Monitor performance** - Use Vercel Analytics (optional)

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Images Not Loading
- If using Option 1, remove `unoptimized: true` from `next.config.ts`
- Ensure images are in the `public` folder

### Routes Not Working
- For static export, ensure all routes are generated in `generateStaticParams`
- Check `out` folder after build to verify all pages exist

### Environment Variables
- Add them in Vercel dashboard → Settings → Environment Variables
- Redeploy after adding variables

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support

