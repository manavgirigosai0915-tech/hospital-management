const db = require("../config/db");

const Appointment = {

  // ===============================
  // Get All Appointments
  // ===============================
  getAll(callback) {
    const sql = `
      SELECT appointments.*, doctors.doctor_name
      FROM appointments
      LEFT JOIN doctors
      ON appointments.doctor_id = doctors.id
      ORDER BY appointments.id DESC
    `;

    db.query(sql, callback);
  },

  // ===============================
  // Get Appointment By ID
  // ===============================
  getById(id, callback) {
    const sql = "SELECT * FROM appointments WHERE id=?";

    db.query(sql, [id], callback);
  },

  // ===============================
  // Create Appointment
  // ===============================
  create(data, callback) {

    const sql = `
      INSERT INTO appointments
      (
        patient_name,
        doctor_id,
        appointment_date,
        appointment_time,
        status
      )
      VALUES (?,?,?,?,?)
    `;

    db.query(sql, [

      data.patient_name,
      data.doctor_id,
      data.appointment_date,
      data.appointment_time,
      data.status

    ], callback);

  },

  // ===============================
  // Update Appointment
  // ===============================
  update(id, data, callback) {

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

    db.query(sql, [

      data.patient_name,
      data.doctor_id,
      data.appointment_date,
      data.appointment_time,
      data.status,
      id

    ], callback);

  },

  // ===============================
  // Delete Appointment
  // ===============================
  delete(id, callback) {

    const sql = "DELETE FROM appointments WHERE id=?";

    db.query(sql, [id], callback);

  }

};

module.exports = Appointment;