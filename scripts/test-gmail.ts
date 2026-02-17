import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import React from "react";
import { config } from "dotenv";
import path from "path";

config({ path: path.join(__dirname, "../.env.local") });

async function sendGmailTest() {
  try {
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const TO_EMAIL = process.env.GMAIL_TEST_TO;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !TO_EMAIL) {
      throw new Error("Missing environment variables. Please check .env.local file.");
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const emailName = process.argv[2];
    if (!emailName) {
      console.error("Usage: npm run test:gmail <EmailName>");
      console.error("Example: npm run test:gmail WelcomeEmail");
      process.exit(1);
    }

    console.log(`Testing email: ${emailName}`);
    const emailModule = await import(`../src/emails/${emailName}`);
    const EmailComponent = emailModule.default;
    const emailHtml = await render(React.createElement(EmailComponent));

    const info = await transporter.sendMail({
      from: `"Test" <${GMAIL_USER}>`,
      to: TO_EMAIL,
      subject: `Test: ${emailName}`,
      html: emailHtml,
    });

    console.log("Message sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Check your inbox:", TO_EMAIL);

  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendGmailTest();
