import React from "react";
import "./Services.css";
import {
  FaAmbulance,
  FaUserMd,
  FaHeartbeat,
  FaXRay,
  FaCapsules,
  FaProcedures,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaUserMd />,
      title: "Expert Doctors",
      description:
        "Our experienced doctors provide the best treatment using modern medical technology.",
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      title: "Emergency Care",
      description:
        "24/7 emergency services with advanced ICU and trauma care facilities.",
    },
    {
      id: 3,
      icon: <FaAmbulance />,
      title: "Ambulance Service",
      description:
        "Fast ambulance services available round the clock for medical emergencies.",
    },
    {
      id: 4,
      icon: <FaXRay />,
      title: "Laboratory",
      description:
        "Modern diagnostic laboratory with accurate and quick test reports.",
    },
    {
      id: 5,
      icon: <FaCapsules />,
      title: "Pharmacy",
      description:
        "Hospital pharmacy with genuine medicines available 24 hours.",
    },
    {
      id: 6,
      icon: <FaProcedures />,
      title: "Operation Theatre",
      description:
        "Fully equipped operation theatres with advanced surgical technology.",
    },
  ];

  return (
    <section className="services">
      <div className="container">

        <div className="section-title">
          <h5>OUR SERVICES</h5>
          <h2>Healthcare Services</h2>
          <p>
            We provide high-quality healthcare services with experienced doctors,
            advanced medical equipment, and compassionate care.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>Read More</button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;