import React from "react";

interface SocialLink {
  href: string;
  alt: string;
  title: string;
  icon: string; // URL to the icon image
}

interface SendGridSocialsProps {
  socialLinks: SocialLink[];
  backgroundColor?: string;
}

export default function SendGridSocials({
  socialLinks,
  backgroundColor = ""
}: SendGridSocialsProps) {
  return (
    <table
      className="module"
      role="module"
      data-type="social"
      align="center"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ tableLayout: "fixed" }}
    >
      <tbody>
        <tr>
          <td
            valign="top"
            style={{
              padding: "0px 0px 0px 0px",
              fontSize: "6px",
              lineHeight: "10px"
            }}
            align="left"
          >
            <table
              align="left"
              style={{
                WebkitMarginStart: "auto",
                WebkitMarginEnd: "auto"
              }}
            >
              <tbody>
                <tr align="left">
                  {socialLinks.map((social, index) => (
                    <td
                      key={index}
                      style={{ padding: "0px 5px" }}
                      className="social-icon-column"
                    >
                      <a
                        role="social-icon-link"
                        href={social.href}
                        target="_blank"
                        alt={social.alt}
                        title={social.title}
                        style={{
                          display: "inline-block",
                          backgroundColor: backgroundColor,
                          height: "32px",
                          width: "32px"
                        }}
                      >
                        <img
                          role="social-icon"
                          alt={social.alt}
                          title={social.title}
                          src={social.icon}
                          style={{ height: "32px", width: "32px" }}
                          height="32"
                          width="32"
                        />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
