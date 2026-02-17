import React, { ReactNode } from "react";
import { colors, spacing } from "../styles";

interface ButtonProps {
  href: string;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SendGridButton({ href, children, align = 'center' }: ButtonProps) {
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      className="module"
      data-role="module-button"
      data-type="button"
      role="module"
      style={{ tableLayout: "fixed" }}
      width="100%"
      data-muid={`button-${Math.random().toString(36).substr(2, 9)}`}
    >
      <tbody>
        <tr>
          <td
            align={align}
            bgcolor=""
            className="outer-td"
            style={{ padding: spacing.default }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              className="wrapper-mobile"
              style={{ textAlign: align }}
            >
              <tbody>
                <tr>
                  <td
                    align={align}
                    bgcolor={colors.primary}
                    className="inner-td"
                    style={{
                      borderRadius: "6px",
                      fontSize: "16px",
                      textAlign: align,
                      backgroundClip: "inherit"
                    }}
                  >
                    <a
                      href={href}
                      style={{
                        backgroundColor: colors.primary,
                        border: `1px solid ${colors.primary}`,
                        borderRadius: "6px",
                        borderWidth: "1px",
                        color: "#FFFFFF",
                        display: "inline-block",
                        fontSize: "16px",
                        fontWeight: "600",
                        letterSpacing: "0.025em",
                        padding: "14px 32px",
                        textAlign: "center",
                        textDecoration: "none",
                        borderStyle: "solid"
                      }}
                      target="_blank"
                    >
                      {children}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
