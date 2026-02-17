import React from "react";
import SendGridOneColumn from "../sendgrid-components/SendGridOneColumn";
import { BaseText } from "../sendgrid-components/SendGridText";
import { colors } from "../styles";

interface InfoItemData {
  label: string;
  value: string;
}

interface InfoItemProps {
  items: InfoItemData[];
}

export default function InfoItems({ items }: InfoItemProps) {
  return (
    <SendGridOneColumn padding="18px 12px 18px 12px">
      <BaseText tag="p" lineHeight="25px" fontSize="18px" padding="32px 32px 32px 32px" backgroundColor="#FFFFFF">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span style={{ fontSize: "14px", color: colors.gray400 }}>
              {item.label}
            </span><br/>
            <span style={{
              fontSize: "20px",
              wordBreak: "break-all",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
              lineBreak: "anywhere",
              whiteSpace: "normal"
            }}>
              {item.value}
            </span><br/>
            {index < items.length - 1 && <br/>}
          </React.Fragment>
        ))}
      </BaseText>
    </SendGridOneColumn>
  );
}
