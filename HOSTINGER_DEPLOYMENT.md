# Deploying to Hostinger as Static Site

This guide covers deploying your RaniClean Service website to Hostinger as a static site.

## Overview

Your project is configured with `output: "export"` which generates static HTML files in the `out` folder. These files can be uploaded to any static hosting provider, including Hostinger.

## EmailJS Configuration for Static Sites

### Important Notes

1. **EmailJS Public Key is Safe to Expose**
   - The Public Key is designed to be public (client-side)
   - It's safe to include in your static files
   - EmailJS has built-in rate limiting and security

2. **Current Setup Works Fine**
   - Your EmailJS credentials are currently hardcoded in `src/lib/config/emailjs.config.ts`
   - This is perfectly fine for static sites
   - The values are baked into the build at build time

3. **Environment Variables (Optional)**
   - You can use `.env.local` for development
   - Values must be prefixed with `NEXT_PUBLIC_` to be included in static build
   - Environment variables are replaced at **build time**, not runtime

## Deployment Steps

### Step 1: Build the Static Site

```bash
# Install dependencies (if not already done)
npm install

# Build the static site
npm run build
```

This creates an `out` folder with all static files.

### Step 2: Prepare Files for Upload

The `out` folder contains:
- `index.html` files for each page
- Static assets (CSS, JS, images)
- All necessary files for the site to work

### Step 3: Upload to Hostinger

#### Option A: Via File Manager

1. **Login to Hostinger**
   - Go to hPanel (Hostinger control panel)
   - Navigate to **File Manager**

2. **Navigate to Public HTML**
   - Go to `public_html` folder (or your domain's root folder)
   - Delete any existing files (or backup first)

3. **Upload Files**
   - Upload **all contents** of the `out` folder
   - **Important:** Upload the contents, not the `out` folder itself
   - Files should be directly in `public_html`

4. **Verify Structure**
   ```
   public_html/
   ├── index.html
   ├── _next/
   ├── en/
   ├── de/
   └── ... (other files)
   ```

#### Option B: Via FTP/SFTP

1. **Get FTP Credentials**
   - In Hostinger hPanel → **FTP Accounts**
   - Note your FTP host, username, and password

2. **Connect via FTP Client**
   - Use FileZilla, Cyberduck, or any FTP client
   - Connect to your Hostinger FTP server

3. **Upload Files**
   - Navigate to `public_html` folder
   - Upload all contents of the `out` folder

#### Option C: Via Git (if available)

If Hostinger supports Git deployment:
1. Push your code to GitHub
2. Connect Hostinger to your repository
3. Set build command: `npm run build`
4. Set output directory: `out`

## EmailJS Configuration Options

### Option 1: Keep Current Setup (Recommended)

**Current setup works perfectly:**
- EmailJS credentials are in `src/lib/config/emailjs.config.ts`
- Values are hardcoded (safe for EmailJS public keys)
- No additional configuration needed

**Pros:**
- ✅ Simple and straightforward
- ✅ No environment variable management
- ✅ Works immediately after deployment

**Cons:**
- ❌ Need to rebuild if you change EmailJS credentials
- ❌ Credentials are visible in source code (but this is fine for EmailJS)

### Option 2: Use Environment Variables

**For more flexibility:**

1. **Create `.env.local` file** (for development):
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_yf7pdez
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_5pqvlwc
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=kbwlY4Oxr7UscFPR3
   ```

2. **Build with environment variables:**
   ```bash
   npm run build
   ```
   Values are replaced at build time.

3. **For different environments:**
   - Development: Use `.env.local`
   - Production: Set values before building
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=prod_service_id npm run build
   ```

**Pros:**
- ✅ Can change values without modifying code
- ✅ Different values for dev/prod
- ✅ Credentials not in source code

**Cons:**
- ❌ Still need to rebuild to change values
- ❌ Values are still in the built files (unavoidable for static sites)

## Important Notes for Static Sites

### 1. Environment Variables Behavior

- **Static sites don't have runtime environment variables**
- Values are **baked into the build** at build time
- Must use `NEXT_PUBLIC_` prefix to be included
- To change values, you must rebuild and redeploy

### 2. EmailJS Security

- ✅ Public Key is safe to expose (by design)
- ✅ Service ID and Template ID are safe in client code
- ✅ EmailJS has rate limiting and abuse protection
- ✅ No sensitive data is exposed

### 3. Build Process

```bash
# Development build (uses .env.local if exists)
npm run build

# Production build with custom values
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx \
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=yyy \
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=zzz \
npm run build
```

## Post-Deployment Checklist

After uploading to Hostinger:

- [ ] Test the homepage loads correctly
- [ ] Test language switching (EN/DE)
- [ ] Test all navigation links
- [ ] Test the contact form submission
- [ ] Verify EmailJS is receiving emails
- [ ] Check all pages load (Home, Services, About, Contact, Imprint)
- [ ] Test on mobile devices
- [ ] Verify images load correctly
- [ ] Check SEO meta tags (view page source)

## Troubleshooting

### Contact Form Not Working

1. **Check EmailJS Dashboard**
   - Go to EmailJS dashboard → Logs
   - See if emails are being sent
   - Check for any errors

2. **Verify Credentials**
   - Check `src/lib/config/emailjs.config.ts`
   - Ensure Service ID, Template ID, and Public Key are correct
   - Rebuild if you changed them

3. **Check Browser Console**
   - Open browser DevTools → Console
   - Look for any JavaScript errors
   - Check Network tab for failed requests

### Pages Not Loading

1. **Check File Structure**
   - Ensure files are in `public_html` root, not in a subfolder
   - Verify `index.html` exists in root

2. **Check .htaccess (if needed)**
   - For clean URLs, you might need `.htaccess` file
   - Hostinger usually handles this automatically

3. **Check File Permissions**
   - Ensure files have correct permissions (644 for files, 755 for folders)

### Images Not Loading

1. **Check Image Paths**
   - Images should be in `public` folder (becomes root in `out` folder)
   - Verify image paths in code use `/image.png` not `./image.png`

2. **Check File Upload**
   - Ensure `_next/static` folder was uploaded
   - Verify image files are in the correct location

## Quick Reference

### Build Command
```bash
npm run build
```

### Output Directory
```
out/
```

### EmailJS Config Location
```
src/lib/config/emailjs.config.ts
```

### Environment Variables (Optional)
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

## Need Help?

- Hostinger Support: https://www.hostinger.com/contact
- EmailJS Docs: https://www.emailjs.com/docs/
- Next.js Static Export: https://nextjs.org/docs/app/api-reference/next-config-js/output

