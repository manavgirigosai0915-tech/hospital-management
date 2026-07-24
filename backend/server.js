const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load Environment Variables
dotenv.config();

// Database Connection
require("./config/db");

const app = express();

// =============================
// Middleware
// =============================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Upload Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =============================
// Import Routes
// =============================
const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const contactRoutes = require("./routes/contactRoutes");

// =============================
// Test Routes
// =============================
app.get("/", (req, res) => {
  res.send("🚀 Hospital Management System Backend Running...");
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Hospital API Working Successfully",
  });
});

// =============================
// API Routes
// =============================
app.use("/api/auth", authRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/patients", patientRoutes);

app.use("/api/departments", departmentRoutes);

app.use("/api/appointments", appointmentRoutes);

// Contact Route
app.use("/api/contact", contactRoutes);

// =============================
// 404 Route
// =============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// =============================
// Server
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server Running on http://localhost:${PORT}`);
});