import React from "react";
import { colors } from "../styles";

interface SocialLink {
  label: string;
  href: string;
}

interface FooterProps {
  socialLinks?: SocialLink[];
  companyName?: string;
}

export default function Footer({
  socialLinks = [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  companyName = "Your Company"
}: FooterProps) {
  return (
    <table
      className="module"
      role="module"
      data-type="text"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ tableLayout: "fixed" }}
    >
      <tbody>
        <tr>
          <td
            style={{
              padding: "32px 32px 40px 32px",
              textAlign: "center",
              borderTop: `1px solid ${colors.gray200}`
            }}
            valign="top"
          >
            <p style={{
              margin: "0 0 12px 0",
              fontSize: "13px",
              lineHeight: "20px",
              color: colors.gray400
            }}>
              {socialLinks.map((link, index) => (
                <span key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    style={{
                      color: colors.gray500,
                      textDecoration: "none"
                    }}
                  >
                    {link.label}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span style={{ color: colors.gray300, padding: "0 8px" }}>&middot;</span>
                  )}
                </span>
              ))}
            </p>
            <p style={{
              margin: "0",
              fontSize: "12px",
              lineHeight: "18px",
              color: colors.gray400
            }}>
              {companyName}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
