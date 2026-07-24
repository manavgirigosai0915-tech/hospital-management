import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import "./Patients.css";

function Patients() {

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    disease: "",
    phone: "",
  });

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("hospitalPatients")) || [];

    setPatients(data);
  }, []);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const addPatient = (e) => {
    e.preventDefault();

    if (
      !patient.name ||
      !patient.age ||
      !patient.disease ||
      !patient.phone
    ) {
      alert("Please Fill All Fields");
      return;
    }

    const newPatient = {
      id: Date.now(),
      ...patient,
    };

    const updatedPatients = [...patients, newPatient];

    setPatients(updatedPatients);

    localStorage.setItem(
      "hospitalPatients",
      JSON.stringify(updatedPatients)
    );

    setPatient({
      name: "",
      age: "",
      disease: "",
      phone: "",
    });
  };

  const deletePatient = (id) => {

    const updated = patients.filter(
      (item) => item.id !== id
    );

    setPatients(updated);

    localStorage.setItem(
      "hospitalPatients",
      JSON.stringify(updated)
    );
  };

  const filteredPatients = patients.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.disease.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="patient-page">

        <h1>🧑‍⚕️ Patients Management</h1>

        <form
          className="patient-form"
          onSubmit={addPatient}
        >

          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={patient.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patient.age}
            onChange={handleChange}
          />

          <input
            type="text"
            name="disease"
            placeholder="Disease"
            value={patient.disease}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={patient.phone}
            onChange={handleChange}
          />

          <button type="submit">
            Add Patient
          </button>

        </form>

        <input
          type="text"
          className="search-box"
          placeholder="Search Patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="patient-table">

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

            {filteredPatients.length > 0 ? (

              filteredPatients.map((item) => (

                <tr key={item.id}>

                  <td>{item.name}</td>

                  <td>{item.age}</td>

                  <td>{item.disease}</td>

                  <td>{item.phone}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() => deletePatient(item.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="5">
                  No Patients Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Patients;