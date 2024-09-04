// src/App.js
import React from 'react';
import MapComponent from './components/MapComponent';
import ParkSearch from './components/ParkSearch';
import './lista.module.css';

const App = () => {
    const handleSearch = (parkName) => {
        window.searchPark(parkName);
    };

    return (
        <div className="App">
            <header>
                <div className="logo">
                    <img src="/images/Logo.jpg" alt="OutdoorKids Logo" />
                    <span>OutdoorKids</span>
                </div>
                <button className="inicio-btn">Inicio</button>
            </header>
            <h1>Tu Guía de Actividades Infantiles</h1>
            <ParkSearch onSearch={handleSearch} />
            <MapComponent />
        </div>
    );
};

export default App;
