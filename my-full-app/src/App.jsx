// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import KeycloakProvider from "./providers/KeycloakProvider";

function App() {
  return (
    <KeycloakProvider>
      <div>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </KeycloakProvider>
  );
}

export default App;
