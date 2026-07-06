import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHospital } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <div className="logo">
          <FaHospital className="logo-icon" />
          <h2>CityCare Hospital</h2>
        </div>

        <ul className={menu ? "nav-links active" : "nav-links"}>

          <li>
            <Link to="/" onClick={() => setMenu(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenu(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/departments" onClick={() => setMenu(false)}>
              Departments
            </Link>
          </li>

          <li>
            <Link to="/doctors" onClick={() => setMenu(false)}>
              Doctors
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={() => setMenu(false)}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/appointment" onClick={() => setMenu(false)}>
              Appointment
            </Link>
          </li>

          <li>
            <Link to="/gallery" onClick={() => setMenu(false)}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenu(false)}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/login" onClick={() => setMenu(false)}>
              Login
            </Link>
          </li>

        </ul>

        <div className="menu-icon">

          {menu ? (
            <FaTimes onClick={() => setMenu(false)} />
          ) : (
            <FaBars onClick={() => setMenu(true)} />
          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;