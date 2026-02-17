//
// This component forces a dark background on the footer using a
// code block + inline styles + linear-gradient trick.
//
// This prevents dark mode email clients from inverting the footer,
// which would cause light-colored logos and icons to disappear
// against a white background.
//
// Because it uses a code block, this section is NOT directly
// editable in SendGrid's drag-and-drop editor. Update it here
// in code instead. See FooterSG.tsx for the drag-and-drop
// compatible version (which does not force dark backgrounds).
//

import React from "react";
import { BaseText } from "../sendgrid-components/SendGridText";
import SendGridTwoColumns from "../sendgrid-components/SendGridTwoColumns";
import SendGridSpacer from "../sendgrid-components/SendGridSpacer";
import SendGridImage from "../sendgrid-components/SendGridImage";
import { colors } from "../styles";
import SendGridCodeBlock from "../sendgrid-components/SendGridCodeBlock";

interface SocialLink {
  href: string;
  alt: string;
  iconSrc: string;
}

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  companyName?: string;
  address?: string;
  phone?: string;
  socialLinks?: SocialLink[];
}

export default function Footer({
  logoSrc,
  logoAlt = "Logo",
  logoHref = "#",
  companyName,
  address,
  phone,
  socialLinks = []
}: FooterProps) {
  return (
    <SendGridCodeBlock>
      <div style={{ backgroundColor: "#000", backgroundImage: "linear-gradient(#000,#000)", padding: "28px 24px" }}>
        <SendGridTwoColumns backgroundColor={colors.gray900} padding="0px" forceDarkMode={true}>
          <>
            {logoSrc && (
              <a href={logoHref} target="_blank">
                <SendGridImage
                  src={logoSrc}
                  alt={logoAlt}
                  width="100%"
                />
              </a>
            )}
            <SendGridSpacer height="16px"/>
            <BaseText tag="p" lineHeight="25px" fontSize="18px" padding="8px 0px 8px 0px">
              <span style={{ color: colors.gray400, fontSize: "14px" }}>
                {companyName && <>{companyName}<br/></>}
                {address && <>{address}<br/></>}
                {phone}
              </span>
            </BaseText>
          </>
          <>
            <SendGridSpacer height="28px" />
            {socialLinks.length > 0 && (
              <table style={{ borderCollapse: "collapse", width: "100%", margin: "0", padding: "0" }}>
                <tr>
                  {socialLinks.map((social, index) => (
                    <td key={index} style={{ padding: "0 8px 0 0", width: `${Math.floor(72 / socialLinks.length)}%`, textAlign: "right" }}>
                      <a href={social.href}>
                        <img src={social.iconSrc} alt={social.alt} style={{ width: "36px", height: "36px", margin: "0", padding: "0", display: "block" }} />
                      </a>
                    </td>
                  ))}
                </tr>
              </table>
            )}
          </>
        </SendGridTwoColumns>
      </div>
    </SendGridCodeBlock>
  );
}
