import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { flightId } = useParams();
  const [flight, setFlight] = useState(null);
  const [seats, setSeats] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState('');

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`https://flightbooking-1-gygh.onrender.com/api/flights/${flightId}`);
        setFlight(response.data);
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };
    fetchFlight();
  }, [flightId]);

  const handleBooking = async () => {
    const bookingData = { flightId, seatsBooked: seats };
    const response = await axios.post('https://flightbooking-1-gygh.onrender.com/api/bookings', bookingData);
    const result = response.data;
    const { totalPrice, _id } = result;

    // Create PayPal Payment
    const paymentResponse = await axios.post('https://flightbooking-1-gygh.onrender.com/api/paypal/create', {
      bookingId: _id,
      totalPrice
    });

    setPaymentUrl(paymentResponse.data.approvalUrl);
  };

  if (!flight) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">{flight.airline} - {flight.flightNumber}</h2>
        <div className="text-lg text-gray-700 mb-4">
          <p className="mb-2"><strong>Departure:</strong> {flight.departure} at {flight.departureTime}</p>
          <p className="mb-2"><strong>Arrival:</strong> {flight.arrival} at {flight.arrivalTime}</p>
          <p className="mb-4"><strong>Price:</strong> ${flight.price}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="seats" className="block text-lg font-medium text-gray-700 mb-2">Number of Seats:</label>
          <input
            id="seats"
            type="number"
            min="1"
            max={flight.availableSeats}
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-2">Available seats: {flight.availableSeats}</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            className="bg-blue-600 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </div>

        {paymentUrl && (
          <div className="mt-6 text-center">
            <a href={paymentUrl} className="bg-yellow-500 text-black py-3 px-6 rounded-lg">
              Pay Now with PayPal
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
