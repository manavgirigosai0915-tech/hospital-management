const db = require("../config/db");

// ==============================
// Get All Departments
// ==============================
exports.getDepartments = (req, res) => {
  const sql = "SELECT * FROM departments ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error fetching departments",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      departments: result,
    });
  });
};

// ==============================
// Get Department By ID
// ==============================
exports.getDepartmentById = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM departments WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
        error: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Department Not Found",
      });
    }

    res.status(200).json({
      success: true,
      department: result[0],
    });
  });
};

// ==============================
// Add Department
// ==============================
exports.addDepartment = (req, res) => {
  const { department_name, description } = req.body;

  if (!department_name) {
    return res.status(400).json({
      success: false,
      message: "Department Name is required",
    });
  }

  const sql =
    "INSERT INTO departments (department_name, description) VALUES (?, ?)";

  db.query(sql, [department_name, description], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Unable to add department",
        error: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Department Added Successfully",
      departmentId: result.insertId,
    });
  });
};

// ==============================
// Update Department
// ==============================
exports.updateDepartment = (req, res) => {
  const { id } = req.params;
  const { department_name, description } = req.body;

  const sql =
    "UPDATE departments SET department_name = ?, description = ? WHERE id = ?";

  db.query(sql, [department_name, description, id], (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Update Failed",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Department Updated Successfully",
    });
  });
};

// ==============================
// Delete Department
// ==============================
exports.deleteDepartment = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM departments WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Delete Failed",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Department Deleted Successfully",
    });
  });
};