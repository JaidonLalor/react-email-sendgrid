import React, { ReactNode } from "react";

interface SendGridTwoColumnsProps {
  children: [ReactNode | ReactNode[], ReactNode | ReactNode[]]; // Each can be single item or array of items
  padding?: string; // Longform padding notation (top right bottom left)
  backgroundColor?: string;
  forceDarkMode?: boolean;
}

export default function SendGridTwoColumns({ children, padding = "0px 0px 0px 0px", backgroundColor = "", forceDarkMode = false }: SendGridTwoColumnsProps) {
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      align="center"
      width="100%"
      role="module"
      data-type="columns"
      style={{
        padding: padding,
        backgroundColor: backgroundColor,
        ...(forceDarkMode && { backgroundImage: "linear-gradient(#000,#000)" })
      }}
      bgcolor={backgroundColor}
      data-distribution="1,1"
    >
      <tbody>
        <tr role="module-content">
          <td
            height="100%"
            valign="top"
            style={{
              backgroundColor: backgroundColor,
              ...(forceDarkMode && { backgroundImage: "linear-gradient(#000,#000)" })
            }}
            bgcolor={backgroundColor}
          >
            <table
              width={300}
              style={{ width: "300px", borderSpacing: 0, borderCollapse: "collapse", margin: "0px 0px 0px 0px" }}
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
              width={300}
              style={{ width: "300px", borderSpacing: 0, borderCollapse: "collapse", margin: "0px 0px 0px 0px" }}
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
