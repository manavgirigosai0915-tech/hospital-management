import React from "react";
import "./Departments.css";
import {
  FaHeartbeat,
  FaBrain,
  FaTooth,
  FaEye,
  FaBone,
  FaBaby,
} from "react-icons/fa";

const Departments = () => {
  const departments = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      title: "Cardiology",
      desc: "Heart care with modern equipment and experienced specialists.",
    },
    {
      id: 2,
      icon: <FaBrain />,
      title: "Neurology",
      desc: "Advanced treatment for brain and nervous system disorders.",
    },
    {
      id: 3,
      icon: <FaTooth />,
      title: "Dental Care",
      desc: "Complete dental solutions with painless procedures.",
    },
    {
      id: 4,
      icon: <FaEye />,
      title: "Ophthalmology",
      desc: "Eye checkups, surgeries and vision care by experts.",
    },
    {
      id: 5,
      icon: <FaBone />,
      title: "Orthopedics",
      desc: "Bone, joint and muscle treatment using latest technology.",
    },
    {
      id: 6,
      icon: <FaBaby />,
      title: "Pediatrics",
      desc: "Special healthcare services for infants and children.",
    },
  ];

  return (
    <section className="departments">
      <div className="container">
        <div className="section-title">
          <h4>OUR DEPARTMENTS</h4>
          <h2>Medical Departments</h2>
          <p>
            We provide comprehensive healthcare services across multiple
            specialties with highly qualified doctors.
          </p>
        </div>

        <div className="department-grid">
          {departments.map((item) => (
            <div className="department-card" key={item.id}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;