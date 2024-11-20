import React, { useState } from "react";
import FlightSearchForm from "../components/FlightSearchForm";
import FlightCard from "../components/FlightCard";

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);

  const searchFlights = async (searchParams) => {
    try {
      const queryString = `/api/flights/search?departure=${searchParams.departure}&arrival=${searchParams.arrival}&departureDate=${searchParams.departureDate}&bookingClass=${searchParams.bookingClass}`;
      console.log("API Request:", queryString);

      const response = await fetch(queryString, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache", // Prevent caching
          Pragma: "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      setFlights(data);
    } catch (error) {
      console.error("Error fetching flights:", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-500 min-h-screen">
      {/* Hero Section */}
      <div className="text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Find the Best Flights & Start Your Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover incredible destinations and travel in comfort. Our easy-to-use platform offers the best flight options with flexible booking choices.
          </p>
          <a
            href="#search-form"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300"
          >
            Start Searching
          </a>
        </div>
      </div>

      {/* Search Form Section */}
      <div id="search-form" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <FlightSearchForm setFlights={setFlights} />
        </div>
      </div>

      {/* Flights Results Section */}
      <div className="container mx-auto py-12 px-6">
        {flights.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flights.map((flight) => (
              <FlightCard key={flight._id} flight={flight} />
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600 mt-12">No flights found. Try adjusting your search.</p>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Flight Booking. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
