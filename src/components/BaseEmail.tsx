import React from "react";
import Footer from "./Footer";
import EmailHeader from "./EmailHeader";
import SendGridBaseEmail from "../sendgrid-components/SendGridBaseEmail";
import SendGridSpacer from "../sendgrid-components/SendGridSpacer";
import { P } from "../sendgrid-components/SendGridText";

interface FooterConfig {
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  companyName?: string;
  address?: string;
  phone?: string;
  socialLinks?: { href: string; alt: string; iconSrc: string }[];
}

interface BaseEmailProps {
  text1?: string;
  text2?: string;
  signoff?: string;
  teamName?: string;
  footer?: FooterConfig;
  children: React.ReactNode;
}

export default function BaseEmail({
  text1 = "Your App",
  text2 = "Your Company",
  signoff = "Best Regards",
  teamName = "The Team",
  footer,
  children
}: BaseEmailProps) {
  return (
    <SendGridBaseEmail>
      <EmailHeader text1={text1} text2={text2} />

      {children}

      <P>{signoff},<br/>{teamName}</P>

      <SendGridSpacer height="16px" />

      <Footer {...footer} />
    </SendGridBaseEmail>
  );
}
