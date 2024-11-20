import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import FlightSearch from './pages/FlightSearch';
import BookingPage from './pages/BookingPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight-search" element={<FlightSearch />} />
      <Route path="/booking/:flightId" element={<BookingPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
