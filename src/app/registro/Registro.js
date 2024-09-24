"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Registro.module.css";
import Link from "next/link";
import { useAuth } from "../AuthContext";
import Alert from "./Alert";

export default function Registro() {
  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          surname: formData.surname,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setSuccess("Registro exitoso.");
        setFormData({
          username: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setError("");
        login(true);
        setTimeout(() => {
          router.push("/perfilPrivado/listadoParques");
        }, 2000);
      } else {
        setError("Error en el registro. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError(
        "Error al conectar con el servidor. Por favor, inténtalo de nuevo."
      );
    }
  };

  const closeAlert = () => {
    setError("");
    setSuccess("");
  };

  return (
    <div className={style.body}>
      <form onSubmit={handleSubmit} className={style.registerForm}>
        <h2>Registro</h2>
        {error && <p className={style.error}>{error}</p>}
        {success && <p className={style.success}>{success}</p>}
        <div className={style.formGroup}>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="username">Nombre:</label>
        </div>
        <div className={style.formGroup}>
          <input
            type="text"
            id="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="surname">Apellido:</label>
        </div>
        <div className={style.formGroup}>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="email">Email:</label>
        </div>
        <div className={style.formGroup}>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="password">Password:</label>
        </div>
        <div className={style.formGroup}>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="confirmPassword">Confirmar Password:</label>
        </div>
        <button type="submit" className={style.registerButton}>
          Registro
        </button>
        <Link href="/iniciarSesion">
          <p className={style.loginLink}>
            ¿Ya tienes una cuenta? Inicia sesión
          </p>
        </Link>
      </form>
      {error && <Alert message={error} onClose={closeAlert} />}
      {success && <Alert message={success} onClose={closeAlert} />}
    </div>
  );
}
