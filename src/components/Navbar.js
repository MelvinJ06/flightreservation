import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Flight Booking</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/flight-search" className="text-white">Flight Search</Link></li>
          <li><Link to="/booking-management" className="text-white">My Bookings</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
