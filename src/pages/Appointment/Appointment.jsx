import React, { useState } from "react";
import "./Appointment.css";

const Appointment = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="appointment">
      <div className="container">

        <div className="appointment-title">
          <h5>BOOK APPOINTMENT</h5>
          <h2>Schedule Your Visit</h2>
          <p>
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Dental</option>
            <option>Pediatrics</option>
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option>Dr. John Smith</option>
            <option>Dr. Sarah Johnson</option>
            <option>Dr. Emily Brown</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>
    </section>
  );
};

export default Appointment;