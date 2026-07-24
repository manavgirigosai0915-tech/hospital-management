const db = require("../config/db");

// =====================================
// Get All Patients
// =====================================
exports.getPatients = (req, res) => {
  const sql = "SELECT * FROM patients ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error Fetching Patients",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      patients: result,
    });
  });
};

// =====================================
// Get Patient By ID
// =====================================
exports.getPatientById = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM patients WHERE id = ?";

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
        message: "Patient Not Found",
      });
    }

    res.status(200).json({
      success: true,
      patient: result[0],
    });
  });
};

// =====================================
// Add Patient
// =====================================
exports.addPatient = (req, res) => {
  const {
    patient_name,
    age,
    gender,
    phone,
    email,
    address,
    disease,
  } = req.body;

  const sql = `
    INSERT INTO patients
    (
      patient_name,
      age,
      gender,
      phone,
      email,
      address,
      disease
    )
    VALUES (?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      patient_name,
      age,
      gender,
      phone,
      email,
      address,
      disease,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Unable To Add Patient",
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Patient Added Successfully",
        patientId: result.insertId,
      });
    }
  );
};

// =====================================
// Update Patient
// =====================================
exports.updatePatient = (req, res) => {
  const { id } = req.params;

  const {
    patient_name,
    age,
    gender,
    phone,
    email,
    address,
    disease,
  } = req.body;

  const sql = `
    UPDATE patients
    SET
      patient_name=?,
      age=?,
      gender=?,
      phone=?,
      email=?,
      address=?,
      disease=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      patient_name,
      age,
      gender,
      phone,
      email,
      address,
      disease,
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
        message: "Patient Updated Successfully",
      });
    }
  );
};

// =====================================
// Delete Patient
// =====================================
exports.deletePatient = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM patients WHERE id=?";

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
      message: "Patient Deleted Successfully",
    });
  });
};