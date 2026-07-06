import React from "react";
import "./Services.css";
import {
  FaAmbulance,
  FaHeartbeat,
  FaUserMd,
  FaFlask,
  FaPills,
  FaProcedures,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaUserMd />,
      title: "Expert Doctors",
      description:
        "Our experienced doctors provide quality healthcare with personalized treatment.",
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      title: "Emergency Care",
      description:
        "24/7 emergency medical services with advanced life support facilities.",
    },
    {
      id: 3,
      icon: <FaAmbulance />,
      title: "Ambulance Service",
      description:
        "Fast ambulance service available around the clock for emergencies.",
    },
    {
      id: 4,
      icon: <FaFlask />,
      title: "Laboratory",
      description:
        "Modern pathology lab providing accurate diagnostic reports.",
    },
    {
      id: 5,
      icon: <FaPills />,
      title: "Pharmacy",
      description:
        "Fully stocked pharmacy with genuine medicines available 24/7.",
    },
    {
      id: 6,
      icon: <FaProcedures />,
      title: "Operation Theatre",
      description:
        "Advanced operation theatres equipped with the latest surgical technology.",
    },
  ];

  return (
    <section className="services">
      <div className="container">

        <div className="section-title">
          <h5>OUR SERVICES</h5>
          <h2>Hospital Services</h2>
          <p>
            We provide comprehensive healthcare services with experienced
            doctors and modern medical technology.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-btn">
                Read More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;