import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/", // URL de votre Keycloak
  realm: "myrealm",
  clientId: "my-react-app",
});

export default keycloak;
