import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import {
  FaUserMd,
  FaUsers,
  FaHospital,
  FaCalendarCheck,
  FaUserFriends,
} from "react-icons/fa";
import "./Reports.css";

function Reports() {

  const [report, setReport] = useState({
    doctors: 45,
    patients: 320,
    departments: 12,
    appointments: 95,
    users: 0,
  });

  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("hospitalUsers")) || [];

    setReport((prev) => ({
      ...prev,
      users: users.length,
    }));

  }, []);

  const printReport = () => {
    window.print();
  };

  return (

    <AdminLayout>

      <div className="reports-page">

        <div className="report-header">

          <h1>📊 Hospital Reports</h1>

          <button
            className="print-btn"
            onClick={printReport}
          >
            Print Report
          </button>

        </div>

        <div className="report-cards">

          <div className="report-card">

            <FaUserMd className="report-icon"/>

            <h2>{report.doctors}</h2>

            <p>Total Doctors</p>

          </div>

          <div className="report-card">

            <FaUsers className="report-icon"/>

            <h2>{report.patients}</h2>

            <p>Total Patients</p>

          </div>

          <div className="report-card">

            <FaHospital className="report-icon"/>

            <h2>{report.departments}</h2>

            <p>Departments</p>

          </div>

          <div className="report-card">

            <FaCalendarCheck className="report-icon"/>

            <h2>{report.appointments}</h2>

            <p>Appointments</p>

          </div>

          <div className="report-card">

            <FaUserFriends className="report-icon"/>

            <h2>{report.users}</h2>

            <p>Registered Users</p>

          </div>

        </div>

        <div className="summary-box">

          <h2>Hospital Summary</h2>

          <table>

            <tbody>

              <tr>

                <td>Total Doctors</td>

                <td>{report.doctors}</td>

              </tr>

              <tr>

                <td>Total Patients</td>

                <td>{report.patients}</td>

              </tr>

              <tr>

                <td>Total Departments</td>

                <td>{report.departments}</td>

              </tr>

              <tr>

                <td>Total Appointments</td>

                <td>{report.appointments}</td>

              </tr>

              <tr>

                <td>Total Registered Users</td>

                <td>{report.users}</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );
}

export default Reports;