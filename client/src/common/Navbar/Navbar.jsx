import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchUserDetails = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('http://localhost:4000/api/v1/users/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span>{menuOpen ? '✖' : '☰'}</span>
      </div>

      <div className="navbar__logo">
        <Link to="/">JobPortal</Link>
      </div>

      <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/findjobs">Find Jobs</Link>
        <Link to="/findcompanies">Find Companies</Link>
      </div>

      <div className="navbar__auth">
        {user ? (
          <div className="navbar__profile">
            <Avatar onClick={toggleMenu} />
            {menuOpen && (
              <div className="navbar__dropdown">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
