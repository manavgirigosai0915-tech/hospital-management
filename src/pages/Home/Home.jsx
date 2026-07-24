import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaHospital,
  FaProcedures,
  FaAmbulance,
} from "react-icons/fa";

import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Your Health Is <br />
            <span>Our First Priority</span>
          </h1>

          <p>
            Welcome to CityCare Hospital.
            We provide world-class healthcare with
            experienced doctors, modern equipment,
            and 24/7 emergency services.
          </p>

          <div className="hero-buttons">

            <Link to="/appointment" className="btn-primary">
              Book Appointment
            </Link>

            <Link to="/doctors" className="btn-secondary">
              View Doctors
            </Link>

          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700"
            alt="Hospital"
          />
        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-card">
          <FaUserMd />
          <h2>120+</h2>
          <p>Expert Doctors</p>
        </div>

        <div className="stat-card">
          <FaProcedures />
          <h2>5000+</h2>
          <p>Happy Patients</p>
        </div>

        <div className="stat-card">
          <FaHospital />
          <h2>18</h2>
          <p>Departments</p>
        </div>

        <div className="stat-card">
          <FaAmbulance />
          <h2>24/7</h2>
          <p>Emergency</p>
        </div>

      </section>

      {/* About */}

      <section className="about-home">

        <h2>Why Choose CityCare Hospital?</h2>

        <p>
          We combine experienced medical professionals,
          modern technology, compassionate care,
          and affordable treatment to provide the
          best healthcare experience.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3> Expert Doctors</h3>
            <p>Highly qualified specialists in every department.</p>
          </div>

          <div className="about-card">
            <h3> Modern Facilities</h3>
            <p>Advanced equipment and world-class infrastructure.</p>
          </div>

          <div className="about-card">
            <h3> Patient Care</h3>
            <p>Friendly staff with personalized healthcare services.</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;