import React, { useState } from 'react';

const FormularioFamilia = () => {
    const [familyNickname, setFamilyNickname] = useState('');
    const [familyPhoto, setFamilyPhoto] = useState(null);
    const [members, setMembers] = useState([{ role: 'Tutor', name: '' }]);

    const handleAddMember = () => {
        setMembers([...members, { role: 'Nuevo miembro', name: '' }]);
    };

    const handleMemberChange = (index, field, value) => {
        const updatedMembers = members.map((member, i) => 
            i === index ? { ...member, [field]: value } : member
        );
        setMembers(updatedMembers);
    };

    const handlePhotoChange = (event) => {
        setFamilyPhoto(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('familyNickname', familyNickname);
        if (familyPhoto) {
            formData.append('familyPhoto', familyPhoto);
        }

        members.forEach((member, index) => {
            formData.append(`members[${index}][role]`, member.role);
            formData.append(`members[${index}][name]`, member.name);
        });

        fetch('URL_DE_TU_PAGINA_DESTINO', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Éxito:', data);
            // Puedes redirigir o mostrar un mensaje de éxito aquí
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Apodo de la Familia</label>
                <input
                    type="text"
                    value={familyNickname}
                    onChange={(e) => setFamilyNickname(e.target.value)}
                    placeholder="Apodo de la familia"
                />
            </div>
            <div>
                <label>Foto de la Familia</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                />
            </div>
            <div>
                <h4>Miembros</h4>
                {members.map((member, index) => (
                    <div key={index} className="member">
                        <select
                            value={member.role}
                            onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                        >
                            <option value="Tutor">Tutor</option>
                            <option value="Peque">Peque</option>
                            <option value="Nuevo miembro">Nuevo miembro</option>
                        </select>
                        <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                            placeholder="Nombre"
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddMember}>Añadir miembro</button>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};
import './perfilPrivado.module.css';

export default FormularioFamilia;

