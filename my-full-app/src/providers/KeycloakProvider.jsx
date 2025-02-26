// KeycloakProvider.jsx
import React, { useEffect, useState } from "react";
import keycloak from "../keycloak";

// Variable globale pour éviter une double initialisation
let keycloakInitPromise = null;

export default function KeycloakProvider({ children }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!keycloakInitPromise) {
      keycloakInitPromise = keycloak.init({
        onLoad: "login-required",
        checkLoginIframe: false, // Désactive la vérification via iframe pour éviter des problèmes de cookies tiers
      });
    }
    keycloakInitPromise
      .then((authenticated) => {
        setInitialized(true);
        if (!authenticated) {
          keycloak.login();
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'initialisation de Keycloak", error);
      });
  }, []);

  if (!initialized) {
    return <div>Chargement en cours...</div>;
  }
  return <>{children}</>;
}
