import React from "react";

interface SendGridSpacerProps {
  height?: string;
  backgroundColor?: string;
}

export default function SendGridSpacer({
  height = "30px",
  backgroundColor = ""
}: SendGridSpacerProps) {
  return (
    <table
      className="module"
      role="module"
      data-type="spacer"
    >
      <tbody>
        <tr>
          <td
            style={{ padding: `${height} 0 0 0` }}
            bgcolor={backgroundColor}
          />
        </tr>
      </tbody>
    </table>
  );
}
