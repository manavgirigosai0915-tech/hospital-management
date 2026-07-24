import React from "react";
import {
  FaHospital,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";


function Footer() {

  return (

    <footer className="footer">


      <div className="footer-container">


        {/* About */}

        <div className="footer-box">

          <h2>
            <FaHospital />
            CityCare Hospital
          </h2>

          <p>
            Providing quality healthcare services
            with experienced doctors and modern
            medical facilities.
          </p>

        </div>



        {/* Quick Links */}

        <div className="footer-box">

          <h3>
            Quick Links
          </h3>


          <ul>

            <li>Home</li>

            <li>About</li>

            <li>Doctors</li>

            <li>Departments</li>

            <li>Appointment</li>

            <li>Contact</li>

          </ul>

        </div>




        {/* Contact */}

        <div className="footer-box">


          <h3>
            Contact Us
          </h3>


          <p>
            <FaPhone />
            +91 98765 43210
          </p>


          <p>
            <FaEnvelope />
            info@citycare.com
          </p>


          <p>
            <FaMapMarkerAlt />
            Rajkot, Gujarat
          </p>


        </div>




        {/* Social */}

        <div className="footer-box">


          <h3>
            Follow Us
          </h3>


          <div className="social-icons">


            <FaFacebook />

            <FaTwitter />

            <FaInstagram />


          </div>


        </div>


      </div>



      <div className="footer-bottom">

        © 2026 CityCare Hospital.
        All Rights Reserved.

      </div>


    </footer>

  );

}


export default Footer;