import React, { useState } from 'react';
import './OtpVerification.scss';
import welcomeImage from './assets/welcome.png';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();
  const location = useLocation(); // Initialize useLocation
  const email = location.state?.email; // Retrieve email from location state

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('OTP submitted:', otpValue);

    // Make sure email is defined before proceeding
    if (!email) {
      console.error('Email is not defined. Please provide a valid email.');
      alert('Email is not defined. Please try again.');
      return;
    }

    try {
      const response = await verifyOtp(otpValue, email); // Pass email here

      if (response.status === 200) {
        console.log('OTP verification successful');
        navigate('/login'); // Navigate to Login on success
      } else {
        alert('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      alert('OTP verification failed. Please try again.');
    }

    setOtp(['', '', '', '', '', '']); // Clear the inputs after submission
  };

  return (
    <div className="otp-verification-container">
      <div className="otp-form">
        <h1>OTP Verification</h1>
        <form onSubmit={handleSubmit} className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              required
            />
          ))}
          <button type="submit">Verify</button>
        </form>
      </div>
      <div className="otp-image">
        <img src={welcomeImage} alt="Welcome" />
      </div>
    </div>
  );
};

const verifyOtp = async (otpValue, email) => {
  return await fetch('http://localhost:4000/api/v1/users/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, otp: otpValue }),
  });
};

export default OtpVerification;
