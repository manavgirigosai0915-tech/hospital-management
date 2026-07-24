import React, { useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import "./Departments.css";

function Departments() {
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
      description: "Bone & Joint Department",
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

    if (
      !form.name ||
      !form.head ||
      !form.description
    ) {
      alert("Please fill all fields");
      return;
    }

    const newDepartment = {
      id: Date.now(),
      ...form,
    };

    setDepartments([
      ...departments,
      newDepartment,
    ]);

    setForm({
      name: "",
      head: "",
      description: "",
    });
  };

  const deleteDepartment = (id) => {
    setDepartments(
      departments.filter(
        (department) => department.id !== id
      )
    );
  };

  return (
    <AdminLayout>

      <div className="department-page">

        <h1>🏥 Departments Management</h1>

        <form
          className="department-form"
          onSubmit={addDepartment}
        >

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

            {departments.map((department) => (

              <tr key={department.id}>

                <td>{department.name}</td>

                <td>{department.head}</td>

                <td>{department.description}</td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteDepartment(department.id)
                    }
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
}

export default Departments;