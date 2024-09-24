import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      {/* Logo and text */}
      <div className="footer__logo">
        <h1>JobPortal</h1>
        <p>Your go-to place for finding jobs and companies.</p>
      </div>

      {/* Useful Links */}
      <div className="footer__links">
        <h2>Useful Links</h2>
        <ul>
          <li><a href="/findjobs">Find a Job</a></li>
          <li><a href="/findcompanies">Companies</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/postjob">Post a Job</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
        </ul>
      </div>

      {/* Categories */}
      <div className="footer__categories">
        <h2>Categories</h2>
        <ul>
          <li><a href="/categories/ui-designer">UI Designer</a></li>
          <li><a href="/categories/ux-designer">UX Designer</a></li>
          <li><a href="/categories/graphic-designer">Graphic Designer</a></li>
          <li><a href="/categories/web-developers">Web Developers</a></li>
          <li><a href="/categories/more">More</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="footer__newsletter">
        <h2>Newsletter</h2>
        <form>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Submit</button>
        </form>
        <div className="footer__socials">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Insta</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
