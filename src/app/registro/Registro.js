"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Registro.module.css";
import Image from "next/image";
import Link from "next/link";

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
        router.push('/perfilPrivado');
      } else {
        setError("Error en el registro. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError(
        "Error al conectar con el servidor. Por favor, inténtalo de nuevo."
      );
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
        <form onSubmit={handleSubmit} className={style.registerForm}>
          <h2>Registro</h2>
          {error && <p className={style.error}>{error}</p>}
          {success && <p className={style.success}>{success}</p>}
          <div className={style.formGroup}>
            <label htmlFor="username">Nombre:</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="surname">Apellido:</label>
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className={style.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={style.registerButton}>
            Registrar
          </button>
        </form>
        <Link href="/iniciarSesion">
          <p className={style.loginLink}>
            ¿Ya tienes una cuenta? Inicia sesión
          </p>
        </Link>
        <div className={style.cardImage}>
          <Image
            src="/images/imagenAbajoDeReistro.png"
            alt="Imagen de abajo del registro"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
