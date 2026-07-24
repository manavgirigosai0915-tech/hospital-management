import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import "./Users.css";

function Users() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const allUsers =
      JSON.parse(localStorage.getItem("hospitalUsers")) || [];

    setUsers(allUsers);

  }, []);

  const deleteUser = (email) => {

    const updatedUsers = users.filter(
      (user) => user.email !== email
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "hospitalUsers",
      JSON.stringify(updatedUsers)
    );

    alert("User Deleted Successfully");

  };

  const filteredUsers = users.filter((user) =>

    user.name.toLowerCase().includes(search.toLowerCase()) ||

    user.email.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <AdminLayout>

      <div className="users-page">

        <h1>👨 Users Management</h1>

        <input
          type="text"
          placeholder="Search User..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <table className="users-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.length > 0 ? (

              filteredUsers.map((user, index) => (

                <tr key={index}>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteUser(user.email)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="4">

                  No Users Found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );

}

export default Users;