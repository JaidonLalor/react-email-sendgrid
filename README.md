# react-email-sendgrid

React components that output SendGrid drag-and-drop compatible HTML. Build on-brand emails with your design system, then hand them off to designers and managers who can update copy and rearrange sections in SendGrid's visual editor. No code changes needed after the initial build.

## The Problem

Email HTML is painful. Table-based layouts, inline styles, client-specific hacks. And once you build them, non-technical team members can't update copy without touching code.

SendGrid's drag-and-drop editor solves the editing problem, but building _for_ it means writing raw HTML with specific `role`, `data-type`, and structural attributes that SendGrid expects. There's no documented component system for this.

## The Solution

This project gives you React components that output SendGrid-compatible HTML. Define your design tokens once, build templates in React, render to HTML, and upload to SendGrid. Your team edits from there.

## Quick Start

```bash
npm install
npm run build        # Renders all emails to dist/
npm run watch        # Rebuild on changes
```

Upload HTML files from `dist/` to SendGrid as design templates.

## How It Works

### SendGrid Primitives (`src/sendgrid-components/`)

Low-level components that emit the exact HTML structure SendGrid's editor expects.

| Component | What it does |
|-----------|-------------|
| `SendGridBaseEmail` | Root HTML wrapper with base styles |
| `SendGridOneColumn` | Single column layout module |
| `SendGridTwoColumns` | Two equal columns |
| `SendGridThreeOneColumns` | 75/25 split column layout |
| `SendGridText` | Text module with `H1`, `H2`, `P` shortcuts |
| `SendGridButton` | CTA button |
| `SendGridDivider` | Horizontal rule |
| `SendGridImage` | Responsive image |
| `SendGridSpacer` | Vertical spacing |
| `SendGridCodeBlock` | Raw HTML block (not editable in SendGrid) |
| `SendGridSocials` | Social media icon row |

### Components (`src/components/`)

Higher-level pieces you'll customize for your brand.

| Component | What it does |
|-----------|-------------|
| `EmailHeader` | Centered logo image |
| `Footer` | Social links and company name |

### Email Templates (`src/emails/`)

Your actual emails, composed from the above. Each default export becomes an HTML file in `dist/`.

## Customizing

### 1. Design tokens

Edit `src/styles.ts`:

```ts
export const colors = {
  primary: "#2563EB",   // Your brand color (buttons, links)
  gray700: "#374151",   // Body text
  // ...
};
```

### 2. Header and footer

`EmailHeader` takes a logo image. `Footer` takes social links and a company name:

```tsx
<EmailHeader
  logoSrc="https://your-cdn.com/logo.png"
  logoHref="https://yoursite.com"
  logoWidth="120px"
/>

<Footer
  companyName="Acme Inc."
  socialLinks={[
    { label: "Twitter", href: "https://twitter.com/acme" },
    { label: "GitHub", href: "https://github.com/acme" },
  ]}
/>
```

### 3. Build a template

```tsx
import React from "react";
import SendGridBaseEmail from "../sendgrid-components/SendGridBaseEmail";
import { H1, P } from "../sendgrid-components/SendGridText";
import SendGridButton from "../sendgrid-components/SendGridButton";
import EmailHeader from "../components/EmailHeader";
import Footer from "../components/Footer";

export default function InviteEmail() {
  return (
    <SendGridBaseEmail>
      <EmailHeader />
      <H1>You're invited</H1>
      <P>Click below to accept your invitation:</P>
      <SendGridButton href="{{INVITE_LINK}}">Accept Invite</SendGridButton>
      <Footer />
    </SendGridBaseEmail>
  );
}
```

## Template Variables

Use `{{VARIABLE_NAME}}` for dynamic content that [SendGrid substitutes](https://docs.sendgrid.com/for-developers/sending-email/using-handlebars) at send time.

## Testing

```bash
# Ethereal (no credentials needed, prints a preview URL)
npm run test:ethereal WelcomeEmail

# Gmail (requires .env.local with app password)
cp .env.example .env.local
npm run test:gmail WelcomeEmail
```

## Project Structure

```
src/
  sendgrid-components/   # SendGrid-compatible primitives
  components/            # Header, footer (customize these)
  emails/                # Your email templates
  styles.ts              # Design tokens
scripts/
  render-to-dist.tsx     # Build: renders all emails to dist/
  test-ethereal.ts       # Test via Ethereal
  test-gmail.ts          # Test via Gmail
dist/                    # Built HTML (gitignored)
```

## License

MIT
