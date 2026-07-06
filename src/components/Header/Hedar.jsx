import React from "react";
import "./Header.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="top-header">
      <div className="container header-container">

        <div className="header-left">

          <div className="header-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="header-item">
            <FaEnvelope />
            <span>info@citycarehospital.com</span>
          </div>

          <div className="header-item">
            <FaMapMarkerAlt />
            <span>Rajkot, Gujarat, India</span>
          </div>

        </div>

        <div className="header-right">

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
    </div>
  );
};

export default Header;