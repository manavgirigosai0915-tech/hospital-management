import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Departments.css";

const Departments = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Cardiology",
      head: "Dr. John Smith",
      description: "Heart Care Department",
    },
    {
      id: 2,
      name: "Neurology",
      head: "Dr. Sarah Johnson",
      description: "Brain & Nerve Department",
    },
    {
      id: 3,
      name: "Orthopedics",
      head: "Dr. Michael Brown",
      description: "Bone & Joint Care",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    head: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addDepartment = (e) => {
    e.preventDefault();

    if (!form.name || !form.head || !form.description) {
      alert("Please fill all fields");
      return;
    }

    setDepartments([
      ...departments,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      head: "",
      description: "",
    });
  };

  const deleteDepartment = (id) => {
    setDepartments(departments.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="department-page">

        <h2>🏥 Departments Management</h2>

        <form className="department-form" onSubmit={addDepartment}>

          <input
            type="text"
            name="name"
            placeholder="Department Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="head"
            placeholder="Department Head"
            value={form.head}
            onChange={handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />

          <button type="submit">
            Add Department
          </button>

        </form>

        <table className="department-table">

          <thead>
            <tr>
              <th>Department</th>
              <th>Head</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.name}</td>
                <td>{dept.head}</td>
                <td>{dept.description}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteDepartment(dept.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
};

export default Departments;