'use client'
import React, { useState, useEffect } from "react";
import styles from "./GuardarVisita.module.css";

const GuardarVisita = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [parque, setParque] = useState("");
  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    const savedVisitas = JSON.parse(localStorage.getItem("visitas"));
    if (savedVisitas) {
      setVisitas(savedVisitas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visitas", JSON.stringify(visitas));
  }, [visitas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fecha || !hora || !parque) {
      alert("Por favor, completa todos los campos antes de guardar.");
      return;
    }

    const fechaObj = new Date(fecha);
    const fechaFormateada = fechaObj.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const nuevaVisita = { fecha: fechaFormateada, hora, parque };
    setVisitas((prevVisitas) => [...prevVisitas, nuevaVisita]);

    setFecha("");
    setHora("");
    setParque("");
  };

  const handleDelete = (index) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta visita?")) {
      setVisitas((prevVisitas) => prevVisitas.filter((_, i) => i !== index));
    }
  };

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
          <input
            className={styles.input}
            type="text"
            id="parque"
            value={parque}
            onChange={(e) => setParque(e.target.value)}
            required
          />
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
              aria-label={`Eliminar visita en ${visita.fecha} a las ${visita.hora}`}
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
