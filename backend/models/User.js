const db = require("../config/db");

const User = {

  // ==================================
  // Get All Users
  // ==================================
  getAll(callback) {

    const sql = `
      SELECT
        id,
        name,
        email,
        phone,
        role,
        created_at
      FROM users
      ORDER BY id DESC
    `;

    db.query(sql, callback);

  },

  // ==================================
  // Get User By ID
  // ==================================
  getById(id, callback) {

    const sql = `
      SELECT
        id,
        name,
        email,
        phone,
        role,
        created_at
      FROM users
      WHERE id = ?
    `;

    db.query(sql, [id], callback);

  },

  // ==================================
  // Get User By Email
  // ==================================
  getByEmail(email, callback) {

    const sql = `
      SELECT *
      FROM users
      WHERE email = ?
    `;

    db.query(sql, [email], callback);

  },

  // ==================================
  // Create User
  // ==================================
  create(data, callback) {

    const sql = `
      INSERT INTO users
      (
        name,
        email,
        password,
        phone,
        role
      )
      VALUES (?,?,?,?,?)
    `;

    db.query(
      sql,
      [
        data.name,
        data.email,
        data.password,
        data.phone,
        data.role || "user"
      ],
      callback
    );

  },

  // ==================================
  // Update User
  // ==================================
  update(id, data, callback) {

    const sql = `
      UPDATE users
      SET
        name=?,
        email=?,
        phone=?,
        role=?
      WHERE id=?
    `;

    db.query(
      sql,
      [
        data.name,
        data.email,
        data.phone,
        data.role,
        id
      ],
      callback
    );

  },

  // ==================================
  // Update Password
  // ==================================
  updatePassword(id, password, callback) {

    const sql = `
      UPDATE users
      SET password=?
      WHERE id=?
    `;

    db.query(sql, [password, id], callback);

  },

  // ==================================
  // Delete User
  // ==================================
  delete(id, callback) {

    const sql = `
      DELETE FROM users
      WHERE id=?
    `;

    db.query(sql, [id], callback);

  }

};

module.exports = User;