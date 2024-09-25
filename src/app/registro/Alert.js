import React, { useEffect } from 'react';
import style from './Alert.module.css';
// import PropTypes from 'prop-types';

const Alert = ({className, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1800); // Cerrar la alerta después de 2 segundos
    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, [onClose]);

  return (
    <div className={`${style.alertOverlay} ${className}`}>
      <div className={style.alertContent}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;