import React from 'react';
import FlightCard from './FlightCard';

const FlightList = ({ flights }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {flights.length > 0 ? (
        flights.map((flight) => (
          <FlightCard key={flight._id} flight={flight} />
        ))
      ) : (
        <p className="text-center text-gray-700">No flights found. Please search again.</p>
      )}
    </div>
  );
};

export default FlightList;
