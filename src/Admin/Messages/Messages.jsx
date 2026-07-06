import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      subject: "Appointment",
      message: "I want to book an appointment with a cardiologist.",
    },
    {
      id: 2,
      name: "Priya Shah",
      email: "priya@gmail.com",
      subject: "Emergency",
      message: "Need emergency consultation for my father.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      subject: "General Inquiry",
      message: "What are your OPD timings?",
    },
  ]);

  const deleteMessage = (id) => {
    setMessages(messages.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="messages-page">

        <h2>📩 Messages</h2>

        <table className="message-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteMessage(msg.id)}
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

export default Messages;