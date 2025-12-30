# EmailJS Setup Guide

## How the Contact Form Works

The contact form uses **EmailJS** to send emails directly from the browser. This is necessary because the website is a static site (no server-side code).

## Where Messages Go

When a user submits the contact form, the message will be sent to **the email address you configure in your EmailJS account**.

### Current Status

⚠️ **The form is NOT configured yet** - you need to set up EmailJS first.

## Setup Instructions

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook**
   - **Yahoo**
   - Or any SMTP service
4. Connect your email account
5. **Copy the Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from RaniClean Service

**Content:**

```
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Type: {{service_type}}

Message:
{{message}}

---
This message was sent from the RaniClean Service website contact form.
```

4. **To Email:** Enter the email address where you want to receive messages:
   - `b.1975ferchichi@hotmail.com`
   - OR `ranicleanservice@yahoo.com`
   - OR both (you can add multiple recipients)

5. **From Name:** RaniClean Service Website
6. **From Email:** Use your EmailJS service email or a no-reply address
7. Click **Save**
8. **Copy the Template ID** (e.g., `template_xxxxx`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key**
3. **Copy the Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 5: Update the Code

Open `src/components/pages/contact-page.tsx` and replace lines 22-24:

```typescript
const SERVICE_ID = "YOUR_SERVICE_ID"; // ← Replace with your Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // ← Replace with your Template ID
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // ← Replace with your Public Key
```

**Example:**

```typescript
const SERVICE_ID = "service_abc123";
const TEMPLATE_ID = "template_xyz789";
const PUBLIC_KEY = "abcdefghijklmnop";
```

## Which Email Will Receive Messages?

The email address that receives messages is configured in **Step 3** when you create the EmailJS template. You can set it to:

- `b.1975ferchichi@hotmail.com`
- `ranicleanservice@yahoo.com`
- Or any other email address you prefer

You can even add multiple recipients by separating emails with commas in the "To Email" field.

## Testing

After setup:

1. Fill out the contact form on your website
2. Submit it
3. Check the email inbox you configured in EmailJS
4. You should receive the form submission

## Important Notes

- **Free Plan:** 200 emails/month
- **Paid Plans:** Available if you need more
- **Security:** The Public Key is safe to expose in client-side code
- **No Server Required:** Works perfectly with static hosting

## Troubleshooting

If messages don't arrive:

1. Check EmailJS dashboard → **Logs** to see if emails were sent
2. Check spam/junk folder
3. Verify email address in template is correct
4. Make sure EmailJS service is connected properly
