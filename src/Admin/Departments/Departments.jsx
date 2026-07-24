import React, { useState, useEffect } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Departments.css";

function Departments() {
  const [departments, setDepartments] = useState([]);

  const [form, setForm] = useState({
    name: "",
    head: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  // Load Departments
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("departments"));

    if (data && data.length > 0) {
      setDepartments(data);
    } else {
      const demo = [
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
      ];

      setDepartments(demo);
      localStorage.setItem(
        "departments",
        JSON.stringify(demo)
      );
    }
  }, []);

  // Save Departments
  useEffect(() => {
    localStorage.setItem(
      "departments",
      JSON.stringify(departments)
    );
  }, [departments]);

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
      !form.head ||
      !form.description
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updated = departments.map((dept) =>
        dept.id === editId
          ? { ...dept, ...form }
          : dept
      );

      setDepartments(updated);
      setEditId(null);

    } else {
      setDepartments([
        ...departments,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      name: "",
      head: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete Department?")) {
      setDepartments(
        departments.filter((dept) => dept.id !== id)
      );
    }
  };

  const handleEdit = (dept) => {
    setForm(dept);
    setEditId(dept.id);
  };

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(search.toLowerCase()) ||
      dept.head.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="department-page">

        <h2>🏥 Departments Management</h2>

        <input
          className="search-box"
          type="text"
          placeholder="Search Department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <form
          className="department-form"
          onSubmit={handleSubmit}
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
            {editId
              ? "Update Department"
              : "Add Department"}
          </button>

        </form>

        <div className="department-table">

          <table>

            <thead>
              <tr>
                <th>Department</th>
                <th>Department Head</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredDepartments.map((dept) => (

                <tr key={dept.id}>

                  <td>{dept.name}</td>

                  <td>{dept.head}</td>

                  <td>{dept.description}</td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(dept)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(dept.id)}
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

export default Departments;