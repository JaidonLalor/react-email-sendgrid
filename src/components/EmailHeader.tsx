import React from "react";
import { colors } from "../styles";
import SendGridTwoColumns from "../sendgrid-components/SendGridTwoColumns";
import { BaseText } from "../sendgrid-components/SendGridText";
import SendGridDivider from "../sendgrid-components/SendGridDivider";

interface EmailHeaderProps {
  text1?: string;
  text2?: string;
}

export default function EmailHeader({ text1 = "Your App", text2 = "Your Company" }: EmailHeaderProps) {
  return (
    <>
      <SendGridTwoColumns padding="14px 16px 12px 16px">
        <BaseText tag="p" lineHeight="22px" fontSize="16px" color={colors.gray400} padding="0px 0px 0px 0px">
          {text1}
        </BaseText>
        <BaseText tag="p" lineHeight="22px" fontSize="16px" color={colors.gray400} textAlign="right" padding="0px 0px 0px 0px">
          {text2}
        </BaseText>
      </SendGridTwoColumns>
      <SendGridDivider padding="0px 0px 0px 0px"/>
    </>
  );
}
