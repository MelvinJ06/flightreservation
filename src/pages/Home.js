import React from 'react';
import Navbar from '../components/Navbar';
import { FaPlane, FaRegCalendarCheck, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-cover bg-center bg-no-repeat text-white py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569080855-d779a823b374?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxmbGlnaHRzJTIwYWlycGxhbmV8ZW58MHx8fHwxNjg2NjMwMjMw&ixlib=rb-1.2.1&q=80&w=1080")' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Fly High with Us!</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Explore the world with affordable and flexible flight options. Find the best deals and book your next adventure now.
          </p>
          <Link to="/flight-search" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Find Your Flight
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our flight booking system provides an easy and convenient way to book flights. Enjoy seamless booking, competitive prices, and 24/7 customer support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 text-center">
            <FaPlane className="text-blue-600 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Best Deals</h3>
            <p className="text-gray-600">Get access to exclusive flight deals and discounts.</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 text-center">
            <FaRegCalendarCheck className="text-blue-600 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Easy Booking</h3>
            <p className="text-gray-600">Book your flights with just a few clicks, from anywhere, anytime.</p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 text-center">
            <FaHeadset className="text-blue-600 text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Customer Support</h3>
            <p className="text-gray-600">Our 24/7 support team is always available to assist you with any queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
