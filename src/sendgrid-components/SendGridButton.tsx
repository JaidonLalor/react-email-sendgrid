import React, { ReactNode } from "react";
import { colors, spacing } from "../styles";

interface ButtonProps {
  href: string;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SendGridButton({ href, children, align = 'left' }: ButtonProps) {
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
                      borderRadius: "8px",
                      fontSize: "20px",
                      textAlign: align,
                      backgroundClip: "inherit"
                    }}
                  >
                    <a
                      href={href}
                      style={{
                        backgroundColor: colors.primary,
                        border: "1px solid rgba(25, 185, 124, 0.7)",
                        borderColor: "rgba(25, 185, 124, 0.7)",
                        borderRadius: "8px",
                        borderWidth: "1px",
                        color: colors.gray700,
                        display: "inline-block",
                        fontSize: "20px",
                        fontWeight: "600",
                        padding: "20px 40px 20px 40px",
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
