const db = require("../config/db");

const Department = {

  // ===============================
  // Get All Departments
  // ===============================
  getAll(callback) {

    const sql = `
      SELECT *
      FROM departments
      ORDER BY id DESC
    `;

    db.query(sql, callback);

  },

  // ===============================
  // Get Department By ID
  // ===============================
  getById(id, callback) {

    const sql = `
      SELECT *
      FROM departments
      WHERE id=?
    `;

    db.query(sql, [id], callback);

  },

  // ===============================
  // Create Department
  // ===============================
  create(data, callback) {

    const sql = `
      INSERT INTO departments
      (
        department_name,
        description
      )
      VALUES (?,?)
    `;

    db.query(
      sql,
      [
        data.department_name,
        data.description
      ],
      callback
    );

  },

  // ===============================
  // Update Department
  // ===============================
  update(id, data, callback) {

    const sql = `
      UPDATE departments
      SET
        department_name=?,
        description=?
      WHERE id=?
    `;

    db.query(
      sql,
      [
        data.department_name,
        data.description,
        id
      ],
      callback
    );

  },

  // ===============================
  // Delete Department
  // ===============================
  delete(id, callback) {

    const sql = `
      DELETE FROM departments
      WHERE id=?
    `;

    db.query(sql, [id], callback);

  }

};

module.exports = Department;