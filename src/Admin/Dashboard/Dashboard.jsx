import React from "react";
import "./Dashboard.css";
import AdminLayout from "../components/Layout/AdminLayout";
import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaHospital,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard">

        <h1>🏥 Hospital Dashboard</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <FaUserMd className="dashboard-icon" />
            <h2>45</h2>
            <p>Doctors</p>
          </div>

          <div className="dashboard-card">
            <FaUsers className="dashboard-icon" />
            <h2>320</h2>
            <p>Patients</p>
          </div>

          <div className="dashboard-card">
            <FaCalendarCheck className="dashboard-icon" />
            <h2>95</h2>
            <p>Appointments</p>
          </div>

          <div className="dashboard-card">
            <FaHospital className="dashboard-icon" />
            <h2>12</h2>
            <p>Departments</p>
          </div>

        </div>

        <div className="dashboard-table">

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
                <td>Dr. John</td>
                <td>Cardiology</td>
                <td>10 Jul 2026</td>
                <td><span className="approved">Approved</span></td>
              </tr>

              <tr>
                <td>Priya Shah</td>
                <td>Dr. Sarah</td>
                <td>Neurology</td>
                <td>11 Jul 2026</td>
                <td><span className="pending">Pending</span></td>
              </tr>

              <tr>
                <td>Amit Kumar</td>
                <td>Dr. Michael</td>
                <td>Orthopedic</td>
                <td>12 Jul 2026</td>
                <td><span className="approved">Approved</span></td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;