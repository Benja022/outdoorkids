/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable quotes */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./IniciarSesion.module.css";
import Link from "next/link";
import { useAuth } from "../AuthContext";
import { ROUTE_AFTER_LOGIN } from "../consts";

export default function IniciarSesion() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      
      if (response.ok) {
        setSuccess(
          "Inicio de sesión exitoso. Redirigiendo a perfil privado..."
        ); // Actualizar estado success
        login(true)
        setTimeout(() => {
          router.push("/perfilPrivado/listadoParques"); // Redirigir a la página de perfil privado
        }, 2000);
      } else {
        setError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError(
        "Error al conectar con el servidor. Por favor, inténtalo de nuevo."
      );
      //console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <h2 className={style.legend}>Iniciar Sesión</h2>
        {error && <p className={style.error}>{error}</p>}
        {success && <p className={style.success}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="email" className={style.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className={style.input}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password" className={style.label}>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
              className={style.input}
            />
          </div>
          <button type="submit" className={style.btn}>Login</button>
        </form>
        <Link href="/registro" className={style.link}>
          ¿No tienes una cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}
