// components/Modal.js
import React from 'react';
import styles from './formularioFamilia.module.css'; // Asegúrate de crear este archivo CSS

const ModalModificarFamilia = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
            </div>
        </div>
    );
};

export default ModalModificarFamilia;
