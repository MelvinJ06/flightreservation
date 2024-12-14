import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import FlightSearch from './pages/FlightSearch';
import BookingPage from './pages/BookingPage';
import BookingManagement from './pages/BookingManagement';
import PaymentPage from "./pages/PaymentPage";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import FrontPage from "./pages/front";
ReactDOM.render(
  <Router>
    <Routes>
    <Route path="/" element={<FrontPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/flight-search" element={<FlightSearch />} />
      <Route path="/booking/:flightId" element={<BookingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<FlightSearch />} />
      <Route path="/booking/:id" element={<BookingPage />} />
      <Route path="/my-bookings" element={<BookingManagement />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
