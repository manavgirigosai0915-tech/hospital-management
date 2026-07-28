const db = require("../config/db");

// Create Contact
const createContact = (contactData, callback) => {
  const sql = `
    INSERT INTO contacts (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      contactData.name,
      contactData.email,
      contactData.subject,
      contactData.message,
    ],
    callback
  );
};

// Get All Contacts
const getAllContacts = (callback) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, callback);
};

// Update Contact
const updateContact = (id, contactData, callback) => {
  const sql = `
    UPDATE contacts
    SET
      name = ?,
      email = ?,
      subject = ?,
      message = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      contactData.name,
      contactData.email,
      contactData.subject,
      contactData.message,
      id,
    ],
    callback
  );
};

// Delete Contact
const deleteContact = (id, callback) => {
  const sql = "DELETE FROM contacts WHERE id = ?";

  db.query(sql, [id], callback);
};

module.exports = {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
};