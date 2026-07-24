const db = require("../config/db");

// =====================================
// Get All Doctors
// =====================================
exports.getDoctors = (req, res) => {
  const sql = `
    SELECT d.*, dep.department_name
    FROM doctors d
    LEFT JOIN departments dep
    ON d.department_id = dep.id
    ORDER BY d.id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error Fetching Doctors",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      doctors: result,
    });
  });
};

// =====================================
// Get Doctor By ID
// =====================================
exports.getDoctorById = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT d.*, dep.department_name
    FROM doctors d
    LEFT JOIN departments dep
    ON d.department_id = dep.id
    WHERE d.id = ?
  `;

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
        message: "Doctor Not Found",
      });
    }

    res.status(200).json({
      success: true,
      doctor: result[0],
    });
  });
};

// =====================================
// Add Doctor
// =====================================
exports.addDoctor = (req, res) => {
  const {
    doctor_name,
    email,
    phone,
    department_id,
    specialization,
    qualification,
    experience,
    available_time,
    status,
    image,
  } = req.body;

  const sql = `
    INSERT INTO doctors
    (
      doctor_name,
      email,
      phone,
      department_id,
      specialization,
      qualification,
      experience,
      available_time,
      status,
      image
    )
    VALUES (?,?,?,?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      doctor_name,
      email,
      phone,
      department_id,
      specialization,
      qualification,
      experience,
      available_time,
      status || "Available",
      image,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Unable To Add Doctor",
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Doctor Added Successfully",
        doctorId: result.insertId,
      });
    }
  );
};

// =====================================
// Update Doctor
// =====================================
exports.updateDoctor = (req, res) => {
  const { id } = req.params;

  const {
    doctor_name,
    email,
    phone,
    department_id,
    specialization,
    qualification,
    experience,
    available_time,
    status,
    image,
  } = req.body;

  const sql = `
    UPDATE doctors
    SET
      doctor_name=?,
      email=?,
      phone=?,
      department_id=?,
      specialization=?,
      qualification=?,
      experience=?,
      available_time=?,
      status=?,
      image=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      doctor_name,
      email,
      phone,
      department_id,
      specialization,
      qualification,
      experience,
      available_time,
      status,
      image,
      id,
    ],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Update Failed",
          error: err.message,
        });
      }

      res.status(200).json({
        success: true,
        message: "Doctor Updated Successfully",
      });
    }
  );
};

// =====================================
// Delete Doctor
// =====================================
exports.deleteDoctor = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM doctors WHERE id=?";

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
      message: "Doctor Deleted Successfully",
    });
  });
};