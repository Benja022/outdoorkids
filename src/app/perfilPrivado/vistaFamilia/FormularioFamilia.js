"use client";
import React, { useState } from "react";
import style from "./formularioFamilia.module.css";
import Image from "next/image";
import ModificarFamilia from "./ModalModificarFamilia";

const FormularioFamilia = () => {
  const [nickname, setNickname] = useState("");
  const [members, setMembers] = useState([{ role: "Tutor", name: "Benjamín", edad: "30" }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ role: "", name: "", edad: "" });
  const [familyPhoto, setFamilyPhoto] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const openModal = () => {
    setShowRegistration(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setShowRegistration(false);
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

  const handleDeleteMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
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
    <div>
      <h1 className={style.title}>Mi Familia</h1>
      <div className={style.familyPhotoContainer}>
        <Image
          className={style.familyPhotoInput}
          src={familyPhoto || "/images/fotoPerfil.jpg"}
          alt="Imagen de la familia"
          width={200}
          height={200}
        />
      </div>
      <h2 className={style.nicknameTitle}>Alias:</h2>
      <p className={style.nickname}>{nickname}</p>

      <h2 className={style.membersTitle}>Miembros:</h2>
      <table className={style.membersTable}>
        <thead>
          <tr>
            <th>Rol</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.role}</td>
              <td>{member.name}</td>
              <td>{member.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className={style.saveBtn} onClick={openModal}>
        Agregar/Modificar Miembros
      </button>

      {showRegistration && (
        <ModificarFamilia
          isOpen={isModalOpen}
          onClose={closeModal}
          newMember={newMember}
          handleNewMemberChange={handleNewMemberChange}
          handleAddMember={handleAddMember}
          familyPhoto={familyPhoto}
          handlePhotoChange={handlePhotoChange}
          nickname={nickname}
          handleNickname={(e) => setNickname(e.target.value)}
          members={members}
          handleDeleteMember={handleDeleteMember} // Mantén esta función para usar en el modal
        >
          <h1 className={style.modalTitle}>Modificar familia</h1>
          <p>Agrega o elimina un miembro.</p>
        </ModificarFamilia>
      )}
    </div>
  );
};

export default FormularioFamilia;
