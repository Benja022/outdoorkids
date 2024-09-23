"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./IniciarSesion.module.css";
import Image from "next/image";
import Link from "next/link";

export default function IniciarSesion() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <Image
          className={style.logo}
          src="/images/Logo.jpg"
          alt="logo"
          width={120}
          height={120}
        />
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
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={style.loginButton}>
            Login
          </button>
        </form>
        <Link href="/registro" className={style.registerLink}>
          ¿No tienes una cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}
