import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import React from "react";

async function sendTestEmail() {
  try {
    const testAccount = await nodemailer.createTestAccount();

    console.log("Test account created:");
    console.log("User:", testAccount.user);
    console.log("Pass:", testAccount.pass);

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const emailName = process.argv[2];
    if (!emailName) {
      console.error("Usage: npm run test:ethereal <EmailName>");
      console.error("Example: npm run test:ethereal WelcomeEmail");
      process.exit(1);
    }

    console.log(`Testing email: ${emailName}`);
    const emailModule = await import(`../src/emails/${emailName}`);
    const EmailComponent = emailModule.default;
    const emailHtml = await render(React.createElement(EmailComponent));

    const info = await transporter.sendMail({
      from: '"Test" <test@example.com>',
      to: "test@example.com",
      subject: `Test: ${emailName}`,
      html: emailHtml,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTestEmail();
