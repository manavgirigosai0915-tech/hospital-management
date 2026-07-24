import React, { useState, useEffect } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Doctors.css";

function Doctors() {

  const [doctors, setDoctors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    department: "",
    experience: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  // Load Doctors
  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("doctors"));

    if (data && data.length > 0) {
      setDoctors(data);
    } else {
      const demo = [
        {
          id: 1,
          name: "Dr. John Smith",
          department: "Cardiology",
          experience: "10 Years",
          image:
            "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          id: 2,
          name: "Dr. Sarah Johnson",
          department: "Neurology",
          experience: "8 Years",
          image:
            "https://randomuser.me/api/portraits/women/44.jpg",
        },
      ];

      setDoctors(demo);

      localStorage.setItem(
        "doctors",
        JSON.stringify(demo)
      );
    }

  }, []);

  // Save Doctors
  useEffect(() => {

    localStorage.setItem(
      "doctors",
      JSON.stringify(doctors)
    );

  }, [doctors]);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.department ||
      !form.experience ||
      !form.image
    ) {
      alert("Please Fill All Fields");
      return;
    }

    if (editId) {

      const updated = doctors.map((doctor) =>
        doctor.id === editId
          ? { ...doctor, ...form }
          : doctor
      );

      setDoctors(updated);

      setEditId(null);

    } else {

      setDoctors([
        ...doctors,
        {
          id: Date.now(),
          ...form,
        },
      ]);

    }

    setForm({
      name: "",
      department: "",
      experience: "",
      image: "",
    });

  };

  const handleDelete = (id) => {

    if (window.confirm("Delete Doctor?")) {

      setDoctors(
        doctors.filter((doctor) => doctor.id !== id)
      );

    }

  };

  const handleEdit = (doctor) => {

    setForm(doctor);

    setEditId(doctor.id);

  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="doctor-page">

        <h2>👨‍⚕️ Doctors Management</h2>

        <input
          className="search-box"
          type="text"
          placeholder="Search Doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <form
          className="doctor-form"
          onSubmit={handleSubmit}
        >

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
            {editId ? "Update Doctor" : "Add Doctor"}
          </button>

        </form>

        <div className="doctor-grid">

          {filteredDoctors.map((doctor) => (

            <div
              className="doctor-card"
              key={doctor.id}
            >

              <img
                src={doctor.image}
                alt={doctor.name}
              />

              <h3>{doctor.name}</h3>

              <p>
                <strong>Department:</strong>{" "}
                {doctor.department}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {doctor.experience}
              </p>

              <div className="btn-group">

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(doctor)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>
  );
}

export default Doctors;