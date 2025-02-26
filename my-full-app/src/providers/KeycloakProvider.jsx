// KeycloakProvider.jsx (optionnel) ou directement dans App.jsx
import React, { useEffect, useState } from "react";
import keycloak from "../keycloak";

export default function KeycloakProvider({ children }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialisation : "login-required" pour forcer la connexion
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setInitialized(true);
      if (!authenticated) {
        keycloak.login();
      }
    });
  }, []);

  if (!initialized) return <div>Chargement en cours...</div>;

  return <>{children}</>;
}
