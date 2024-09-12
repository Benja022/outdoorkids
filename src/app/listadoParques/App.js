'use client';
import React, { useState, useEffect, useCallback } from 'react';
import useGoogleMaps from './useGoogleMaps';
import styles from './lista.module.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [places, setPlaces] = useState([]);
    const [map, setMap] = useState(null);
    const [activityType, setActivityType] = useState('park');
    const [nextPageToken, setNextPageToken] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [resultsLimit] = useState(12); // Número máximo de resultados a mostrar
    const apiKey = 'AIzaSyDRprasEZWaNEDEFPoRAad-ROkFBH2rNSg';
    const loaded = useGoogleMaps(apiKey);

    const initMap = useCallback(() => {
        console.log('Using initMap')
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
                        ...(nextPageToken && { pageToken: nextPageToken }),
                        rankBy: google.maps.places.RankBy.PROMINENCE,
                    };

                    service.nearbySearch(request, (results, status, pagination) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            const filteredResults = results
                                .filter(result => result.rating) // Filtra resultados sin valoración
                                .filter(result => {
                                    return result.types.includes(activityType);
                                    /*
                                    switch (activityType) {
                                        case 'park natural':
                                            return result.types.includes('park natural');
                                        case 'museum':
                                            return result.types.includes('museum');
                                        case 'playground':
                                            return result.types.includes('playground');
                                        default:
                                            return false;
                                    }
                                            */
                                })
                                .sort((a, b) => b.rating - a.rating); // Ordena por valoración
                            console.log({results, pagination, filteredResults})
                            setPlaces(prevPlaces => {
                              console.log({prevPlaces})
                              return [
                                ...prevPlaces,
                                ...filteredResults.slice(0, resultsLimit - prevPlaces.length).map(place => ({
                                    name: place.name,
                                    address: place.vicinity,
                                    photoUrl: place.photos ? place.photos[0].getUrl() : '/default-image.png',
                                    rating: place.rating
                                }))
                            ]});

                            setNextPageToken(pagination.hasNextPage ? pagination.nextPageToken : null);

                            results.forEach((place) => {
                                new google.maps.Marker({
                                    map: newMap,
                                    position: place.geometry.location,
                                    title: place.name,
                                });
                            });
                        } else {
                            console.error('Error al buscar lugares:', status);
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
    }, [loaded, activityType, nextPageToken, resultsLimit]);

    useEffect(() => {
        initMap();
    }, [initMap, activityType]);

    const handleLocationError = (browserHasGeolocation, pos, map) => {
        new google.maps.InfoWindow({
            content: browserHasGeolocation
                ? 'Error: El servicio de geolocalización ha fallado.'
                : 'Error: Tu navegador no soporta geolocalización.',
            position: pos,
        }).open(map);
    };

    const searchPlace = () => {
        if (!map) return;

        const service = new google.maps.places.PlacesService(map);
        const request = {
            query: searchQuery,
            fields: ['name', 'geometry', 'formatted_address', 'photos', 'rating']
        };

        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
                const place = results[0];
                map.setCenter(place.geometry.location);
                new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    title: place.name,
                });
                setPlaces([{
                    name: place.name,
                    address: place.formatted_address,
                    photoUrl: place.photos ? place.photos[0].getUrl() : '/default-image.png',
                    rating: place.rating
                }]);
            } else {
                alert('No se encontraron resultados para la búsqueda.');
            }
        });
    };

    const handleSearch = () => {
        searchPlace();
    };

    const handleActivityTypeChange = (e) => {
        setActivityType(e.target.value);
        /*
        setPlaces([]); // Limpiar lugares al cambiar la actividad
        setNextPageToken(null); // Reiniciar el token de la siguiente página
        initMap(); // Recargar mapa con la nueva actividad
        */
    };

    return (
        <div className={styles.App}>
            <h1 className={styles.h1}>Tu Guía de Actividades Infantiles</h1>
            <div className={styles.searchContainer}>
                <div className={styles.userInput}>
                    <input
                        className={styles.userInputInput}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Escribe el nombre del lugar..."
                    />
                    <button className={styles.userInputButton} onClick={handleSearch}>
                        Buscar
                    </button>
                </div>
                <div className={styles.activitySelector}>
                    <label htmlFor="activityType">Selecciona tipo de actividad:</label>
                    <select
                        id="activityType"
                        value={activityType}
                        onChange={handleActivityTypeChange}
                    >
                        <option value="park natural">Parque</option>
                        <option value="playground">Parque de Juegos</option>
                        <option value="museum">Museo</option>
                    </select>
                </div>
                {nextPageToken && (
                    <button className={styles.loadMoreButton} onClick={initMap}>
                        Cargar Más Resultados
                    </button>
                )}
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.parkList}>
                        {places.map((place, index) => (
                            <button
                                key={index}
                                className={styles.parkItem}
                                onClick={() => {
                                    setSelectedPlace(place);
                                    setIsModalOpen(true);
                                }}
                            >
                                <img src={place.photoUrl} alt={place.name} className={styles.parkImage} />
                                <span>{place.name}</span>
                                <div className={styles.parkRating}>⭐ {place.rating}</div>
                            </button>
                        ))}
                    </div>
                </div>
                <div id="map" className={styles.map}></div>
            </div>
            {isModalOpen && selectedPlace && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>Cerrar</button>
                        <h2>{selectedPlace.name}</h2>
                        <img src={selectedPlace.photoUrl} alt={selectedPlace.name} className={styles.modalImage} />
                        <p>{selectedPlace.address}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
