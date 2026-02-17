import React, { ReactNode } from "react";

interface SendGridCodeBlockProps {
  children?: ReactNode;
}

export default function SendGridCodeBlock({ children }: SendGridCodeBlockProps) {
  return (
    <table
      className="module"
      role="module"
      data-type="code"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ tableLayout: "fixed" }}
    >
      <tbody>
        <tr>
          <td
            height="100%"
            valign="top"
            role="module-content"
            style={{ padding: "0", margin: "0" }}
          >
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
