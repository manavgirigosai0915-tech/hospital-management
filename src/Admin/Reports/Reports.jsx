import React, { useEffect, useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Reports.css";

function Reports() {

  const [report, setReport] = useState({
    doctors: 0,
    patients: 0,
    departments: 0,
    appointments: 0,
  });

  useEffect(() => {

    const doctors =
      JSON.parse(localStorage.getItem("doctors")) || [];

    const patients =
      JSON.parse(localStorage.getItem("patients")) || [];

    const departments =
      JSON.parse(localStorage.getItem("departments")) || [];

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setReport({
      doctors: doctors.length,
      patients: patients.length,
      departments: departments.length,
      appointments: appointments.length,
    });

  }, []);

  return (

    <AdminLayout>

      <div className="reports-page">

        <h2>📊 Hospital Reports</h2>

        <div className="report-cards">

          <div className="report-card">
            <h3>{report.doctors}</h3>
            <p>Total Doctors</p>
          </div>

          <div className="report-card">
            <h3>{report.patients}</h3>
            <p>Total Patients</p>
          </div>

          <div className="report-card">
            <h3>{report.departments}</h3>
            <p>Total Departments</p>
          </div>

          <div className="report-card">
            <h3>{report.appointments}</h3>
            <p>Total Appointments</p>
          </div>

        </div>

        <div className="report-table">

          <h3>Hospital Summary</h3>

          <table>

            <thead>

              <tr>
                <th>Module</th>
                <th>Total Records</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Doctors</td>
                <td>{report.doctors}</td>
              </tr>

              <tr>
                <td>Patients</td>
                <td>{report.patients}</td>
              </tr>

              <tr>
                <td>Departments</td>
                <td>{report.departments}</td>
              </tr>

              <tr>
                <td>Appointments</td>
                <td>{report.appointments}</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );
}

export default Reports;