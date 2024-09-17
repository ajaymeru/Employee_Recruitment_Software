import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import "./Footer.scss";
import logo from "./Assets/jobjet.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                </div>
                <div className="footer-links">
                    <h6>Useful Links</h6>
                    <Link to="">Find a Job</Link>
                    <Link to="">Companies</Link>
                    <Link to="">About Us</Link>
                    <Link to="">Post a Job</Link>
                    <Link to="">Testimonial</Link>
                </div>
                <div className="footer-links">
                    <h6>Category</h6>
                    <Link>UI Designer</Link>
                    <Link>UX Designer</Link>
                    <Link>Graphic Designer</Link>
                    <Link>Web Developers</Link>
                    <Link>More</Link>
                </div>
                <div className="news-letter">
                    <h6>Newsletter</h6>
                    <p>Sign up to our archi. point to recent updates & office</p>
                    <div className="quick-links">
                        <div className="mail">
                            <input type="email" placeholder='Enter an Email' />
                            <button type="submit" className='line-shade'>Submit</button>
                        </div>
                        <div className="social-links">
                            <Link ><FaLinkedin /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><FaFacebook /></Link>
                            <Link><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
