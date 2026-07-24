import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import "./Doctors.css";

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const [doctor, setDoctor] = useState({
    name: "",
    department: "",
    experience: "",
    phone: "",
  });

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("hospitalDoctors")) || [];

    setDoctors(data);

  }, []);

  const handleChange = (e) => {

    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });

  };

  const addDoctor = (e) => {

    e.preventDefault();

    if (
      !doctor.name ||
      !doctor.department ||
      !doctor.experience ||
      !doctor.phone
    ) {
      alert("Please Fill All Fields");
      return;
    }

    const newDoctor = {
      id: Date.now(),
      ...doctor,
    };

    const updatedDoctors = [...doctors, newDoctor];

    setDoctors(updatedDoctors);

    localStorage.setItem(
      "hospitalDoctors",
      JSON.stringify(updatedDoctors)
    );

    setDoctor({
      name: "",
      department: "",
      experience: "",
      phone: "",
    });

  };

  const deleteDoctor = (id) => {

    const updated = doctors.filter(
      (item) => item.id !== id
    );

    setDoctors(updated);

    localStorage.setItem(
      "hospitalDoctors",
      JSON.stringify(updated)
    );

  };

  const filteredDoctors = doctors.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.department.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <AdminLayout>

      <div className="doctor-page">

        <h1>👨‍⚕️ Doctors Management</h1>

        <form
          className="doctor-form"
          onSubmit={addDoctor}
        >

          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={doctor.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={doctor.department}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={doctor.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={doctor.phone}
            onChange={handleChange}
          />

          <button type="submit">
            Add Doctor
          </button>

        </form>

        <input
          type="text"
          placeholder="Search Doctor..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <table className="doctor-table">

          <thead>

            <tr>

              <th>Name</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Phone</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredDoctors.length > 0 ? (

              filteredDoctors.map((item) => (

                <tr key={item.id}>

                  <td>{item.name}</td>

                  <td>{item.department}</td>

                  <td>{item.experience}</td>

                  <td>{item.phone}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteDoctor(item.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="5">
                  No Doctors Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );

}

export default Doctors;