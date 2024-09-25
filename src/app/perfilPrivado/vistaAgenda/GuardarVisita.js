'use client'
import React, { useState, useEffect } from "react";
import styles from "./GuardarVisita.module.css";
import { FaTrash, FaEdit } from 'react-icons/fa';

const GuardarVisita = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [parque, setParque] = useState("");
  const [visitas, setVisitas] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Estado para el índice de edición

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

    if (editIndex !== null) {
      // Editar visita existente
      const updatedVisitas = [...visitas];
      updatedVisitas[editIndex] = { fecha: fechaFormateada, hora, parque };
      setVisitas(updatedVisitas);
      setEditIndex(null); // Resetear índice de edición
    } else {
      // Agregar nueva visita
      const nuevaVisita = { fecha: fechaFormateada, hora, parque };
      setVisitas((prevVisitas) => [...prevVisitas, nuevaVisita]);
    }

    // Limpiar campos
    setFecha("");
    setHora("");
    setParque("");
  };

  const handleDelete = (index) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta visita?")) {
      setVisitas((prevVisitas) => prevVisitas.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (index) => {
    const visita = visitas[index];
    setFecha(visita.fecha);
    setHora(visita.hora);
    setParque(visita.parque);
    setEditIndex(index); // Establecer el índice de edición
  };

  return (
    <div className={styles.container}>
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
          {editIndex !== null ? 'Actualizar' : 'Guardar'}
        </button>
      </form>
      <h2 className={styles.h2}>Quedadas guardadas</h2>
      <ul className={styles.listaVisitas}>
        {visitas.map((visita, index) => (
          <li className={styles.visitaItem} key={index}>
            <span>{visita.fecha}</span>
            <span>{visita.hora}</span>
            <span>{visita.parque}</span>
            <div className={styles.buttonContainer}> {/* Contenedor para los botones */}
              <button
                onClick={() => handleDelete(index)}
                className={styles.deleteButton}
                aria-label={`Eliminar visita en ${visita.fecha} a las ${visita.hora}`}
              >
                <FaTrash />
              </button>
              <button
                onClick={() => handleEdit(index)} // Lógica para editar
                className={styles.editButton}
                aria-label={`Editar visita en ${visita.fecha} a las ${visita.hora}`}
              >
                <FaEdit />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuardarVisita;
