import React from 'react';
import styles from './TerminosServicio.module.css';

const TerminosServicio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Términos de Servicio</h1>
      <p className={styles.paragraph}>
        Bienvenido a nuestros términos de servicio. Estos términos describen las reglas y regulaciones para el uso de nuestro sitio web.
      </p>
      <h2 className={styles.subheader}>Aceptación de los términos</h2>
      <p className={styles.paragraph}>
        Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web si no aceptas todos los términos y condiciones establecidos en esta página.
      </p>
      <h2 className={styles.subheader}>Licencia</h2>
      <p className={styles.paragraph}>
        A menos que se indique lo contrario, nosotros y/o nuestros licenciantes poseemos los derechos de propiedad intelectual de todo el material en el sitio web. Todos los derechos de propiedad intelectual están reservados.
      </p>
      <h2 className={styles.subheader}>Uso aceptable</h2>
      <p className={styles.paragraph}>
        No debes usar este sitio web de ninguna manera que cause, o pueda causar, daño al sitio web o deterioro de la disponibilidad o accesibilidad del sitio web.
      </p>
      <h2 className={styles.subheader}>Modificaciones</h2>
      <p className={styles.paragraph}>
        Nos reservamos el derecho de revisar estos términos y condiciones en cualquier momento. Al usar este sitio web, se espera que revises estos términos regularmente para asegurarte de entender todos los términos y condiciones que rigen el uso de este sitio web.
      </p>
      <h2 className={styles.subheader}>Contacto</h2>
      <p className={styles.paragraph}>
        Si tienes alguna pregunta sobre estos términos de servicio, por favor contáctanos a través de nuestro sitio web.
      </p>
    </div>
  );
};

export default TerminosServicio;