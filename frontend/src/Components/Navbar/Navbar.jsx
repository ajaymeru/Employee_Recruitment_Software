import React, { useState } from 'react';
import logo from "../Navbar/Assets/jobjet.png";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import "./Navbar.scss"

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="mobile-hamburger">
                <FaBars />
            </div>
            <div className="left-section">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <div className="middle-section">
                <div className="menu-links">
                    <Link to="/">Home</Link>
                    <Link to="/jobs">Find Jobs</Link>
                    <Link to="/employers">Find Employers</Link>
                </div>
            </div>

            <div className="right-section">
                <div className="sign-login-btns">
                    <button className='line-shade'>Sign-up</button>
                    <button className='line-shade'>Login</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
