const express = require("express");
const router = express.Router();

const {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Create Contact
router.post("/", addContact);

// Get All Contacts
router.get("/", getContacts);

// Update Contact
router.put("/:id", updateContact);

// Delete Contact
router.delete("/:id", deleteContact);

module.exports = router;