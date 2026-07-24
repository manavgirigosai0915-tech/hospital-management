import React, { useState, useEffect } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Patients.css";

function Patients() {

  const [patients, setPatients] = useState([]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
    phone: "",
  });

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  // Load Patients
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patients"));

    if (data && data.length > 0) {
      setPatients(data);
    } else {
      const demo = [
        {
          id: 1,
          name: "Rahul Patel",
          age: 25,
          disease: "Fever",
          phone: "9876543210",
        },
        {
          id: 2,
          name: "Priya Shah",
          age: 30,
          disease: "Diabetes",
          phone: "9123456780",
        },
        {
          id: 3,
          name: "Amit Kumar",
          age: 40,
          disease: "Blood Pressure",
          phone: "9988776655",
        },
      ];

      setPatients(demo);
      localStorage.setItem("patients", JSON.stringify(demo));
    }
  }, []);

  // Save Patients
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

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
      !form.age ||
      !form.disease ||
      !form.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updated = patients.map((patient) =>
        patient.id === editId
          ? { ...patient, ...form }
          : patient
      );

      setPatients(updated);
      setEditId(null);

    } else {

      const newPatient = {
        id: Date.now(),
        ...form,
      };

      setPatients([...patients, newPatient]);
    }

    setForm({
      name: "",
      age: "",
      disease: "",
      phone: "",
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this patient?")) {
      setPatients(
        patients.filter((patient) => patient.id !== id)
      );
    }
  };

  const handleEdit = (patient) => {
    setForm(patient);
    setEditId(patient.id);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="admin-patients">

        <h2>🧑 Patients Management</h2>

        <input
          className="search-box"
          type="text"
          placeholder="Search Patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <form
          className="patient-form"
          onSubmit={handleSubmit}
        >

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

          <button type="submit">
            {editId ? "Update Patient" : "Add Patient"}
          </button>

        </form>

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

              {filteredPatients.map((patient) => (

                <tr key={patient.id}>

                  <td>{patient.name}</td>

                  <td>{patient.age}</td>

                  <td>{patient.disease}</td>

                  <td>{patient.phone}</td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(patient)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(patient.id)}
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

export default Patients;