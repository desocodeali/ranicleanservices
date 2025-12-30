# Pre-Deployment Checklist

## 🔴 CRITICAL - Must Update Before Deployment

### 1. EmailJS Configuration
**File:** `src/components/pages/contact-page.tsx` (Lines 21-23)

Replace these placeholder values with your actual EmailJS credentials:
```typescript
const SERVICE_ID = "YOUR_SERVICE_ID";      // ← Replace with your EmailJS Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";    // ← Replace with your EmailJS Template ID
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";      // ← Replace with your EmailJS Public Key
```

**How to get EmailJS credentials:**
1. Sign up at https://www.emailjs.com/
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key from Account settings

---

### 2. Domain Names Verification
**Files to check:**
- All metadata files use: `ranicleangservice.de` and `ranicleangservice.com`
- **IMPORTANT:** Verify if your domains are:
  - `ranicleangservice.de` and `ranicleangservice.com` (with 'g')
  - OR `ranicleanservice.de` and `ranicleanservice.com` (with 's')

If there's a typo, you need to update ALL occurrences in:
- `src/app/[locale]/layout.tsx`
- `src/app/[locale]/page.tsx`
- `src/app/[locale]/services/page.tsx`
- `src/app/[locale]/about/page.tsx`
- `src/app/[locale]/contact/page.tsx`
- `src/app/[locale]/imprint/page.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

---

## 🟡 IMPORTANT - Should Update

### 3. Twitter Handle (Optional)
**File:** `src/app/[locale]/layout.tsx` (Line 87)

If you have a Twitter/X account:
```typescript
creator: "@ranicleanservice", // ← Update with your actual Twitter handle
```

If you don't have Twitter, you can remove this line or leave it as is.

---

### 4. Geo Coordinates (Optional but Recommended)
**File:** `src/app/[locale]/layout.tsx` (Lines 152-153)

Current coordinates are approximate Berlin center. Update with your exact location:
```typescript
latitude: "52.5044",   // ← Update with exact latitude
longitude: "13.3333",  // ← Update with exact longitude
```

**How to get exact coordinates:**
- Google Maps: Right-click on your location → Copy coordinates
- Or use: https://www.latlong.net/

---

### 5. Search Engine Verification Codes (Optional)
**File:** `src/app/[locale]/layout.tsx` (Lines 95-99)

After setting up Google Search Console, add verification codes:
```typescript
verification: {
  google: "your-google-verification-code",    // ← Add after Google Search Console setup
  yandex: "your-yandex-verification-code",   // ← Optional
  yahoo: "your-yahoo-verification-code",     // ← Optional
},
```

---

### 6. Sitemap Last Modified Date
**File:** `public/sitemap.xml`

Update the `<lastmod>` dates when you deploy:
```xml
<lastmod>2025-01-27</lastmod>  <!-- ← Update to current date -->
```

---

## 🟢 RECOMMENDED - Nice to Have

### 7. Logo Image
Ensure `public/logo.webp` exists and is optimized for:
- Open Graph images (1200x630px recommended)
- Twitter Card images

---

### 8. Build and Test
Before deploying, run:
```bash
npm run build
```

Check for any errors and test locally:
```bash
npm run start
```

---

## 📋 Hosting Configuration (Hostinger)

### 9. Static Export
The site is configured for static export (`output: 'export'` in `next.config.ts`).

**After building:**
1. Run `npm run build`
2. Upload the `out/` folder contents to your Hostinger hosting
3. Ensure both domains point to the same directory

### 10. Domain Configuration
- Point both domains (`ranicleangservice.de` and `ranicleangservice.com`) to the same hosting directory
- Set up SSL certificates for both domains
- Configure domain redirects if needed (e.g., redirect www to non-www)

### 11. Google Search Console
After deployment:
1. Submit both domains to Google Search Console
2. Submit the sitemap: `https://ranicleangservice.com/sitemap.xml`
3. Submit the sitemap: `https://ranicleangservice.de/sitemap.xml`

---

## ✅ Final Checks

- [ ] EmailJS credentials updated
- [ ] Domain names verified (check for typos)
- [ ] Twitter handle updated (if applicable)
- [ ] Geo coordinates updated (if needed)
- [ ] Build runs without errors (`npm run build`)
- [ ] Test contact form works
- [ ] All pages load correctly
- [ ] Language switcher works
- [ ] Images load correctly
- [ ] SSL certificates configured for both domains
- [ ] Sitemap submitted to Google Search Console

---

## 🚀 Deployment Steps

1. **Update all items in the checklist above**
2. **Build the site:**
   ```bash
   npm run build
   ```
3. **Upload the `out/` folder** to your Hostinger hosting
4. **Configure domains** in Hostinger control panel
5. **Test both domains** are accessible
6. **Submit sitemaps** to Google Search Console

---

## 📞 Support

If you encounter any issues during deployment, check:
- Hostinger documentation for static site hosting
- Next.js static export documentation
- EmailJS documentation for form setup

