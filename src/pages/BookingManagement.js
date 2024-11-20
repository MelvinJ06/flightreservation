import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingCard from '../components/BookingCard';

const BookingManagement = () => {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (email) {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/api/bookings/${email}`);
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }
}, [email]);


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Your Bookings</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="mt-6">
        {bookings.length > 0 ? (
          bookings.map(booking => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <p>No bookings found for this email.</p>
        )}
      </div>
    </div>
  );
};

export default BookingManagement;
