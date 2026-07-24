const express = require("express");
const router = express.Router();

const {
  getDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

// ======================================
// Get All Departments
// GET /api/departments
// ======================================
router.get("/", verifyToken, getDepartments);

// ======================================
// Get Department By ID
// GET /api/departments/:id
// ======================================
router.get("/:id", verifyToken, getDepartmentById);

// ======================================
// Add Department
// POST /api/departments
// Admin Only
// ======================================
router.post("/", verifyToken, isAdmin, addDepartment);

// ======================================
// Update Department
// PUT /api/departments/:id
// Admin Only
// ======================================
router.put("/:id", verifyToken, isAdmin, updateDepartment);

// ======================================
// Delete Department
// DELETE /api/departments/:id
// Admin Only
// ======================================
router.delete("/:id", verifyToken, isAdmin, deleteDepartment);

module.exports = router;