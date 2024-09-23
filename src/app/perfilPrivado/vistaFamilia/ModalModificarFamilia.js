// /* eslint-disable jsx-quotes */
// /* eslint-disable multiline-ternary */
// import styles from "./formularioFamilia.module.css";
// import Image from "next/image";
// import classNames from "classnames";

// const ModificarFamilia = ({
//   isOpen,
//   onClose,
//   newMember,
//   handleNewMemberChange,
//   handleAddMember,
//   familyPhoto,
//   handlePhotoChange,
//   handleNickname,
//   nickname,
//   members,
//   handleDeleteMember,
//   handleAddMemberAndClose,
// }) => {
//   if (!isOpen) return null;
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <span className={styles.close} onClick={onClose}>
//           &times;
//         </span>
//         <div className={styles.familyPhoto}>
//           <h1 className={classNames(styles.headerH1, styles.header)}>MI FAMILIA</h1>
//           {familyPhoto ? (
//             <Image
//               className={classNames(styles.familyPhotoInput, styles.img)}
//               src={familyPhoto}
//               alt="Imagen de la familia"
//               width={50}
//               height={50}
//             />
//           ) : (
//             <Image
//               className={classNames(styles.familyPhotoInput, styles.img)}
//               src="/images/estrella.png"
//               alt="Imagen de la familia"
//               width={50}
//               height={50}
//             />
//           )}
//           <div className={styles.fileInput}>
//             <input
//               type="file"
//               className={styles.fileInputInput}
//               id="file-input"
//               onChange={handlePhotoChange}
//             />
//             <label className={styles.fileInputLabel} for="file-input">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="upload"
//                 className="svg-inline--fa fa-upload fa-w-16"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
//                 />
//               </svg>
//               <span>Upload file</span>
//             </label>
//           </div>
//         </div>
//         <div className={styles.familyNicknameContainer}>
//           <input
//             className={classNames(styles.headerH1, styles.header)}
//             type="text"
//             value={nickname}
//             onChange={handleNickname}
//             placeholder="Apodo de la familia"
//             aria-label="Apodo de la familia"
//           />
//           <p className={classNames(styles.headerH1, styles.header)}>Agrega un miembro</p>
//           <div className={styles.select}>
//             <select
//               name="role"
//               value={newMember.role}
//               onChange={handleNewMemberChange}
//             >
//               <option selected>Selecciona un rol</option>
//               <option className={styles.option} value="Tutor">
//                 Tutor
//               </option>
//               <option className={styles.option} value="Tutora">
//                 Tutora
//               </option>
//               <option className={styles.option} value="Niño">
//                 Niño
//               </option>
//               <option className={styles.option} value="Niña">
//                 Niña
//               </option>
//             </select>
//           </div>
//           <input
//             type="text"
//             name="name"
//             value={newMember.name}
//             onChange={handleNewMemberChange}
//             placeholder="Nombre"
//             className={classNames(styles.inputsNameAge, styles.member)}
//           />
//           <input
//             type="text"
//             name="edad"
//             value={newMember.edad}
//             onChange={handleNewMemberChange}
//             placeholder="Edad"
//             className={classNames(styles.inputsNameAge, styles.member)}
//           />
//           <button
//             onClick={handleAddMember}
//             className={classNames(styles.fileInputLabel, styles.saveBtn)}
//           >
//             Añadir
//           </button>
//           <p className={classNames(styles.headerH1, styles.header)}>
//             Miembros
//           </p>
//           <div id="members" className={styles.members}>
//             {members.map((member, index) => (
//               <div key={index} className={styles.member}>
//                 <p>{member.role}</p>
//                 <p>{member.name}</p>
//                 <p>{member.edad}</p>
//                 <span
//                   className={styles.spanDlt}
//                   onClick={() => handleDeleteMember(index)}
//                 >
//                   &times;
//                 </span>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={onClose}
//             className={classNames(styles.fileInputLabel, styles.saveBtn)}
//           >
//             Guardar y salir
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModificarFamilia;
'use client'
import React, { useState } from "react";
import style from "./formularioFamilia.module.css";

export default function ModalFamilia({ onClose }) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [alias, setAlias] = useState('');
  const [years, setYears] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const userId = 1;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/familia/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ photo, alias}),
      });

      if (response.ok) {
        setSuccess('Miembro de la familia registrado exitosamente.');
        setName('');
        setPhoto('');
        setAlias('');
        setYears('');
        setRole('');
        setError('');
      } else {
        setError('Error en el registro. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setError('Error al conectar con el servidor. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={onClose}>X</button>
        <form onSubmit={handleSubmit} className={style.familyForm}>
          <h2>Registrar Miembro de la Familia</h2>
          {error && <p className={style.error}>{error}</p>}
          {success && <p className={style.success}>{success}</p>}
          <div className={style.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="photo">Foto (URL):</label>
            <input
              type="text"
              id="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="alias">Alias:</label>
            <input
              type="text"
              id="alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="years">Años:</label>
            <input
              type="number"
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="role">Rol:</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={style.submitButton}>Guardar</button>
        </form>
      </div>
    </div>
  );
}