// src/App.js
import React from 'react';
import MapComponent from './MapComponent';
import ParkSearch from './ParkSearch';

import './lista.module.css';

const App = () => {
    const handleSearch = (parkName) => {
        window.searchPark(parkName);
    };

    return (
        <div className="App">
            <h1>Tu Guía de Actividades Infantiles</h1>
            <ParkSearch onSearch={handleSearch} />
            <MapComponent />
        </div>
    );
};

export default App;
