"use client";
import React, { useState } from "react";
import style from "./formularioFamilia.module.css";
import Image from "next/image";
import { FaEdit, FaTrash } from 'react-icons/fa';
import ModificarFamilia from "./ModalModificarFamilia"; // Asegúrate de que este componente esté correctamente importado.

const FormularioFamilia = () => {
  const [nickname, setNickname] = useState("");
  const [members, setMembers] = useState([{ role: "Tutor", name: "Benjamín", edad: "30" }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ role: "", name: "", edad: "" });
  const [familyPhoto, setFamilyPhoto] = useState(null);
  const [editIndex, setEditIndex] = useState(null); // Estado para el índice de edición

  const openModal = () => {
    setIsModalOpen(true);
    setNewMember({ role: "", name: "", edad: "" }); // Reiniciar los campos del nuevo miembro
    setEditIndex(null); // Asegurarse de que no haya un índice de edición al abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNewMemberChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = () => {
    if (newMember.role && newMember.name && newMember.edad) {
      setMembers([...members, newMember]);
      closeModal(); // Cerrar el modal después de añadir
    } else {
      alert("Por favor, completa todos los campos antes de agregar un nuevo miembro.");
    }
  };

  const handleDeleteMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleEditMember = (index) => {
    if (editIndex === index) {
      // Si ya está en modo de edición, guarda los cambios
      setEditIndex(null);
    } else {
      // Si no está en modo de edición, activa el modo de edición
      setEditIndex(index);
    }
  };

  const handleChangeMemberField = (index, field, value) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setMembers(updatedMembers);
  };

  return (
    <div className="flexiando">
      <div className={style.familyPhotoContainer}>
        <Image
          className={style.familyPhotoInput}
          src={familyPhoto || "/images/fotoPerfil.jpg"}
          alt="Imagen de la familia"
          width={200}
          height={200}
        />
      </div>

      {nickname && (
        <>
          <h2 className={style.nicknameTitle}>Alias:</h2>
          <p className={style.nickname}>{nickname}</p>
        </>
      )}

      <h2 className={style.membersTitle}>Miembros</h2>
      <table className={style.membersTable}>
        <thead>
          <tr>
            <th>Rol</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={member.role}
                    onChange={(e) => handleChangeMemberField(index, 'role', e.target.value)}
                  />
                ) : (
                  member.role
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => handleChangeMemberField(index, 'name', e.target.value)}
                  />
                ) : (
                  member.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={member.edad}
                    onChange={(e) => handleChangeMemberField(index, 'edad', e.target.value)}
                  />
                ) : (
                  member.edad
                )}
              </td>
              <td>
                <button className={style.deleteBtn} onClick={() => handleDeleteMember(index)}>
                  <FaTrash />
                </button>
                <button className={style.editBtn} onClick={() => handleEditMember(index)}>
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={style.buttonContainer}>
        <button className={style.saveBtn} onClick={openModal}>
          Añadir
        </button>
      </div>

      <ModificarFamilia
        isOpen={isModalOpen}
        onClose={closeModal}
        newMember={newMember}
        handleNewMemberChange={handleNewMemberChange}
        handleAddMember={handleAddMember} // Cambiar a la función que maneja agregar/editar
      />
    </div>
  );
};

export default FormularioFamilia;
