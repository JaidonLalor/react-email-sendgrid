import React from "react";
import { colors, spacing } from "../styles";

interface SendGridDividerProps {
  height?: string;
  color?: string;
  backgroundColor?: string;
  padding?: string;
}

export default function SendGridDivider({
  height = "1px",
  color = colors.gray300,
  backgroundColor = "",
  padding = spacing.default
}: SendGridDividerProps) {
  return (
    <table
      className="module"
      role="module"
      data-type="divider"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ tableLayout: "fixed" }}
    >
      <tbody>
        <tr>
          <td
            style={{ padding: padding }}
            role="module-content"
            height="100%"
            valign="top"
            bgcolor={backgroundColor}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              align="center"
              width="100%"
              height={height}
              style={{ lineHeight: height, fontSize: height }}
            >
              <tbody>
                <tr>
                  <td
                    style={{ padding: `0px 0px ${height} 0px` }}
                    bgcolor={color}
                  ></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
