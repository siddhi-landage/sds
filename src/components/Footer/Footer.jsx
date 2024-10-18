import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
           <div className="footer-section">
              <h1 className="heading"> COEP Technological University:</h1>
              <p className="footer-text">
                COEP’s precursor, The Poona Engineering Class and Mechanical School was opened in July 1854, with an aim to provide suitable learning to the subordinate officers in the Public Works Department. The School was situated in Bhawani Peth, Poona , and the accommodation consisted of three small detached houses for teaching purposes and a separate house for the Principal…
              </p>
          <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </div>

        {/* Middle Section: Company Links */}
        <div className="footer-section2">
          <h2 className="footer-heading">Navigate </h2>
          <ul className="footer-links">
            <li className="footer-link">Rules</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="footer-section2">
          <h4 className="footer-heading">Get in Touch</h4>
          <p className="footer-contact">
           <p>contact no: +34656-58589</p>
           <p>email:coepmanagment@contact.com</p>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 ©clean..com - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
