// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import keycloak from "./keycloak";

function ProtectedRoute({ children }) {
  if (!keycloak.authenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
