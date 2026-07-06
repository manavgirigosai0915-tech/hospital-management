import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to CityCare Hospital</h1>
        <p>
          We provide quality healthcare with experienced doctors, advanced
          technology, and compassionate patient care.
        </p>

        <div className="home-buttons">
          <button className="btn-primary">Book Appointment</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;