"use client";
import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
import style from "./formularioFamilia.module.css";
import classNames from "classnames";
import Image from "next/image";
import ModificarFamilia from "./ModalModificarFamilia";



const FormularioFamilia = () => {
    const [nickname, setNickname] = useState("Mangor");
    const [members, setMembers] = useState([{ role: "Tutor", name: "Benjamín" }]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  // const navigate = useNavigate();

  const handleInputChange = (index, e) => {
    const newMembers = [...members];
    newMembers[index][e.target.name] = e.target.value;
    setMembers(newMembers);
  };

  const handleAddMember = () => {
    setMembers([...members, { role: "", name: "" }]);
  };

  const handleNickname = () => {
    setNickname(nickname);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     navigate("/summary", { state: { nickname, members } });
  //   };

  return (
    <div className={style.familyForm}>
      <div className={style.header}>
        <h1 className={style.headerH1}>Mi familia</h1>
        <div className={style.familyNicknameContainer}>
          <div className={style.familyPhoto}>
            <Image
              className={style.img}
              src="/images/estrella.png"
              alt="Imagen de la familia"
              width={200}
              height={200}
              layout="responsive"
            />

            <input
              type="file"
              id="familyPhotoInput"
              accept="image/*"
              aria-label="Subir foto de la familia"
            />
            <div id="familyPhoto" className={style.profileIcon}></div>
          </div>
        </div>
        <h1 className={classNames(style.headerH1, style.header)}>Alias:</h1>
        <p>{nickname}</p>
        <input
          className={classNames(style.headerH1, style.header)}
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Apodo de la familia"
          aria-label="Apodo de la familia"
        />
        <button
          type="submit"
          //   value={nickname}
          onClick={handleNickname}
        >
          Establecer
        </button>
      </div>

      <div className={style.addingMember}>
        <div className={style.selectRole}>
          <label htmlFor="role">Selecciona un rol:</label>
          <select
            name="role"
            value=""
            onChange={(e) => handleInputChange(index, e)}
          >
            <option value="Tutor">Tutor</option>
            <option value="Peque">Peque</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value=""
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Nombre"
          />
          <button onClick={handleAddMember} className="addMemberBtn">
            Añadir miembro
          </button>
        </div>
      </div>

      <h1 className={classNames(style.headerH1, style.header)}>Miembros:</h1>
      <div id="members" className={style.members}>
        {members.map((member, index) => (
          <div key={index} className={style.member}>
            <p>{member.role}</p>
            <p>{member.name}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={openModal}>Agregar/Modificar Familia</button>

        <ModificarFamilia isOpen={isModalOpen} onClose={closeModal}>
          <h2>Este es un Modal</h2>
          <p>Contenido del modal.</p>
          <button onClick={closeModal}>Guardar</button>
        </ModificarFamilia>
      </div>
    </div>
  );
};

export default FormularioFamilia;
