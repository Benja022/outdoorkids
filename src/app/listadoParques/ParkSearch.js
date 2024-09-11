'use client';
import React, { useState } from 'react';

const ParkSearch = ({ onSearch }) => {
    const [parkName, setParkName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        if (parkName.trim()) {
            setErrorMessage('');
            onSearch(parkName);
        } else {
            setErrorMessage('Por favor, ingresa el nombre de un parque.');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <div className="user-input">
                <label htmlFor="park-name">Buscar Parque:</label>
                <input
                    type="text"
                    id="park-name"
                    placeholder="Escribe el nombre del parque..."
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar Parque</button>
            </div>
            {errorMessage && <p id="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default ParkSearch;
