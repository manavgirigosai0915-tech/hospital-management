import React from "react";
import { FaUserMd, FaUsers, FaHospital, FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/Layout/AdminLayout";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <AdminLayout>
      <div className="dashboard">

        <div className="dashboard-header">
          <div>
            <h1>🏥 Hospital Admin Dashboard</h1>
            <h3>Welcome Administrator</h3>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <FaUserMd className="card-icon" />
            <h2>45</h2>
            <p>Total Doctors</p>
          </div>

          <div className="dashboard-card">
            <FaUsers className="card-icon" />
            <h2>320</h2>
            <p>Total Patients</p>
          </div>

          <div className="dashboard-card">
            <FaCalendarCheck className="card-icon" />
            <h2>95</h2>
            <p>Appointments</p>
          </div>

          <div className="dashboard-card">
            <FaHospital className="card-icon" />
            <h2>12</h2>
            <p>Departments</p>
          </div>

        </div>

        <div className="recent-table">

          <h2>Recent Appointments</h2>

          <table>

            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rahul Patel</td>
                <td>Dr. John Smith</td>
                <td>Cardiology</td>
                <td>15-07-2026</td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>

              <tr>
                <td>Priya Shah</td>
                <td>Dr. Sarah</td>
                <td>Neurology</td>
                <td>16-07-2026</td>
                <td>
                  <span className="pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Amit Kumar</td>
                <td>Dr. Michael</td>
                <td>Orthopedic</td>
                <td>17-07-2026</td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Dashboard;