import React, { ReactNode } from "react";

interface SendGridOneColumnProps {
  children: ReactNode;
  padding?: string; // Longform padding notation (top right bottom left)
}

export default function SendGridOneColumn({ children, padding = "12px 12px 12px 12px" }: SendGridOneColumnProps) {
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      align="center"
      width="100%"
      role="module"
      data-type="columns"
      style={{ padding: padding }}
      bgcolor=""
      data-distribution="1"
    >
      <tbody>
        <tr role="module-content">
          <td height="100%" valign="top">
            <table
              width={556}
              style={{ width: "556px", borderSpacing: 0, borderCollapse: "collapse", margin: "0px 10px 0px 10px" }}
              cellPadding={0}
              cellSpacing={0}
              align="left"
              border={0}
              bgcolor=""
              className="column column-0"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0px", margin: "0px", borderSpacing: 0 }}>
                    {children}
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
