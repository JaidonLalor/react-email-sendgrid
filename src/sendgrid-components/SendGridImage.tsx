import React from "react";

interface SendGridImageProps {
  src: string;
  alt?: string;
  width?: string;     // Percentage value (e.g., "100%", "50%")
  maxWidth?: string;  // Percentage value (e.g., "100%", "80%")
}

export default function SendGridImage({
  src,
  alt = "",
  width = "100%",
  maxWidth = "100%"
}: SendGridImageProps) {
  return (
    <table
      className="wrapper"
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
            style={{
              fontSize: "6px",
              lineHeight: "10px",
              padding: "0px 0px 0px 0px"
            }}
            valign="top"
            align="center"
          >
            <img
              className="max-width"
              border={0}
              style={{
                display: "block",
                maxWidth: `${maxWidth} !important`,
                width: "100%",
                height: "auto !important"
              }}
              width={width}
              alt={alt}
              data-proportionally-constrained="true"
              data-responsive="true"
              src={src}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
