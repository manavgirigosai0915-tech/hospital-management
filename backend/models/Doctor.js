const db = require("../config/db");

const Doctor = {

  // ==================================
  // Get All Doctors
  // ==================================
  getAll(callback) {

    const sql = `
      SELECT
        doctors.*,
        departments.department_name
      FROM doctors
      LEFT JOIN departments
      ON doctors.department_id = departments.id
      ORDER BY doctors.id DESC
    `;

    db.query(sql, callback);

  },

  // ==================================
  // Get Doctor By ID
  // ==================================
  getById(id, callback) {

    const sql = `
      SELECT
        doctors.*,
        departments.department_name
      FROM doctors
      LEFT JOIN departments
      ON doctors.department_id = departments.id
      WHERE doctors.id = ?
    `;

    db.query(sql, [id], callback);

  },

  // ==================================
  // Create Doctor
  // ==================================
  create(data, callback) {

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
        data.doctor_name,
        data.email,
        data.phone,
        data.department_id,
        data.specialization,
        data.qualification,
        data.experience,
        data.available_time,
        data.status,
        data.image
      ],
      callback
    );

  },

  // ==================================
  // Update Doctor
  // ==================================
  update(id, data, callback) {

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
        data.doctor_name,
        data.email,
        data.phone,
        data.department_id,
        data.specialization,
        data.qualification,
        data.experience,
        data.available_time,
        data.status,
        data.image,
        id
      ],
      callback
    );

  },

  // ==================================
  // Delete Doctor
  // ==================================
  delete(id, callback) {

    const sql = `
      DELETE FROM doctors
      WHERE id=?
    `;

    db.query(sql, [id], callback);

  }

};

module.exports = Doctor;