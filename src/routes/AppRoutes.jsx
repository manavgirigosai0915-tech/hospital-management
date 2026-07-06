import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Departments from "../pages/Departments/Departments";
import Doctors from "../pages/Doctors/Doctors";
import Services from "../pages/Services/Services";
import Appointment from "../pages/Appointment/Appointment";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;