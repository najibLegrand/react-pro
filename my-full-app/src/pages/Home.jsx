// src/pages/Home.jsx
// src/pages/Home.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store";
import { Button } from "@mui/material";

function Home() {
  const { name, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Accueil</h2>
      {isLoggedIn ? (
        <>
          <p>Bienvenue, {name} !</p>
          <Button variant="contained" color="primary" onClick={() => dispatch(logout())}>
            Déconnexion
            </Button>
        </>
      ) : (
        <>
          <p>Vous n'êtes pas connecté.</p>
          <Button variant="contained" onClick={() => dispatch(login("User"))}>
            Connexion
          </Button>
        </>
      )}
    </div>
  );
}

export default Home;

