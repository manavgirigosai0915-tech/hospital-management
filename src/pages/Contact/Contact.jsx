import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const API = "http://localhost:5000/api/contact";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, formData);

        alert("Contact Updated Successfully");
      } else {
        await axios.post(API, formData);

        alert("Message Sent Successfully");
      }

      resetForm();
      fetchContacts();
    } catch (err) {
      console.log(err);
      alert("Something Went Wrong");
    }
  };

  const handleEdit = (contact) => {
    setEditId(contact.id);

    setFormData({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }

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
    <section className="contact">
  <div className="container">

    <div className="contact-title">
      <h5>CONTACT US</h5>
      <h2>Get In Touch</h2>
      <p>
        We are always here to help you. Feel free to contact us anytime.
      </p>
    </div>

    <div className="contact-wrapper">

      <div className="contact-info">

        <div className="info-box">
          <FaPhoneAlt className="icon" />
          <div>
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="info-box">
          <FaEnvelope className="icon" />
          <div>
            <h3>Email</h3>
            <p>info@citycarehospital.com</p>
          </div>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h3>Address</h3>
            <p>Rajkot, Gujarat, India</p>
          </div>
        </div>

      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          {editId ? "Update Contact" : "Send Message"}
        </button>

      </form>

    </div>
        <div className="contact-table mt-5">

      <h2 className="mb-4 text-center">Contact Messages</h2>

      <table className="table table-bordered table-hover table-striped">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th style={{ width: "180px" }}>Action</th>
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
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </button>

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
          </div> {/* container */}

    </section>
  );
};

export default Contact;