import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Patel",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Excellent hospital with experienced doctors. The staff was very supportive and caring.",
  },
  {
    id: 2,
    name: "Priya Shah",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "I received the best treatment here. Clean environment and quick service.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Doctors explained everything clearly and the facilities are excellent. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <h5>TESTIMONIALS</h5>
          <h2>What Our Patients Say</h2>
          <p>
            We always strive to provide the best healthcare services for our
            patients.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <span>{item.role}</span>

              <p>"{item.review}"</p>

              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;