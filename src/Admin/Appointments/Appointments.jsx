import React, { useState, useEffect } from "react";
import "./Appointments.css";
import AdminLayout from "../components/Layout/AdminLayout";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    department: "",
    date: "",
    status: "Pending",
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // Load Appointments
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments"));

    if (data && data.length > 0) {
      setAppointments(data);
    } else {
      const demo = [
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
      ];

      setAppointments(demo);
      localStorage.setItem(
        "appointments",
        JSON.stringify(demo)
      );
    }
  }, []);

  // Save Appointments
  useEffect(() => {
    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );
  }, [appointments]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.patient ||
      !form.doctor ||
      !form.department ||
      !form.date
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updated = appointments.map((item) =>
        item.id === editId
          ? { ...item, ...form }
          : item
      );

      setAppointments(updated);
      setEditId(null);
    } else {
      setAppointments([
        ...appointments,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      patient: "",
      doctor: "",
      department: "",
      date: "",
      status: "Pending",
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete Appointment?")) {
      setAppointments(
        appointments.filter((item) => item.id !== id)
      );
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const filteredAppointments = appointments.filter(
    (item) =>
      item.patient.toLowerCase().includes(search.toLowerCase()) ||
      item.doctor.toLowerCase().includes(search.toLowerCase()) ||
      item.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="appointment-page">

        <h2>📅 Appointment Management</h2>

        <input
          className="search-box"
          type="text"
          placeholder="Search Appointment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
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
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <button type="submit">
            {editId
              ? "Update Appointment"
              : "Add Appointment"}
          </button>

        </form>

        <div className="appointment-table">

          <table>

            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Status</th>
                <th width="180">Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredAppointments.map((item) => (

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
                      className="edit-btn"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Appointments;