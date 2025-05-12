import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

// Admins who can access protected routes
const ADMIN_EMAILS = ["sachin@nextboolean.com", "sachin.jmu7@gmail.com"];

export default function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user || !ADMIN_EMAILS.includes(user.email)) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
