import React from "react";
import "./Doctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialty: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Dr. Emily Wilson",
    specialty: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 5,
    name: "Dr. David Miller",
    specialty: "Dentist",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: 6,
    name: "Dr. Olivia Taylor",
    specialty: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Doctors = () => {
  return (
    <section className="doctors">
      <div className="container">

        <div className="doctor-title">
          <h5>OUR DOCTORS</h5>
          <h2>Meet Our Specialists</h2>
          <p>
            Our experienced medical professionals provide the highest quality
            healthcare with compassion and dedication.
          </p>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} />

              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>

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