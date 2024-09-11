"use client" 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './perfilPrivado.module.css';

const FormularioFamilia = () => {
    const [nickname, setNickname] = useState('');
    const [members, setMembers] = useState([
        { role: 'Tutor', name: '' },
        { role: 'Peque', name: '' }
    ]);
    const navigate = useNavigate();

    const handleInputChange = (index, e) => {
        const newMembers = [...members];
        newMembers[index][e.target.name] = e.target.value;
        setMembers(newMembers);
    };

    const handleAddMember = () => {
        setMembers([...members, { role: '', name: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/summary', { state: { nickname, members } });
    };

    return (
    <div className="family-form">
        <div className="header">
            <h1>Apodo de la Familia</h1>
            <div className="family-nickname-container">
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Apodo de la familia"
                    aria-label="Apodo de la familia"
                />
                <div className="family-photo">
                    <input
                        type="file"
                        id="family-photo-input"
                        accept="image/*"
                        aria-label="Subir foto de la familia"
                    />
                    <div id="family-photo" className="profile-icon"></div>
                </div>
            </div>
        </div>
    <div id="members" className="members">
        {members.map((member, index) => (
            <div key={index} className="member">
                <h4>
                    <select
                        name="role"
                        value={member.role}
                        onChange={(e) => handleInputChange(index, e)}
                    >
                        <option value="">Selecciona un rol</option>
                        <option value="Tutor">Tutor</option>
                        <option value="Peque">Peque</option>
                    </select>
                </h4>
                <input
                type="text"
                name="name"
                value={member.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Nombre"
            />
        </div>
        ))}
        </div>
        <button onClick={handleAddMember} className="add-member-btn">
            Añadir miembro
        </button>
        <button onClick={handleSubmit} className="submit-btn">
            Enviar
        </button>
    </div>
);
};

export default FormularioFamilia;

