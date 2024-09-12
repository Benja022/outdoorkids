import React from "react";
import style from "./modalModificarFamilia.module.css";

const ModificarFamilia = ({
  isOpen,
  onClose,
  newMember,
  handleNewMemberChange,
  handleAddMember,
}) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <span className={style.close} onClick={onClose}>
          &times;
        </span>
        <h1 className={style.headerH1}>Modificar familia</h1>
        <p>Agrega un miembro.</p>
        <div className={style.addingMember}>
          <div className={style.selectRole}>
            <label htmlFor="role">Selecciona un rol:</label>
            <select
              name="role"
              value={newMember.role}
              onChange={handleNewMemberChange}
            >
              <option value="Tutor">Tutor</option>
              <option value="Tutora">Tutora</option>
              <option value="Niño">Niño</option>
              <option value="Niña">Niña</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={newMember.name}
              onChange={handleNewMemberChange}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="edad"
              value={newMember.edad}
              onChange={handleNewMemberChange}
              placeholder="Edad"
            />
            <button onClick={handleAddMember} className="addMemberBtn">
              Añadir miembro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModificarFamilia;
