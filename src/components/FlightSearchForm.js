import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setFlights }) => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://flightbooking-2.onrender.com/api/flights/search', {
        params: {
          departure,
          arrival,
          departureDate,
        },
      });
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
      alert('Failed to fetch flights. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSearch} className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Departure</label>
        <input
          type="text"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          placeholder="e.g., LAX"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Arrival</label>
        <input
          type="text"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          placeholder="e.g., HND"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Departure Date <br/><span>eg 12/02/2024</span></label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full border rounded p-2"
        />
     </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
      >
        Search Flights
      </button>
    </form>
  );
};

export default SearchForm;
