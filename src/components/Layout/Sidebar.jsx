import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaFileAlt,
  FaCog,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

import { logoutUser } from "../../utils/localStorage";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>🏥 Hospital Admin</h2>
      </div>

      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/doctors">
            <FaUserMd /> Doctors
          </Link>
        </li>

        <li>
          <Link to="/admin/patients">
            <FaUsers /> Patients
          </Link>
        </li>

        <li>
          <Link to="/admin/departments">
            <FaBuilding /> Departments
          </Link>
        </li>

        <li>
          <Link to="/admin/appointments">
            <FaCalendarAlt /> Appointments
          </Link>
        </li>

        <li>
          <Link to="/admin/contact-messages">
            <FaEnvelope /> Contact Messages
          </Link>
        </li>

        <li>
          <Link to="/admin/reports">
            <FaFileAlt /> Reports
          </Link>
        </li>

        <li>
          <Link to="/admin/settings">
            <FaCog /> Settings
          </Link>
        </li>

      </ul>

      <div className="logout-section">
        <button onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;