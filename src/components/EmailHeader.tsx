import React from "react";
import SendGridImage from "../sendgrid-components/SendGridImage";
import SendGridSpacer from "../sendgrid-components/SendGridSpacer";

interface EmailHeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  logoWidth?: string;
}

export default function EmailHeader({
  logoSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  logoAlt = "Logo",
  logoHref,
  logoWidth = "48px"
}: EmailHeaderProps) {
  const image = (
    <table
      className="module"
      role="module"
      data-type="image"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ tableLayout: "fixed" }}
    >
      <tbody>
        <tr>
          <td
            style={{ padding: "32px 0 24px 0" }}
            valign="top"
            align="center"
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              style={{ display: "block", width: logoWidth, height: "auto" }}
              width={logoWidth}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );

  if (logoHref) {
    return (
      <a href={logoHref} target="_blank" style={{ textDecoration: "none" }}>
        {image}
      </a>
    );
  }

  return image;
}
