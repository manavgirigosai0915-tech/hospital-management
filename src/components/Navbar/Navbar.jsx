import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHospital,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  getLoggedInUser,
  logoutUser,
} from "../../utils/localStorage";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = getLoggedInUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <FaHospital className="logo-icon" />
        <span>CityCare Hospital</span>
      </div>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/departments">Departments</Link>
        </li>

        <li>
          <Link to="/doctors">Doctors</Link>
        </li>

        <li>
          <Link to="/appointment">Appointment</Link>
        </li>

         <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {user?.role === "admin" && (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li className="admin-user">
              <FaUserCircle className="user-icon" />
              <span>{user.name}</span>
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          </>
        )}

        {!user && (
          <>
            <li>
              <Link className="login-btn" to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link className="register-btn" to="/register">
                Register
              </Link>
            </li>
          </>
        )}

      </ul>

    </header>
  );
}

export default Navbar;