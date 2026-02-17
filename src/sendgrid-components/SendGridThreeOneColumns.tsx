import React, { ReactNode } from "react";

interface SendGridThreeOneColumnsProps {
  children: [ReactNode | ReactNode[], ReactNode | ReactNode[]]; // [left column (3/4 width), right column (1/4 width)]
  padding?: string; // Longform padding notation (top right bottom left)
}

export default function SendGridThreeOneColumns({ children, padding = "0px 0px 0px 0px" }: SendGridThreeOneColumnsProps) {
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
      data-distribution="3,1"
    >
      <tbody>
        <tr role="module-content">
          <td height="100%" valign="top">
            <table
              width={435}
              style={{ width: "435px", borderSpacing: 0, borderCollapse: "collapse", margin: "0px 10px 0px 0px" }}
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
                    {children[0]}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              width={145}
              style={{ width: "145px", borderSpacing: 0, borderCollapse: "collapse", margin: "0px 0px 0px 10px" }}
              cellPadding={0}
              cellSpacing={0}
              align="left"
              border={0}
              bgcolor=""
              className="column column-1"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0px", margin: "0px", borderSpacing: 0 }}>
                    {children[1]}
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
