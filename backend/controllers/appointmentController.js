const db = require("../config/db");

// =============================
// Get All Appointments
// =============================
exports.getAppointments = (req, res) => {
  const sql = "SELECT * FROM appointments ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error fetching appointments",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      appointments: result,
    });
  });
};

// =============================
// Get Appointment By ID
// =============================
exports.getAppointmentById = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM appointments WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Appointment Not Found",
      });
    }

    res.status(200).json({
      success: true,
      appointment: result[0],
    });
  });
};

// =============================
// Add Appointment
// =============================
exports.addAppointment = (req, res) => {
  const {
    patient_name,
    doctor_id,
    appointment_date,
    appointment_time,
    status,
  } = req.body;

  const sql = `
    INSERT INTO appointments
    (patient_name, doctor_id, appointment_date, appointment_time, status)
    VALUES (?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      patient_name,
      doctor_id,
      appointment_date,
      appointment_time,
      status || "Pending",
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Unable to add appointment",
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Appointment Added Successfully",
        appointmentId: result.insertId,
      });
    }
  );
};

// =============================
// Update Appointment
// =============================
exports.updateAppointment = (req, res) => {
  const { id } = req.params;

  const {
    patient_name,
    doctor_id,
    appointment_date,
    appointment_time,
    status,
  } = req.body;

  const sql = `
    UPDATE appointments
    SET
      patient_name=?,
      doctor_id=?,
      appointment_date=?,
      appointment_time=?,
      status=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      patient_name,
      doctor_id,
      appointment_date,
      appointment_time,
      status,
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
        message: "Appointment Updated Successfully",
      });
    }
  );
};

// =============================
// Delete Appointment
// =============================
exports.deleteAppointment = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM appointments WHERE id=?";

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
      message: "Appointment Deleted Successfully",
    });
  });
};