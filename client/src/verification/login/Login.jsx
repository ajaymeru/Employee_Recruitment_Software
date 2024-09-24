import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Signup/Signup.scss';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import welcomeImage from '../Signup/assets/welcome.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);

    // API call to login
    try {
      const response = await fetch('http://localhost:4000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token if needed (optional)
        localStorage.setItem('token', data.token); // Example of storing the token
        console.log(data.message);
        // Navigate to the home page
        navigate('/');
      } else {
        alert(data.message); // Show error message if login fails
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }

    // Clear the form data after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleOAuthLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Add logic for OAuth login here
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
          <button type="submit">Login</button>
        </form>

        <div className="oauth-signup">
          <p>Or login with:</p>
          <button onClick={() => handleOAuthLogin('Google')}>
            <FaGoogle /> Google
          </button>
          <button onClick={() => handleOAuthLogin('GitHub')}>
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

export default Login;