import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import FlightSearch from './pages/FlightSearch';
import BookingPage from './pages/BookingPage';
import BookingManagement from './pages/BookingManagement';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import FlightList from './components/FlightList';
import BookingPage from './pages/BookingPage';
import FlightSearch from './pages/FlightSearch';
import Home from './pages/Home';
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  const [flights, setFlights] = useState([]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Flight Search</h1>
      <SearchForm setFlights={setFlights} />
      <FlightList flights={flights} />
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<FlightSearch />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/my-bookings" element={<BookingManagement />} />
          <Route path="/payment" element={<PaymentPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;

