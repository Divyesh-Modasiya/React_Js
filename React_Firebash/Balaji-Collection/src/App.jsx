import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookedPage from './BookedPage';
import BookingForm from './BookingForm';
import Navbar from './Navbar';
import Home from './Home';



const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar will be shown on every page */}
        <Navbar />

        {/* Routing to different pages */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/booked" element={<BookedPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
