import React from 'react';

const BookingCard = ({ booking }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-bold text-lg">{booking.flightId.departure} to {booking.flightId.arrival}</h3>
      <p>Passenger: {booking.passengerName}</p>
      <p>Seats Booked: {booking.seatsBooked}</p>
      <p>Class: {booking.bookingClass}</p>
      <p>Total Price: ${booking.totalPrice}</p>
    </div>
  );
};

export default BookingCard;
