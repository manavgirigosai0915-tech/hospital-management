import React from "react";
import Sidebar from "./Sidebar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="admin-content">
        {children}
      </div>

    </div>
  );
}

export default AdminLayout;