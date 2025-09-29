import React from 'react';
import { PayPalButtons, FUNDING } from "@paypal/react-paypal-js";

const PayPalDonateButton = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Lahjoitus Arctic Racing Societylle",
          amount: {
            value: "5.00",
            currency_code: "EUR"
          }
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      alert("Kiitos lahjoituksesta, " + details.payer.name.given_name + "!");
    });
  };

  return (
    <PayPalButtons
      style={{ layout: "vertical", color: "blue", shape: "rect", label: "donate" }}
      fundingSource={FUNDING.PAYPAL}
      createOrder={createOrder}
      onApprove={onApprove}
    />
  );
};

export default PayPalDonateButton;