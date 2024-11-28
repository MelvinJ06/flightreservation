import React from "react";
import { useLocation } from "react-router-dom"; 
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentPage = () => {
  const location = useLocation(); 
  const totalPrice = new URLSearchParams(location.search).get("totalPrice"); 

  const handleSuccess = () => {
    window.location.href = "/my-bookings";
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AXqhJYyPjtYdA52jwHfzEAfitsMtXf4nICchniH_7jiZpeUDmTVYnLbxyGZyucIQqvFDUxKafTN12wfx", 
        currency: "USD",
      }}
    >
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-lg font-bold mb-4">Complete Your Payment</h2>
        <div className="border p-4 rounded">
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice, 
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(() => {
                alert("Payment successful!");
                handleSuccess();
              });
            }}
            onError={(err) => {
              alert("Payment failed. Please try again.");
              console.error("PayPal Checkout Error:", err);
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
