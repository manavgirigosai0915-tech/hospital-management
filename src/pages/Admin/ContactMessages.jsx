import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/contact";

const ContactMessages = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API);

      if (res.data.success) {
        setContacts(res.data.contacts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);

      alert("Contact Deleted Successfully");

      fetchContacts();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-4">

  <h2 className="mb-4 text-center">Contact Messages</h2>

  <div className="table-responsive">

    <table className="table table-bordered table-striped table-hover">

      <thead className="table-primary">

        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th width="120">Action</th>
        </tr>

      </thead>

      <tbody>

        {contacts.length > 0 ? (

          contacts.map((contact) => (

            <tr key={contact.id}>

              <td>{contact.id}</td>

              <td>{contact.name}</td>

              <td>{contact.email}</td>

              <td>{contact.subject}</td>

              <td>{contact.message}</td>

              <td>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))

        ) : (

          <tr>

            <td colSpan="6" className="text-center">
              No Contact Messages Found
            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>
  );
};

export default ContactMessages;