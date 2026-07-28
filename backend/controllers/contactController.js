const Contact = require("../models/Contact");

// Add Contact
const addContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  Contact.createContact(
    { name, email, subject, message },
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.status(201).json({
        success: true,
        message: "Message Sent Successfully",
      });
    }
  );
};

// Get All Contacts
const getContacts = (req, res) => {
  Contact.getAllContacts((err, results) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.status(200).json({
      success: true,
      contacts: results,
    });
  });
};

// Update Contact
const updateContact = (req, res) => {
  const { id } = req.params;
  const { name, email, subject, message } = req.body;

  Contact.updateContact(
    id,
    { name, email, subject, message },
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.json({
        success: true,
        message: "Contact Updated Successfully",
      });
    }
  );
};

// Delete Contact
const deleteContact = (req, res) => {
  const { id } = req.params;

  Contact.deleteContact(id, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      message: "Contact Deleted Successfully",
    });
  });
};

module.exports = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
};