import React from "react";
import "./Doctors.css";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Dr. John Smith",
      specialist: "Cardiologist",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Dr. Sarah Johnson",
      specialist: "Neurologist",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Dr. David Wilson",
      specialist: "Orthopedic",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Dr. Emily Brown",
      specialist: "Dentist",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Dr. Michael Lee",
      specialist: "Eye Specialist",
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      name: "Dr. Sophia Clark",
      specialist: "Pediatrician",
    },
  ];

  return (
    <section className="doctors">
      <div className="container">
        <div className="section-title">
          <h4>OUR DOCTORS</h4>
          <h2>Meet Our Specialists</h2>
          <p>
            Our experienced medical team provides world-class healthcare with
            dedication and compassion.
          </p>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} />

              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialist}</p>

                <button>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;