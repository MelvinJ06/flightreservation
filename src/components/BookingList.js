import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingCard from './BookingCard';

const BookingList = ({ userEmail }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/api/bookings/${userEmail}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings', error);
      }
    };
    fetchBookings();
  }, [userEmail]);

  return (
    <div>
      {bookings.map(booking => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default BookingList;
