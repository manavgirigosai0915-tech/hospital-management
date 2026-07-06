import React, { useState } from "react";
import "./Appointments.css";
import AdminLayout from "../components/Layout/AdminLayout";

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Rahul Patel",
      doctor: "Dr. John Smith",
      department: "Cardiology",
      date: "2026-07-10",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Priya Shah",
      doctor: "Dr. Sarah Johnson",
      department: "Neurology",
      date: "2026-07-12",
      status: "Approved",
    },
  ]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    department: "",
    date: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addAppointment = (e) => {
    e.preventDefault();

    if (
      !form.patient ||
      !form.doctor ||
      !form.department ||
      !form.date
    ) {
      alert("Please fill all fields.");
      return;
    }

    setAppointments([
      ...appointments,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      patient: "",
      doctor: "",
      department: "",
      date: "",
      status: "Pending",
    });
  };

  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((item) => item.id !== id)
    );
  };

  return (
    <AdminLayout>
      <div className="appointment-page">

        <h2>📅 Appointment Management</h2>

        <form
          className="appointment-form"
          onSubmit={addAppointment}
        >

          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            value={form.patient}
            onChange={handleChange}
          />

          <input
            type="text"
            name="doctor"
            placeholder="Doctor Name"
            value={form.doctor}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Cancelled</option>
          </select>

          <button type="submit">
            Add Appointment
          </button>

        </form>

        <table className="appointment-table">

          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {appointments.map((item) => (
              <tr key={item.id}>

                <td>{item.patient}</td>
                <td>{item.doctor}</td>
                <td>{item.department}</td>
                <td>{item.date}</td>

                <td>
                  <span
                    className={
                      item.status === "Approved"
                        ? "approved"
                        : item.status === "Cancelled"
                        ? "cancelled"
                        : "pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteAppointment(item.id)
                    }
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
};

export default Appointments;