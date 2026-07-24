import React, { useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import "./Settings.css";

function Settings() {

  const [hospital, setHospital] = useState({
    name: "CityCare Hospital",
    email: "info@citycare.com",
    phone: "+91 9876543210",
    address: "Rajkot, Gujarat",
    password: "",
  });

  const handleChange = (e) => {

    setHospital({
      ...hospital,
      [e.target.name]: e.target.value,
    });

  };

  const saveSettings = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "hospitalSettings",
      JSON.stringify(hospital)
    );

    alert("Settings Saved Successfully");

  };

  return (

    <AdminLayout>

      <div className="settings-page">

        <h1>⚙️ Hospital Settings</h1>

        <form
          className="settings-form"
          onSubmit={saveSettings}
        >

          <div className="form-group">

            <label>Hospital Name</label>

            <input
              type="text"
              name="name"
              value={hospital.name}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={hospital.email}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={hospital.phone}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Address</label>

            <textarea
              rows="4"
              name="address"
              value={hospital.address}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Change Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter New Password"
              value={hospital.password}
              onChange={handleChange}
            />

          </div>

          <button
            className="save-btn"
            type="submit"
          >
            Save Settings
          </button>

        </form>

      </div>

    </AdminLayout>

  );

}

export default Settings;