const express = require("express");
const router = express.Router();

const {
  getAppointments,
  getAppointmentById,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

// ======================================
// Get All Appointments
// URL : GET /api/appointments
// ======================================
router.get("/", verifyToken, getAppointments);

// ======================================
// Get Appointment By ID
// URL : GET /api/appointments/:id
// ======================================
router.get("/:id", verifyToken, getAppointmentById);

// ======================================
// Add Appointment
// URL : POST /api/appointments
// ======================================
router.post("/", verifyToken, addAppointment);

// ======================================
// Update Appointment
// URL : PUT /api/appointments/:id
// ======================================
router.put("/:id", verifyToken, updateAppointment);

// ======================================
// Delete Appointment (Admin Only)
// URL : DELETE /api/appointments/:id
// ======================================
router.delete("/:id", verifyToken, isAdmin, deleteAppointment);

module.exports = router;