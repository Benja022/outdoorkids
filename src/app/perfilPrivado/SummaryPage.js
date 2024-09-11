
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Summary.css';

const SummaryPage = () => {
    const location = useLocation();
    const { nickname, members } = location.state || {};

    return (
        <div className="summary-page">
            <h1>Resumen de la Familia</h1>
            <p><strong>Apodo de la Familia:</strong> {nickname}</p>
            <div className="members">
                <h2>Miembros:</h2>
                {members && members.map((member, index) => (
                    <div key={index} className="member">
                        <p><strong>Rol:</strong> {member.role}</p>
                        <p><strong>Nombre:</strong> {member.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummaryPage;
