import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Column 1 */}
        <div className="footer-box">
          <h2>CityCare Hospital</h2>

          <p>
            We provide world-class healthcare services with experienced doctors
            and advanced medical technology.
          </p>

          <div className="social-icons">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>Appointment</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-box">
          <h3>Departments</h3>

          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Dental</li>
            <li>Orthopedic</li>
            <li>Pediatrics</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-box">
          <h3>Contact Info</h3>

          <p>
            <FaPhoneAlt /> +91 9876543210
          </p>

          <p>
            <FaEnvelope /> info@citycarehospital.com
          </p>

          <p>
            <FaMapMarkerAlt /> Rajkot, Gujarat
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CityCare Hospital | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;