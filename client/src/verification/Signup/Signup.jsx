import React, { useState } from 'react';
import './Signup.scss';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import welcomeImage from './assets/welcome.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [role, setRole] = useState('EMPLOYEE'); // Changed userType to role
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
    companyName: '',
    companyType: '',
    address: '',
    role: 'EMPLOYEE', // Include role in formData
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value.toUpperCase(); // Convert to uppercase
    setRole(selectedRole);
    setFormData({ ...formData, role: selectedRole }); // Set role in formData
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log the form data before sending

    try {
      // Make the signup API request to the correct URL
      const response = await axios.post('http://localhost:4000/api/v1/users/signup', formData);

      if (response.status === 201) {
        console.log('Signup successful:', response.data);
        // Clear form data and error message
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          password: '',
          companyName: '',
          companyType: '',
          address: '',
          role: 'EMPLOYEE',
        });
        setErrorMessage(null);
        // setting email from here
        navigate('/otpverification', { state: { email: formData.email } });
      }
    } catch (error) {
      console.error('Error during signup:', error.response?.data);
      const message = error.response?.data?.message || 'Signup failed. Please try again.';
      setErrorMessage(message);
      alert(message); // Show an alert with the error message
    }
  };


  const handleOAuthSignup = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Add logic for OAuth signup here
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
        <form onSubmit={handleSubmit}>
          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="EMPLOYEE"
                checked={role === 'EMPLOYEE'}
                onChange={handleRoleChange}
              />
              Employee
            </label>
            <label>
              <input
                type="radio"
                value="EMPLOYER"
                checked={role === 'EMPLOYER'}
                onChange={handleRoleChange}
              />
              Employer
            </label>
          </div>

          {role === 'EMPLOYEE' && (
            <div className="EMPLOYEE-form">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {role === 'EMPLOYER' && (
            <div className="EMPLOYER-form">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyType"
                placeholder="Company Type"
                value={formData.companyType}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit">Submit</button>
        </form>

        <div className="oauth-signup">
          <p>Already have an account? <Link to="/login">Login</Link> </p>
          <p>Or sign up with:</p>
          <button onClick={() => handleOAuthSignup('Google')}>
            <FaGoogle /> Google
          </button>
          <button onClick={() => handleOAuthSignup('GitHub')}>
            <FaGithub /> GitHub
          </button>
        </div>
      </div>
      <div className="signup-image">
        <img src={welcomeImage} alt="Welcome" />
      </div>
    </div>
  );
};

export default Signup;
  