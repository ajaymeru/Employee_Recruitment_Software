import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';

import Navbar from './common/Navbar/Navbar.jsx';
import Footer from './common/Footer/Footer.jsx';

import Home from './Pages/Home/Home.jsx';
import FindJobs from './Pages/Findjobs/FindJobs.jsx';
import FindCompanies from './Pages/FindCompanies/FindCompanies.jsx';

import Signup from './verification/Signup/Signup.jsx';
import Login from './verification/login/Login.jsx';
import OtpVerification from './verification/otpverfiy/OtpVerification.jsx';

const App = () => {
  const location = useLocation();
  const noNavFooterPaths = ['/signup', '/login', '/otpverification'];

  return (
    <div className="app">
      {!noNavFooterPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/findcompanies" element={<FindCompanies />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otpverification" element={<OtpVerification />} />
      </Routes>
      {!noNavFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;