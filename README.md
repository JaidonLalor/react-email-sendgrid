# react-email-sendgrid

Build on-brand emails with your design system in React, then hand them off to your team in SendGrid's drag-and-drop editor. No code changes needed after the initial build.

## The Problem

Email HTML is painful. Table-based layouts, inline styles, client-specific hacks. And once you build them, non-technical team members can't update copy or rearrange sections without touching code.

SendGrid's drag-and-drop editor solves the editing problem, but building _for_ it means writing raw HTML with specific `role`, `data-type`, and structural attributes that SendGrid expects. There's no documented component system for this.

## The Solution

This project gives you React components that output SendGrid-compatible HTML. You define your brand's design tokens (colors, spacing, typography) once, build your email templates in React, then render them to HTML files that SendGrid recognizes as drag-and-drop editable.

**For developers:** Write emails using composable React components with your design system baked in. No manual table nesting, no inline style repetition.

**For designers and managers:** Once the templates are built, update copy, swap sections, and rearrange content directly in SendGrid's drag-and-drop editor. No code, no deploys.

## How It Works

The system has three layers:

### 1. SendGrid Primitives (`src/sendgrid-components/`)

Low-level components that emit the exact HTML structure SendGrid's editor expects. These handle all the table-based layout and `data-type` attributes.

| Component | What it does |
|-----------|-------------|
| `SendGridBaseEmail` | Root HTML wrapper with dark mode protection and base styles |
| `SendGridOneColumn` | Single column layout module |
| `SendGridTwoColumns` | Two equal columns with optional dark mode forcing |
| `SendGridThreeOneColumns` | 75/25 split column layout |
| `SendGridText` | Text module with `H1`, `H2`, `P` shortcuts |
| `SendGridButton` | CTA button with configurable alignment |
| `SendGridDivider` | Horizontal rule with customizable color and spacing |
| `SendGridImage` | Responsive image module |
| `SendGridSpacer` | Vertical spacing module |
| `SendGridCodeBlock` | Raw HTML block (not editable in SendGrid's editor) |
| `SendGridSocials` | Social media icon row |

### 2. Composite Components (`src/components/`)

Higher-level components built from the primitives. These encode your brand's patterns.

| Component | What it does |
|-----------|-------------|
| `BaseEmail` | Wraps every email with header, signoff, and footer |
| `EmailHeader` | Two-column header (product name + company name) |
| `Footer` | Dark-mode-safe footer with logo, address, and social links |
| `InfoItems` | Label/value list for displaying structured data |

### 3. Email Templates (`src/emails/`)

Concrete emails built from composites. These are what you render to HTML and upload to SendGrid.

## Quick Start

```bash
# Install dependencies
npm install

# Build all emails to dist/
npm run build

# Watch for changes and rebuild
npm run watch
```

Upload the HTML files from `dist/` to SendGrid as design templates. Sections tagged with the right `data-type` attributes will be editable in the drag-and-drop editor.

## Customizing for Your Brand

### 1. Update design tokens

Edit `src/styles.ts` with your brand colors and spacing:

```ts
export const colors = {
  // Neutrals
  gray50: "#F7F7F7",
  gray700: "#47494B",
  // Your brand colors
  primary: "#4AE0A7",
  link: "#69AFFF",
  danger: "#dc3545"
};
```

### 2. Configure your email wrapper

`BaseEmail` accepts props for branding. Set your defaults:

```tsx
<BaseEmail
  text1="My Product"
  text2="My Company"
  signoff="Cheers"
  teamName="The MyCompany Team"
  footer={{
    logoSrc: "https://your-cdn.com/logo.png",
    logoHref: "https://yoursite.com",
    companyName: "Your Company, Inc.",
    address: "123 Main St, City, ST 12345",
    phone: "1-555-123-4567",
    socialLinks: [
      { href: "https://twitter.com/you", alt: "Twitter", iconSrc: "https://your-cdn.com/twitter.png" },
      { href: "https://linkedin.com/company/you", alt: "LinkedIn", iconSrc: "https://your-cdn.com/linkedin.png" }
    ]
  }}
>
```

### 3. Build your email templates

Create new files in `src/emails/`. Each default export becomes an HTML file in `dist/`:

```tsx
import React from "react";
import BaseEmail from "../components/BaseEmail";
import { H1, P } from "../sendgrid-components/SendGridText";
import SendGridButton from "../sendgrid-components/SendGridButton";

export default function InviteEmail() {
  return (
    <BaseEmail text1="My App" text2="Invitation">
      <H1>You've been invited!</H1>
      <P>Click below to accept your invitation:</P>
      <SendGridButton href="{{INVITE_LINK}}">Accept Invite</SendGridButton>
    </BaseEmail>
  );
}
```

## Template Variables

Use `{{VARIABLE_NAME}}` syntax for dynamic content that SendGrid will substitute at send time. These are [SendGrid Handlebars](https://docs.sendgrid.com/for-developers/sending-email/using-handlebars) expressions.

## Testing

### Ethereal (no credentials needed)

```bash
npm run test:ethereal WelcomeEmail
```

Creates a temporary inbox and sends the email. Prints a preview URL you can open in your browser.

### Gmail

```bash
cp .env.example .env.local
# Edit .env.local with your Gmail credentials
npm run test:gmail WelcomeEmail
```

Requires a [Gmail App Password](https://support.google.com/accounts/answer/185833).

## Dark Mode

The footer component uses a `linear-gradient` trick to force a dark background even when email clients apply dark mode transformations. This prevents light-colored logos from disappearing against an inverted background.

Because this uses a `SendGridCodeBlock`, the footer is **not editable** in SendGrid's drag-and-drop editor. Update it in code. See `FooterSG.tsx` in the original source for a drag-and-drop compatible version that trades off dark mode protection.

## Project Structure

```
src/
  sendgrid-components/   # Low-level SendGrid-compatible primitives
  components/            # Brand-level composite components
  emails/                # Your email templates
  styles.ts              # Design tokens (colors, spacing)
  globals.d.ts           # React type augmentations for email attributes
scripts/
  render-to-dist.tsx     # Build script: renders all emails to dist/
  test-ethereal.ts       # Send test emails via Ethereal
  test-gmail.ts          # Send test emails via Gmail
dist/                    # Built HTML files (gitignored)
```

## License

MIT
