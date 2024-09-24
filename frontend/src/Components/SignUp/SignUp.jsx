import React, { useState } from 'react';
import "./SignUp.scss"
import signup from "./assets/signup.png"
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";



const Signup = () => {
    const [userType, setUserType] = useState('employee');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        password: "",
        companyName: "",
        companyType: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            password: "",
            companyName: "",
            companyType: "",
            address: ""
        })
    };

    return (
        <div className="SignUp">
            <div className="signup-form">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    {/* Radio buttons for selecting user type */}
                    <div className='radioCheck'>
                        <label>
                            <input
                                type="radio"
                                value="employee"
                                checked={userType === 'employee'}
                                onChange={() => setUserType('employee')}
                            />
                            Employee
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="employer"
                                checked={userType === 'employer'}
                                onChange={() => setUserType('employer')}
                            />
                            Employer
                        </label>
                    </div>

                    {/* Conditional fields for Employee */}
                    {userType === 'employee' && (
                        <div className='mainform'>
                            <div className='submainform'>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* Conditional fields for Employer */}
                    {userType === 'employer' && (
                        <div className='mainform'>
                            <div className='submainform'>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="text"
                                    name="companyType"
                                    value={formData.companyType}
                                    onChange={handleChange}
                                    placeholder="Company Type"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div className='submainform'>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button type="submit" className='line-shade'>Register</button>
                </form>
                <div className="othersignupmethods">
                    <div className="with">
                        <p>Sign-Up With</p>
                        <div className="icons">
                            <Link><FaGoogle /></Link>
                            <Link><FaLinkedin /></Link>
                        </div>
                    </div>
                    <p>Already have an account? <Link to="./login">login</Link> </p>
                </div>

            </div>

            <div className="signup-design">
                
            </div>
        </div>
    );
};

export default Signup;
