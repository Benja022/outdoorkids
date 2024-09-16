/* eslint-disable multiline-ternary */
/* eslint-disable jsx-quotes */
"use client";
import React, { useState } from "react";
import style from "./formularioFamilia.module.css";
import classNames from "classnames";
import Image from "next/image";
import ModificarFamilia from "./ModalModificarFamilia";

const FormularioFamilia = () => {
  const [nickname, setNickname] = useState("");
  const [members, setMembers] = useState([
    { role: "Tutor", name: "Benjamín", edad: "30" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ role: "", name: "", edad: "" });
  const [familyPhoto, setFamilyPhoto] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const handleAddMemberAndClose = () => {
    handleAddMember();
    closeModal();
  };

  const handleDeleteMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFamilyPhoto(reader.result);
      };
      reader.readAsDataURL(file);
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
          </div>
        </div>
        <h1 className={classNames(style.headerH1, style.header)}>Alias:</h1>
        <p className={classNames(style.headerH1, style.header)}>{nickname}</p>
      </div>

      <h1 className={classNames(style.headerH1, style.header)}>Miembros:</h1>
      <div id="members" className={style.members}>
        <div className={style.memberTitle}>
          <p>ROL</p>
          <p>NOMBRE</p>
          <p>EDAD</p>
        </div>
        {members.map((member, index) => (
          <div key={index} className={style.member}>
            <p>{member.role}</p>
            <p>{member.name}</p>
            <p>{member.edad}</p>
          </div>
        ))}
      </div>

      <button
        className={classNames(style.fileInputLabel, style.saveBtn)}
        onClick={openModal}
      >
        Agregar/Modificar Familia
      </button>

      <ModificarFamilia
        isOpen={isModalOpen}
        onClose={closeModal}
        newMember={newMember}
        handleNewMemberChange={handleNewMemberChange}
        handleAddMember={handleAddMember}
        familyPhoto={familyPhoto}
        handlePhotoChange={handlePhotoChange}
        nickname={nickname}
        handleNickname={handleNickname}
        members={members}
        handleDeleteMember={handleDeleteMember}
        handleAddMemberAndClose={handleAddMemberAndClose}
      >
        <h1 className={style.headerH1}>Modificar familia</h1>
        <p>Agrega un miembro.</p>
      </ModificarFamilia>
    </div>
  );
};

export default FormularioFamilia;
