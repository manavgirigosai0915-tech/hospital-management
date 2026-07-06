import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Settings.css";

const Settings = () => {
  const [form, setForm] = useState({
    hospitalName: "CityCare Hospital",
    email: "info@citycare.com",
    phone: "+91 98765 43210",
    address: "Rajkot, Gujarat",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings Updated Successfully!");
  };

  return (
    <AdminLayout>
      <div className="settings">

        <h2>⚙️ Settings</h2>

        <form onSubmit={handleSave} className="settings-form">

          <label>Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            value={form.hospitalName}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />

          <label>Change Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New Password"
          />

          <button type="submit">Save Settings</button>

        </form>

      </div>
    </AdminLayout>
  );
};

export default Settings;