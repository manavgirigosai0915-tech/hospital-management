const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

// Register
exports.register = async (req, res) => {
  res.json({
    success: true,
    message: "Register API Working",
  });
};

// Login
exports.login = async (req, res) => {
  res.json({
    success: true,
    message: "Login API Working",
  });
};