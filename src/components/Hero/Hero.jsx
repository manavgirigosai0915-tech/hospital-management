import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <h4>Welcome To CityCare Hospital</h4>

          <h1>
            Your Health Is <br />
            Our First Priority
          </h1>

          <p>
            We provide world-class healthcare services with experienced
            doctors, advanced medical technology, emergency care, and
            compassionate treatment for every patient.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment" className="btn-primary">
              Book Appointment
            </Link>

            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;