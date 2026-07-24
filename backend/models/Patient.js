const db = require("../config/db");

const Patient = {

  // ==================================
  // Get All Patients
  // ==================================
  getAll(callback) {

    const sql = `
      SELECT *
      FROM patients
      ORDER BY id DESC
    `;

    db.query(sql, callback);

  },

  // ==================================
  // Get Patient By ID
  // ==================================
  getById(id, callback) {

    const sql = `
      SELECT *
      FROM patients
      WHERE id=?
    `;

    db.query(sql, [id], callback);

  },

  // ==================================
  // Create Patient
  // ==================================
  create(data, callback) {

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
        data.patient_name,
        data.age,
        data.gender,
        data.phone,
        data.email,
        data.address,
        data.disease
      ],
      callback
    );

  },

  // ==================================
  // Update Patient
  // ==================================
  update(id, data, callback) {

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
        data.patient_name,
        data.age,
        data.gender,
        data.phone,
        data.email,
        data.address,
        data.disease,
        id
      ],
      callback
    );

  },

  // ==================================
  // Delete Patient
  // ==================================
  delete(id, callback) {

    const sql = `
      DELETE FROM patients
      WHERE id=?
    `;

    db.query(sql, [id], callback);

  }

};

module.exports = Patient;