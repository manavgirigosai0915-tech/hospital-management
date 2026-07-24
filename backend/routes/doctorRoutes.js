const express = require("express");
const router = express.Router();

const {
  getDoctors,
  getDoctorById,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

// ======================================
// Get All Doctors
// GET /api/doctors
// ======================================
router.get("/", verifyToken, getDoctors);

// ======================================
// Get Doctor By ID
// GET /api/doctors/:id
// ======================================
router.get("/:id", verifyToken, getDoctorById);

// ======================================
// Add Doctor
// POST /api/doctors
// Admin Only
// Upload Doctor Image
// ======================================
router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("image"),
  addDoctor
);

// ======================================
// Update Doctor
// PUT /api/doctors/:id
// Admin Only
// Upload Doctor Image
// ======================================
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  upload.single("image"),
  updateDoctor
);

// ======================================
// Delete Doctor
// DELETE /api/doctors/:id
// Admin Only
// ======================================
router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  deleteDoctor
);

module.exports = router;