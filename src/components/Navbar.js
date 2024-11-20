import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Flight Booking</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/flight-search" className="text-white">Flight Search</a></li>
          <li><a href="/booking-management" className="text-white">My Bookings</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
