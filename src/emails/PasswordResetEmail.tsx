import React from "react";
import BaseEmail from "../components/BaseEmail";
import { H1, P } from "../sendgrid-components/SendGridText";
import SendGridButton from "../sendgrid-components/SendGridButton";
import { colors } from "../styles";

export default function PasswordResetEmail() {
  return (
    <BaseEmail>
      <H1>Reset Your Password</H1>

      <P>
        We received a request to reset the password for your account.
        Click the button below to choose a new password:
      </P>

      <SendGridButton href="{{RESET_LINK}}">Reset Password</SendGridButton>

      <P>
        This link will expire in 24 hours. If you didn't request a
        password reset, you can safely ignore this email.
      </P>

      <P>
        <span style={{ fontSize: "14px", color: colors.gray400 }}>
          If the button doesn't work, copy and paste this URL into your browser:<br/>
          {'{{RESET_LINK}}'}
        </span>
      </P>
    </BaseEmail>
  );
}
