const express = require("express");
const router = express.Router();

const {
  addContact,
  getContacts,
  updateContact,
} = require("../controllers/contactController");

// Save Contact Message
router.post("/", addContact);

// Get All Contact Messages
router.get("/", getContacts);

// Update Contact
router.put("/:id", updateContact);

module.exports = router;