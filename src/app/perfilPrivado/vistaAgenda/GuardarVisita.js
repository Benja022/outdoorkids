/* eslint-disable quotes */
/* eslint-disable semi */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./GuardarVisita.module.css";

const GuardarVisita = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [parque, setParque] = useState("");
  const [visitas, setVisitas] = useState([]);
  const [parques, setParques] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convertir la fecha al formato dd/MM/yyyy
    const fechaObj = new Date(fecha);
    const fechaFormateada = fechaObj.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const nuevaVisita = { fecha: fechaFormateada, hora, parque };
    setVisitas((prevVisitas) => [...prevVisitas, nuevaVisita]);
    // Limpiar el formulario después de enviar
    setFecha("");
    setHora("");
    setParque("");
  };

  const handleDelete = (index) => {
    setVisitas((prevVisitas) => prevVisitas.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchParques = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/parques");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setParques(data);
      } catch (error) {
        console.error("Error al obtener los parques:", error);
      }
    };

    fetchParques();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Guardar Visita</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="fecha">
            Fecha:
          </label>
          <input
            className={styles.input}
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="hora">
            Hora:
          </label>
          <input
            className={styles.input}
            type="time"
            id="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="parque">
            Parque:
          </label>
          <select
            className={styles.input}
            id="parque"
            value={parque}
            onChange={(e) => setParque(e.target.value)}
            required
          >
            <option value="">Seleccione un parque</option>
            {parques.map((parque) => (
              <option key={parque.id} value={parque.name}>
                {parque.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>
          Guardar
        </button>
      </form>
      <h2 className={styles.h2}>Visitas Guardadas</h2>
      <ul className={styles.listaVisitas}>
        {visitas.map((visita, index) => (
          <li className={styles.visitaItem} key={index}>
            <span>{visita.fecha}</span>
            <span>{visita.hora}</span>
            <span>{visita.parque}</span>
            <button
              onClick={() => handleDelete(index)}
              className={styles.deleteButton}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuardarVisita;
