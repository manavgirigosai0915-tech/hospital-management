import React, { useState, useEffect } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Settings.css";

function Settings() {

  const [form, setForm] = useState({
    hospitalName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("hospitalSettings")
    );

    if (data) {
      setForm(data);
    } else {

      setForm({
        hospitalName: "CityCare Hospital",
        email: "info@citycare.com",
        phone: "+91 9876543210",
        address: "Rajkot, Gujarat",
        password: "",
      });

    }

  }, []);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "hospitalSettings",
      JSON.stringify(form)
    );

    alert("Settings Saved Successfully");

  };

  const handleReset = () => {

    if (window.confirm("Reset all settings?")) {

      const defaultData = {
        hospitalName: "CityCare Hospital",
        email: "info@citycare.com",
        phone: "+91 9876543210",
        address: "Rajkot, Gujarat",
        password: "",
      };

      setForm(defaultData);

      localStorage.setItem(
        "hospitalSettings",
        JSON.stringify(defaultData)
      );

    }

  };

  return (

    <AdminLayout>

      <div className="settings-page">

        <h2>⚙ Hospital Settings</h2>

        <form
          className="settings-form"
          onSubmit={handleSave}
        >

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

          <textarea
            rows="3"
            name="address"
            value={form.address}
            onChange={handleChange}
          ></textarea>

          <label>Change Password</label>

          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={form.password}
            onChange={handleChange}
          />

          <div className="btn-group">

            <button
              className="save-btn"
              type="submit"
            >
              Save Settings
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </AdminLayout>

  );
}

export default Settings;