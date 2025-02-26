// keycloak.js
import Keycloak from "keycloak-js";

// Remarque : si vous utilisez Keycloak avec Quarkus (v17+), l'URL ne contient plus "/auth".
// Adaptez l'URL selon votre configuration.
const keycloak = new Keycloak({
  url: "http://localhost:8080", // ou "http://localhost:8080/auth" si nécessaire
  realm: "myrealm",
  clientId: "my-react-app",
});

export default keycloak;
