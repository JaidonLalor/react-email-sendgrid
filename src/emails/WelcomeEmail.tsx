import React from "react";
import SendGridBaseEmail from "../sendgrid-components/SendGridBaseEmail";
import { H1, P } from "../sendgrid-components/SendGridText";
import SendGridButton from "../sendgrid-components/SendGridButton";
import SendGridSpacer from "../sendgrid-components/SendGridSpacer";
import EmailHeader from "../components/EmailHeader";
import Footer from "../components/Footer";

export default function WelcomeEmail() {
  return (
    <SendGridBaseEmail>
      <EmailHeader />

      <H1>Welcome aboard</H1>

      <P>
        Thanks for creating an account. You're all set to get started.
      </P>

      <SendGridButton href="{{DASHBOARD_URL}}">
        Go to Dashboard
      </SendGridButton>

      <P>
        If you have any questions, just reply to this email.
      </P>

      <SendGridSpacer height="16px" />

      <Footer />
    </SendGridBaseEmail>
  );
}
