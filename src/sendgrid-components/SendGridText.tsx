import React, { ReactNode } from "react";
import { spacing } from "../styles";

interface BaseTextProps {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'p';
  lineHeight: string;
  fontSize: string;
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'inherit';
  padding?: string;
  backgroundColor?: string;
}

export function BaseText({ children, tag, lineHeight, fontSize, color, textAlign = "inherit", padding = spacing.short, backgroundColor = "" }: BaseTextProps) {
  const Tag = tag;

  return (
    <table
      className="module"
      role="module"
      data-type="text"
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
              padding: padding,
              lineHeight: lineHeight,
              textAlign: "inherit",
              backgroundColor: backgroundColor
            }}
            height="100%"
            valign="top"
            bgcolor={backgroundColor}
            role="module-content"
          >
            <div>
              <Tag style={{ textAlign: textAlign }}>
                <span style={{
                  ...(fontSize && { fontSize: fontSize }),
                  ...(color && { color: color })
                }}>
                  {children}
                </span>
              </Tag>
              <div></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

interface TextProps {
  children: ReactNode;
}

export function H1({ children }: TextProps) {
  return <BaseText tag="h1" lineHeight="39px" fontSize="28px">{children}</BaseText>;
}

export function H2({ children }: TextProps) {
  return <BaseText tag="h2" lineHeight="31px" fontSize="22px">{children}</BaseText>;
}

export function P({ children }: TextProps) {
  return <BaseText tag="p" lineHeight="25px" fontSize="18px">{children}</BaseText>;
}
