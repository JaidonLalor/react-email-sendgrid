import React, { ReactNode } from "react";
import { colors } from "../styles";

interface SendGridBaseEmailProps {
  children: any;
}

export default function SendGridBaseEmail({ children }: SendGridBaseEmailProps) {
  return (
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

        <meta name="color-scheme" content="light only" />
        <meta name="color-scheme" content="only light" />
        <meta name="supported-color-schemes" content="light" />
        <style type="text/css">
          {`
            body, p, div {
              font-family: Helvetica, Arial, sans-serif;
              font-size: 14px;
            }
            body {
              color: ${colors.gray700};
            }
            body a {
              color: ${colors.link};
              text-decoration: underline;
            }
            /* Dark mode protection for footer */
            [data-ogsc] table[bgcolor="#16161C"] { background-color: #16161C !important; }
            [data-ogsb] table[bgcolor="#16161C"] { background-color: #16161C !important; }
            @media (prefers-color-scheme: dark) {
              table[bgcolor="#16161C"] { background-color: #16161C !important; }
              table[bgcolor="#16161C"] img { filter: none !important; }
            }
          `}
        </style>
      </head>
      <body>
        {/* Email Client Wrapper */}
        <center className="wrapper" data-link-color={colors.link} data-body-style={`font-size:14px; font-family:Helvetica, Arial, sans-serif; color:${colors.gray700}; background-color:#FFFFFF;`}>
          {/* Email Background - Full width background visible in email clients */}
          <table cellPadding={0} cellSpacing={0} border={0} width="100%" className="wrapper" bgcolor="#FFFFFF">
            <tbody>
              <tr>
                <td valign="top" bgcolor="#FFFFFF" width="100%">
                  {/* Content Container - Centers the email content */}
                  <table width="100%" role="content-container" className="outer" align="center" cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                      <tr>
                        <td width="100%">
                          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                            <tbody>
                              <tr>
                                <td>
                                  {/* Email Container - Max 600px width, this is the main email body */}
                                  <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", maxWidth: "600px" }} align="center">
                                    <tbody>
                                      <tr>
                                        <td
                                          role="modules-container"
                                          style={{
                                            padding: "0px",
                                            color: colors.gray700,
                                            textAlign: "left"
                                          }}
                                          bgcolor={colors.gray50}
                                          width="100%"
                                          align="left"
                                        >
                                          {children}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </body>
    </html>
  );
}
