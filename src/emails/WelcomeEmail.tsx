import React from "react";
import BaseEmail from "../components/BaseEmail";
import { H1, P } from "../sendgrid-components/SendGridText";
import SendGridButton from "../sendgrid-components/SendGridButton";
import SendGridDivider from "../sendgrid-components/SendGridDivider";

export default function WelcomeEmail() {
  return (
    <BaseEmail text1="My App" text2="Welcome">
      <H1>Welcome to My App!</H1>

      <P>Thanks for signing up. We're glad to have you on board.</P>

      <P>Click below to get started:</P>

      <SendGridButton href="{{DASHBOARD_LINK}}">Go to Dashboard</SendGridButton>

      <SendGridDivider />

      <P>If you have any questions, just reply to this email. We're happy to help.</P>
    </BaseEmail>
  );
}
