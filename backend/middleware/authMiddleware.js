const jwt = require("jsonwebtoken");

// ==========================================
// Verify JWT Token
// ==========================================
const verifyToken = (req, res, next) => {
  try {
    // Get Token from Header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    // Format: Bearer TOKEN
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access",
      error: error.message,
    });
  }
};

// ==========================================
// Admin Middleware
// ==========================================
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin Access Only",
    });
  }

  next();
};

// ==========================================
// User Middleware
// ==========================================
const isUser = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({
      success: false,
      message: "User Access Only",
    });
  }

  next();
};

module.exports = {
  verifyToken,
  isAdmin,
  isUser,
};