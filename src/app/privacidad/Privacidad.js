import React from "react";
import styles from "./Privacidad.module.css";

const PoliticaPrivacidad = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Política de Privacidad</h1>
      <p className={styles.paragraph}>
        Bienvenido a nuestra política de privacidad. Su privacidad es de suma
        importancia para nosotros.
      </p>
      <h2 className={styles.subheader}>Información que recopilamos</h2>
      <p className={styles.paragraph}>
        Recopilamos varios tipos de información en relación con los servicios
        que proporcionamos, incluyendo:
      </p>
      <ul className={styles.list}>
        <li>Información personal que usted nos proporciona directamente.</li>
        <li>
          Información recopilada automáticamente cuando utiliza nuestros
          servicios.
        </li>
        <li>Información de terceros.</li>
      </ul>
      <h2 className={styles.subheader}>Uso de la información</h2>
      <p className={styles.paragraph}>
        Utilizamos la información recopilada para los siguientes propósitos:
      </p>
      <ul className={styles.list}>
        <li>Proveer y mejorar nuestros servicios.</li>
        <li>Personalizar su experiencia.</li>
        <li>Comunicarnos con usted.</li>
      </ul>
      <h2 className={styles.subheader}>Compartir información</h2>
      <p className={styles.paragraph}>
        No compartimos su información personal con terceros, excepto en las
        siguientes circunstancias:
      </p>
      <ul className={styles.list}>
        <li>Con su consentimiento.</li>
        <li>Para cumplir con obligaciones legales.</li>
        <li>Para proteger nuestros derechos y propiedad.</li>
      </ul>
      <h2 className={styles.subheader}>Seguridad</h2>
      <p className={styles.paragraph}>
        Implementamos medidas de seguridad para proteger su información
        personal.
      </p>
      <h2 className={styles.subheader}>Cambios a esta política</h2>
      <p className={styles.paragraph}>
        Podemos actualizar esta política de privacidad de vez en cuando. Le
        notificaremos sobre cualquier cambio publicando la nueva política en
        nuestro sitio web.
      </p>
      <h2 className={styles.subheader}>Contacto</h2>
      <p className={styles.paragraph}>
        Si tiene alguna pregunta sobre esta política de privacidad, por favor
        contáctenos a través de nuestro sitio web.
      </p>
    </div>
  );
};

export default PoliticaPrivacidad;
