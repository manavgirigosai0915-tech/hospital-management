import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import {
  FaUserMd,
  FaUsers,
  FaHospital,
  FaCalendarCheck,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";
import "./Dashboard.css";

function Dashboard() {
  return (
    <AdminLayout>

      <div className="dashboard-header">
        <div>
          <h1>🏥 Hospital Admin Dashboard</h1>
          <p>Welcome Administrator</p>
        </div>
      </div>

      <div className="card-container">

        <div className="card">
          <FaUserMd className="icon" />
          <h2>45</h2>
          <p>Total Doctors</p>
        </div>

        <div className="card">
          <FaUsers className="icon" />
          <h2>320</h2>
          <p>Total Patients</p>
        </div>

        <div className="card">
          <FaHospital className="icon" />
          <h2>12</h2>
          <p>Departments</p>
        </div>

        <div className="card">
          <FaCalendarCheck className="icon" />
          <h2>95</h2>
          <p>Appointments</p>
        </div>

      </div>

      <div className="quick-actions">

        <div className="action-card">
          <FaPlusCircle className="action-icon" />
          <h3>Add Doctor</h3>
        </div>

        <div className="action-card">
          <FaUsers className="action-icon" />
          <h3>Add Patient</h3>
        </div>

        <div className="action-card">
          <FaClipboardList className="action-icon" />
          <h3>View Reports</h3>
        </div>

      </div>

      <div className="table-box">

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

    </AdminLayout>
  );
}

export default Dashboard;