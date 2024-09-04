
import React, { useState } from 'react';

const ParkSearch = ({ onSearch }) => {
    const [parkName, setParkName] = useState('');

    const handleSearch = () => {
        if (parkName) {
            onSearch(parkName);
        } else {
            alert('Por favor, ingresa el nombre de un parque.');
        }
    };

    return (
        <div className="search-container">
            <div className="user-input">
                <input
                    type="text"
                    id="park-name"
                    placeholder="Escribe el nombre del parque..."
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar Parque</button>
            </div>
        </div>
    );
};

export default ParkSearch;
