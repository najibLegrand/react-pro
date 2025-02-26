// src/components/LoginForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // faire une requête API, déclencher un dispatch Redux, etc.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Utilisateur</label>
        <input
          {...register("username", { required: "Le nom d'utilisateur est requis" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Mot de passe</label>
        <input
          type="password"
          {...register("password", { required: "Mot de passe requis" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      
      <Button variant="contained" color="primary" type="submit" >
        Se connecter

      </Button>
    </form>
  );
}

export default LoginForm;
