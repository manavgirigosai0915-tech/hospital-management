import React from "react";
import { Navigate } from "react-router-dom";
import {
  isLoggedIn,
  getLoggedInUser,
} from "../utils/localStorage";

function ProtectedRoute({ children }) {

  // Check Login
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // Get Current User
  const user = getLoggedInUser();

  // Check Admin Role
  if (!user || user.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default ProtectedRoute;