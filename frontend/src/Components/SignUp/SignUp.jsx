import React, { useState } from 'react';
import "./SignUp.scss"
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
                        <div>
                            <div>
                                <label>
                                    First Name:
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Last Name:
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Phone Number:
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Password:
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    )}


                    {/* Conditional fields for Employer */}
                    {userType === 'employer' && (
                        <div>
                            <div>
                                <label>
                                    Company Name:
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Phone Number:
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Company Type:
                                    <input
                                        type="text"
                                        name="companyType"
                                        value={formData.companyType}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Address:
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Password:
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
