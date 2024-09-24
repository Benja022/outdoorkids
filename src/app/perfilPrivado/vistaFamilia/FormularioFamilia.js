"use client";
import React, { useState } from "react";
import style from "./formularioFamilia.module.css";
import classNames from "classnames";
import Image from "next/image";
import ModificarFamilia from "./ModalModificarFamilia";
import Link from "next/link";

const FormularioFamilia = () => {
  const [nickname, setNickname] = useState("");
  const [members, setMembers] = useState([{ role: "Tutor", name: "Benjamín", edad: "30" }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ role: "", name: "", edad: "" });
  const [familyPhoto, setFamilyPhoto] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false); // Nuevo estado

  const openModal = () => {
    setShowRegistration(true); // Mostrar registro al abrir el modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setShowRegistration(false); // Ocultar registro al cerrar el modal
    setIsModalOpen(false);
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
      alert("Por favor, completa todos los campos antes de agregar un nuevo miembro.");
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
        <h1 className={style.title}>Mi Familia</h1>
        <div className={style.familyNicknameContainer}>
          <Link href="/perfilPrivado" passHref>
            <span className={style.backButton}>&#8592;</span>
          </Link>
          <div className={style.familyPhoto}>
            <Image
              className={style.familyPhotoInput}
              src={familyPhoto || "/images/estrella.png"}
              alt="Imagen de la familia"
              width={200}
              height={200}
            />
          </div>
        </div>
        <h2 className={style.nicknameTitle}>Alias:</h2>
        <p className={style.nickname}>{nickname}</p>
      </div>

      <h2 className={style.membersTitle}>Miembros:</h2>
      <div className={style.members}>
        {members.map((member, index) => (
          <div key={index} className={style.member}>
            <div className={style.memberInfo}>
              <p>{member.role}</p>
              <p>{member.name}</p>
              <p>{member.edad}</p>
            </div>
            <button className={style.deleteButton} onClick={() => handleDeleteMember(index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <button className={style.saveBtn} onClick={openModal}>
        Agregar/Modificar Familia
      </button>

      {showRegistration && ( // Mostrar registro solo si showRegistration es true
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
          <h1 className={style.modalTitle}>Modificar familia</h1>
          <p>Agrega un miembro.</p>
        </ModificarFamilia>
      )}
    </div>
  );
};

export default FormularioFamilia;
