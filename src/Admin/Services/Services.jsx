import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Emergency Care", desc: "24/7 Emergency Support" },
    { id: 2, name: "Cardiology", desc: "Heart Treatment Services" },
    { id: 3, name: "Pharmacy", desc: "24/7 Medicine Availability" },
  ]);

  const [form, setForm] = useState({
    name: "",
    desc: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addService = (e) => {
    e.preventDefault();

    if (!form.name || !form.desc) return;

    const newService = {
      id: Date.now(),
      ...form,
    };

    setServices([...services, newService]);

    setForm({ name: "", desc: "" });
  };

  const deleteService = (id) => {
    setServices(services.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="admin-services">

        <h2>🏥 Services Management</h2>

        {/* Form */}
        <form className="service-form" onSubmit={addService}>

          <input
            type="text"
            name="name"
            placeholder="Service Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="desc"
            placeholder="Service Description"
            value={form.desc}
            onChange={handleChange}
          />

          <button type="submit">Add Service</button>

        </form>

        {/* List */}
        <div className="service-list">

          {services.map((item) => (
            <div className="service-card" key={item.id}>

              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <button onClick={() => deleteService(item.id)}>
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </AdminLayout>
  );
};

export default Services;