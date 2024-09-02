import React from 'react';
import './Navbar.scss';
import logo from "./logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/find-jobs">Find Jobs</Link>
                <Link to="/find-employers">Find Employers</Link>
            </div>
            <div className="nav-btn">
                <button className="signup-btn">Sign Up</button>
                <button className="login-btn">Login</button>
            </div>
        </div>
    );
}

export default Navbar;
