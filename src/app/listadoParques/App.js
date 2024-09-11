import React from 'react';
import MapComponent from './MapComponent';
import './lista.module.css';

const App = () => {
  const handleSearch = (parkName) => {

    console.log(`Buscando parque: ${parkName}`);
  };

  return (
    <div className="App">
      <h1>Tu Guía de Actividades Infantiles</h1>

      <SearchComponent onSearch={handleSearch} />

      <MapComponent />
    </div>
  );
};

const SearchComponent = ({ onSearch }) => {
  const handleButtonClick = () => {
    const parkName = document.getElementById('park-name').value;
    onSearch(parkName);
  };

  return (
    <div className="search-container">
      <div className="user-input">
        <input
          type="text"
          id="park-name"
          placeholder="Escribe el nombre del parque..."
        />
        <button onClick={handleButtonClick}>Buscar Parque</button>
      </div>
    </div>
  );
};

export default App;
