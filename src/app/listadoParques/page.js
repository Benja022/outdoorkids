
import React from 'react';
import App from './App';

const page = () => {
    const handleSearch = (parkName) => {
        window.searchPark(parkName);
    };

    return (
        <div className="App">
            <h1>Tu Guía de Actividades Infantiles</h1>
            <App />
        </div>
    );
};

export default App;