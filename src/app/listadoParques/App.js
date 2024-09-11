'use client';
import React, { useState, useEffect, useRef } from 'react';
import MapComponent from './MapComponent';
import ParkSearch from './ParkSearch';
import './lista.module.css';

const App = () => {
    const mapRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(false);

    const loadGoogleMapsScript = (callback) => {
        const existingScript = document.getElementById('googleMaps');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRprasEZWaNEDEFPoRAad-ROkFBH2rNSg&libraries=places`;
            script.id = 'googleMaps';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                callback();
            };
            script.onerror = () => {
                setLoadError(true);
            };
            document.body.appendChild(script);
        } else {
            callback();
        }
    };

    useEffect(() => {

        loadGoogleMapsScript(() => {
            console.log('Google Maps API loaded');
            setIsLoaded(true);
        });
    }, []);

    const handleSearch = (parkName) => {
        if (mapRef.current && isLoaded) {
            mapRef.current.searchPark(parkName);
        }
    };

    if (loadError) {
        return <div>Error al cargar Google Maps. Por favor verifica tu API Key.</div>;
    }

    if (!isLoaded) {
        return <div>Cargando Google Maps...</div>;
    }

    return (
        <div className="App" style={{ width: '100vw', height: '100vh' }}>
            <h1>Tu Guía de Actividades Infantiles</h1>
            <ParkSearch onSearch={handleSearch} />
            <MapComponent ref={mapRef} />
        </div>
    );
};

export default App;

