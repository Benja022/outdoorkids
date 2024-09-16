'use client';
import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo guardar una visita?",
      answer: "Para guardar una visita, completa el formulario con la fecha, hora y parque, y haz clic en 'Guardar'."
    },
    {
      question: "¿Cómo puedo eliminar una visita guardada?",
      answer: "Para eliminar una visita guardada, haz clic en el botón de eliminación junto a la visita que deseas eliminar."
    },
    {
      question: "¿Puedo editar una visita guardada?",
      answer: "Actualmente, no se puede editar una visita guardada. Debes eliminar la visita y crear una nueva con la información actualizada."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
      <ul className={styles.faqList}>
        {faqs.map((faq, index) => (
          <li key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {activeIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;