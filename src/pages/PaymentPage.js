import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_51QLSn0F2IpUrRpEkBa0SUZlEzQ0JzsiPtPV9iKjvaNzjbxZ2rB7SCghGj1ppQlLDOvuXWwegt50u7UI4I0cVGPH800VruDDdPm");

const PaymentForm = ({ totalPrice, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5555/api/bookings/payment", { amount: totalPrice * 100, currency: "usd" }); // Amount in cents
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
        onSuccess(); // Callback to confirm the booking
      }
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment} className="p-4 border rounded">
      <CardElement className="p-2 border" />
      <button type="submit" disabled={!stripe || loading} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const location = useLocation(); // Get the location object
  const totalPrice = new URLSearchParams(location.search).get("totalPrice"); // Extract totalPrice from query params

  const handleSuccess = () => {
    // Redirect to booking confirmation or home page
    window.location.href = "/my-bookings";
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-lg font-bold mb-4">Complete Your Payment</h2>
        <PaymentForm totalPrice={parseFloat(totalPrice)} onSuccess={handleSuccess} />
      </div>
    </Elements>
  );
};

export default PaymentPage;
