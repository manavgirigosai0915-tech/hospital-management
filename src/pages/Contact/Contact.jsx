import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send Data to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.data.success) {
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send message!");
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
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;