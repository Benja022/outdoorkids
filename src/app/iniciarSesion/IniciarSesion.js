/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable quotes */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./IniciarSesion.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../AuthContext";

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
    login(true)
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
        setTimeout(() => {
          router.push("/perfilPrivado"); // Redirigir a la página de perfil privado
        }, 2000);
      } else {
        setError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError(
        "Error al conectar con el servidor. Por favor, inténtalo de nuevo."
      );
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit} className={style.loginForm}>
          <h2>Iniciar Sesión</h2>
          {error && <p className={style.error}>{error}</p>}
          {success && <p className={style.success}>{success}</p>}
          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className={style.togglePasswordButton}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <button type="submit" className={style.loginButton}>
            Iniciar Sesión
          </button>
        </form>
        <Link href="/registro" className={style.registerLink}>
          ¿No tienes una cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}
