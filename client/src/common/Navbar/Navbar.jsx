import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // For hamburger menu
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);  // For avatar dropdown menu
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProfileMenuOpen(false);  // Close profile menu when opening hamburger menu
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
    setMenuOpen(false);  // Close hamburger menu when opening profile menu
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
          setUser(data.user);  // Ensure the user object contains role property
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

  const renderEmployeeMenu = () => (
    <div className="mega-menu">
      <div className="mega-menu-section">
        <Link to="/profile">My Profile</Link>
        <Link to="/resume">My Resume</Link>
        <Link to="/applied-jobs">Applied Jobs</Link>
        <Link to="/saved-jobs">Saved Jobs</Link>
        <Link to="/change-password">Change Password</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );

  const renderEmployerMenu = () => (
    <div className="mega-menu">
      <div className="mega-menu-section">
        <Link to="/profile">My Profile</Link>
        <Link to="/post-job">Post Job</Link>
        <Link to="/manage-jobs">Manage Jobs</Link>
        <Link to="/change-password">Change Password</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );

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
          <div className="navbar__profile" onClick={toggleProfileMenu}>
            <Avatar />
            {profileMenuOpen && (
              <div className="navbar__mega-dropdown">
                {user.role === 'EMPLOYEE' ? renderEmployeeMenu() : renderEmployerMenu()}
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
