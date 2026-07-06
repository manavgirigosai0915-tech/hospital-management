import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700"
            alt="Hospital"
          />
        </div>

        <div className="about-content">
          <h5>ABOUT US</h5>

          <h2>
            Welcome To <span>CityCare Hospital</span>
          </h2>

          <p>
            CityCare Hospital is committed to delivering world-class healthcare
            with compassion, innovation, and excellence.
          </p>

          <p>
            Our experienced doctors, advanced technology, and dedicated staff
            ensure every patient receives the highest quality treatment.
          </p>

          <div className="about-boxes">

            <div className="box">
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>

            <div className="box">
              <h3>120+</h3>
              <p>Doctors</p>
            </div>

            <div className="box">
              <h3>5000+</h3>
              <p>Happy Patients</p>
            </div>

            <div className="box">
              <h3>24/7</h3>
              <p>Emergency</p>
            </div>

          </div>

          <button className="about-btn">
            Read More
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;