import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Smith",
      department: "Cardiology",
      experience: "10 Years",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      department: "Neurology",
      experience: "8 Years",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    department: "",
    experience: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addDoctor = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.department ||
      !form.experience ||
      !form.image
    ) {
      alert("Please fill all fields");
      return;
    }

    setDoctors([
      ...doctors,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      department: "",
      experience: "",
      image: "",
    });
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <AdminLayout>
      <div className="doctor-page">

        <h2>👨‍⚕️ Doctors Management</h2>

        <form className="doctor-form" onSubmit={addDoctor}>

          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={form.name}
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
            type="text"
            name="experience"
            placeholder="Experience"
            value={form.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <button type="submit">
            Add Doctor
          </button>

        </form>

        <div className="doctor-grid">

          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>

              <img
                src={doctor.image}
                alt={doctor.name}
              />

              <h3>{doctor.name}</h3>

              <p>
                <strong>Department:</strong> {doctor.department}
              </p>

              <p>
                <strong>Experience:</strong> {doctor.experience}
              </p>

              <button
                className="delete-btn"
                onClick={() => deleteDoctor(doctor.id)}
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </AdminLayout>
  );
};

export default Doctors;