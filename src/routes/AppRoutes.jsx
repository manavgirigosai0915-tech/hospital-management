import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";


// Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


// User Pages
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Departments from "../pages/Departments/Departments";
import Doctors from "../pages/Doctors/Doctors";
import Appointment from "../pages/Appointment/Appointment";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import ContactMessages from "../pages/Admin/ContactMessages";


// Admin Pages
import Dashboard from "../pages/Admin/Dashboard";
import AdminDoctors from "../pages/Admin/Doctors";
import Patients from "../pages/Admin/Patients";
import AdminDepartments from "../pages/Admin/Departments";
import Appointments from "../pages/Admin/Appointments";
import Users from "../pages/Admin/Users";
import Reports from "../pages/Admin/Reports";
import Settings from "../pages/Admin/Settings";


// Protected Route
import ProtectedRoute from "./ProtectedRoute";



function AppRoutes(){

const location = useLocation();


// Hide Navbar/Footer
const hideLayout =
location.pathname === "/login" ||
location.pathname.startsWith("/dashboard") ||
location.pathname.startsWith("/admin");



return(

<>


{
!hideLayout && <Navbar />
}



<Routes>


{/* Login */}

<Route
path="/login"
element={<Login />}
/>



{/* User Pages */}


<Route
path="/"
element={
<ProtectedRoute>
<Home />
</ProtectedRoute>
}
/>



<Route
path="/home"
element={
<ProtectedRoute>
<Home />
</ProtectedRoute>
}
/>



<Route
path="/about"
element={
<ProtectedRoute>
<About />
</ProtectedRoute>
}
/>



<Route
path="/departments"
element={
<ProtectedRoute>
<Departments />
</ProtectedRoute>
}
/>



<Route
path="/doctors"
element={
<ProtectedRoute>
<Doctors />
</ProtectedRoute>
}
/>



<Route
path="/appointment"
element={
<ProtectedRoute>
<Appointment />
</ProtectedRoute>
}
/>



<Route
path="/gallery"
element={
<ProtectedRoute>
<Gallery />
</ProtectedRoute>
}
/>



<Route
path="/contact"
element={
<ProtectedRoute>
<Contact />
</ProtectedRoute>
}
/>



{/* Admin Routes */}


<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>



<Route
path="/admin/doctors"
element={
<ProtectedRoute>
<AdminDoctors />
</ProtectedRoute>
}
/>



<Route
path="/admin/patients"
element={
<ProtectedRoute>
<Patients />
</ProtectedRoute>
}
/>



<Route
path="/admin/departments"
element={
<ProtectedRoute>
<AdminDepartments />
</ProtectedRoute>
}
/>



<Route
path="/admin/appointments"
element={
<ProtectedRoute>
<Appointments />
</ProtectedRoute>
}
/>



<Route
path="/admin/users"
element={
<ProtectedRoute>
<Users />
</ProtectedRoute>
}
/>



<Route
path="/admin/reports"
element={
<ProtectedRoute>
<Reports />
</ProtectedRoute>
}
/>



<Route
path="/admin/settings"
element={
<ProtectedRoute>
<Settings />
</ProtectedRoute>
}
/>
<Route
path="/admin/contact-messages"
element={
<ProtectedRoute>
<ContactMessages />
</ProtectedRoute>
}
/>


</Routes>



{
!hideLayout && <Footer />
}



</>


)

}


export default AppRoutes;