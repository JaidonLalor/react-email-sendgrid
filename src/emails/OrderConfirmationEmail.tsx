import React from "react";
import BaseEmail from "../components/BaseEmail";
import { H1, H2, P } from "../sendgrid-components/SendGridText";
import SendGridButton from "../sendgrid-components/SendGridButton";
import SendGridDivider from "../sendgrid-components/SendGridDivider";
import InfoItems from "../components/InfoItems";
import { colors } from "../styles";

export default function OrderConfirmationEmail() {
  return (
    <BaseEmail>
      <H1>Order Confirmed</H1>

      <P>
        Your order <span style={{ color: colors.link }}>{'{{ORDER_NUMBER}}'}</span> has
        been confirmed and is being processed.
      </P>

      <InfoItems items={[
        { label: "Order Number", value: "{{ORDER_NUMBER}}" },
        { label: "Order Date", value: "{{ORDER_DATE}}" },
        { label: "Total", value: "{{ORDER_TOTAL}}" }
      ]}/>

      <SendGridDivider />

      <H2>Track Your Order</H2>

      <P>You can check the status of your order at any time:</P>

      <SendGridButton href="{{TRACKING_LINK}}">View Order Status</SendGridButton>
    </BaseEmail>
  );
}
