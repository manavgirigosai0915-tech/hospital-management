import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "Rahul Patel", age: 25, disease: "Fever", phone: "9876543210" },
    { id: 2, name: "Priya Shah", age: 30, disease: "Diabetes", phone: "9123456780" },
    { id: 3, name: "Amit Kumar", age: 40, disease: "BP", phone: "9988776655" },
  ]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addPatient = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.disease || !form.phone) return;

    const newPatient = {
      id: Date.now(),
      ...form,
    };

    setPatients([...patients, newPatient]);

    setForm({
      name: "",
      age: "",
      disease: "",
      phone: "",
    });
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="admin-patients">

        <h2>🧑‍⚕️ Patients Management</h2>

        {/* FORM */}
        <form className="patient-form" onSubmit={addPatient}>

          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <input
            type="text"
            name="disease"
            placeholder="Disease"
            value={form.disease}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <button type="submit">Add Patient</button>

        </form>

        {/* TABLE */}
        <div className="patient-table">

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Disease</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.disease}</td>
                  <td>{p.phone}</td>
                  <td>
                    <button onClick={() => deletePatient(p.id)}>
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
};

export default Patients;