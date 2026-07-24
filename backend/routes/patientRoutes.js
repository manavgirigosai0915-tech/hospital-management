const express = require("express");
const router = express.Router();

const {
  getPatients,
  getPatientById,
  addPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

// ======================================
// Get All Patients
// GET /api/patients
// ======================================
router.get("/", verifyToken, getPatients);

// ======================================
// Get Patient By ID
// GET /api/patients/:id
// ======================================
router.get("/:id", verifyToken, getPatientById);

// ======================================
// Add Patient
// POST /api/patients
// ======================================
router.post("/", verifyToken, addPatient);

// ======================================
// Update Patient
// PUT /api/patients/:id
// ======================================
router.put("/:id", verifyToken, updatePatient);

// ======================================
// Delete Patient (Admin Only)
// DELETE /api/patients/:id
// ======================================
router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  deletePatient
);

module.exports = router;