"use client";
import React, { useState } from "react";
import style from "./formularioFamilia.module.css";
import classNames from "classnames";
import Image from "next/image";
import ModificarFamilia from "./ModalModificarFamilia";

const FormularioFamilia = () => {
  const [nickname, setNickname] = useState("Mangor");
  const [members, setMembers] = useState([
    { role: "Tutor", name: "Benjamín", edad: "30" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ role: "", name: "", edad: "" });
  const [familyPhoto, setFamilyPhoto] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newMembers = [...members];
    newMembers[index][name] = value;
    setMembers(newMembers);
  };

  const handleNewMemberChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = () => {
    if (newMember.role && newMember.name && newMember.edad) {
      setMembers([...members, newMember]);
      setNewMember({ role: "", name: "", edad: "" });
    } else {
      alert(
        "Por favor, completa todos los campos antes de agregar un nuevo miembro."
      );
    }
  };

  const handleDeleteMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleNickname = () => {
    setNickname(nickname);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFamilyPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className={style.familyForm}>
      <div className={style.header}>
        <h1 className={style.headerH1}>Mi familia</h1>
        <div className={style.familyNicknameContainer}>
          <div className={style.familyPhoto}>
            {familyPhoto ? (
              <Image
                className={style.familyPhotoInput}
                src={familyPhoto}
                alt="Imagen de la familia"
                width={200}
                height={200}
                layout="responsive"
              />
            ) : (
              <Image
                className={style.familyPhotoInput}
                src="/images/estrella.png"
                alt="Imagen de la familia"
                width={200}
                height={200}
                layout="responsive"
              />
            )}
            <input
              className={style.familyPhotoInput}
              type="file"
              id="familyPhotoInput"
              accept="image/*"
              aria-label="Subir foto de la familia"
              onChange={handlePhotoChange}
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
        <button type="submit" onClick={handleNickname}>
          Establecer
        </button>
      </div>

      <h1 className={classNames(style.headerH1, style.header)}>Miembros:</h1>
      <div id="members" className={style.members}>
        {members.map((member, index) => (
          <div key={index} className={style.member}>
            <p>{member.role}</p>
            <p>{member.name}</p>
            <p>{member.edad}</p>
            <button onClick={() => handleDeleteMember(index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div>
        <button onClick={openModal}>Agregar/Modificar Familia</button>

        <ModificarFamilia
          isOpen={isModalOpen}
          onClose={closeModal}
          newMember={newMember}
          handleNewMemberChange={handleNewMemberChange}
          handleAddMember={handleAddMember}
        >
          <h1 className={style.headerH1}>Modificar familia</h1>
          <p>Agrega un miembro.</p>
        </ModificarFamilia>
      </div>
    </div>
  );
};

export default FormularioFamilia;
