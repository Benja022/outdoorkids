'use client'
import React, { useState, useEffect, useCallback } from 'react';
import useGoogleMaps from './useGoogleMaps';
import styles from './lista.module.css';

const App = () => {
    const [parkName, setParkName] = useState('');
    const [parks, setParks] = useState([]);
    const [map, setMap] = useState(null);
    const [activityType, setActivityType] = useState('park');
    const [ageRange, setAgeRange] = useState('all'); // Estado para el rango de edad
    const apiKey = 'AIzaSyDRprasEZWaNEDEFPoRAad-ROkFBH2rNSg';
    const loaded = useGoogleMaps(apiKey);

    const initMap = useCallback(() => {
        if (!loaded) return;

        const newMap = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 15,
        });

        setMap(newMap);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    newMap.setCenter(pos);

                    const service = new google.maps.places.PlacesService(newMap);
                    const request = {
                        location: pos,
                        radius: '5000',
                        type: [activityType],
                    };

                    service.nearbySearch(request, (results, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            // Aquí se filtran los parques según el rango de edad
                            const filteredParks = results.filter(place => {
                                // Filtrar según el rango de edad
                                // Puedes ajustar la lógica de filtrado según la disponibilidad de datos
                                return ageRange === 'all'; // Ejemplo de filtro básico
                            });

                            setParks(filteredParks.slice(0, 12).map(place => ({
                                name: place.name,
                                address: place.vicinity,
                                photoUrl: place.photos ? place.photos[0].getUrl() : '/default-image.png'
                            })));

                            results.forEach((place) => {
                                new google.maps.Marker({
                                    map: newMap,
                                    position: place.geometry.location,
                                    title: place.name,
                                });
                            });
                        } else {
                            console.error('Error al buscar parques:', status);
                        }
                    });
                },
                () => {
                    handleLocationError(true, newMap.getCenter(), newMap);
                }
            );
        } else {
            handleLocationError(false, newMap.getCenter(), newMap);
        }
    }, [loaded, activityType, ageRange]);

    useEffect(() => {
        initMap();
    }, [initMap]);

    const handleLocationError = (browserHasGeolocation, pos, map) => {
        new google.maps.InfoWindow({
            content: browserHasGeolocation
                ? 'Error: El servicio de geolocalización ha fallado.'
                : 'Error: Tu navegador no soporta geolocalización.',
            position: pos,
        }).open(map);
    };

    const searchPark = () => {
        if (!map) return;

        const service = new google.maps.places.PlacesService(map);
        const request = {
            query: parkName
        };

        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
                console.log(results)
                const place = results[0];
                map.setCenter(place.geometry.location);
                new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    title: place.name,
                });
            } else {
                alert('No se encontraron resultados para la búsqueda.');
            }
        });
    };

    const handleSearch = () => {
        searchPark();
    };

    return (
        <div className={styles.App}>
            <h1 className={styles.h1}>Tu Guía de Actividades Infantiles</h1>
            <div className={styles.searchContainer}>
                <div className={styles.userInput}>
                    <input
                        className={styles.userInputInput}
                        type="text"
                        value={parkName}
                        onChange={(e) => setParkName(e.target.value)}
                        placeholder="Escribe el nombre del parque..."
                    />
                    <button className={styles.userInputButton} onClick={handleSearch}>
                        Buscar Parque
                    </button>
                </div>
                <div className={styles.activitySelector}>
                    <label htmlFor="activityType">Selecciona tipo de actividad:</label>
                    <select
                        id="activityType"
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                    >
                        <option value="park">Parque</option>
                        <option value="skate park">Parque de skate
                        </option>
                        <option value="museum">Museo</option>
                        {/* Añadir más opciones según sea necesario */}
                    </select>
                </div>

            </div>
            <div className={styles.contentContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.parkList}>
                        {parks.map((park, index) => (
                            <button
                                key={index}
                                className={styles.parkItem}
                                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.address)}`, '_blank')}
                            >
                                <img src={park.photoUrl} alt={park.name} className={styles.parkImage} />
                                <span>{park.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div id="map" className={styles.map}></div>
            </div>
            <div className={styles.movingImage}>

            </div>
        </div>
    );
};

export default App;
