import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();  

  const handleBookNow = () => {
    navigate(`/booking/${flight._id}`);  
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">{flight.airline}</h2>
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Departure: {flight.departure} at {flight.departureTime}</p>
      <p>Arrival: {flight.arrival} at {flight.arrivalTime}</p>
      <p>Price: ${flight.price}</p>
      <p>Seats Available: {flight.availableSeats}</p>
      <p>Class: {flight.bookingClass}</p>
      <button
        onClick={handleBookNow}  
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
      >
        Book Now
      </button>
    </div>
  );
};

export default FlightCard;
