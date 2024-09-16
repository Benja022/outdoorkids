'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react'; // Asegúrate de importar useEffect
import useGoogleMaps from './useGoogleMaps';
import debounce from 'lodash/debounce';
import styles from './lista.module.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [places, setPlaces] = useState([]);
    const [map, setMap] = useState(null);
    const [activityType, setActivityType] = useState('park');
    const [nextPageToken, setNextPageToken] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [resultsLimit] = useState(12); // Número máximo de resultados a mostrar
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Estado para controlar el filtro
    const apiKey = 'AIzaSyDRprasEZWaNEDEFPoRAad-ROkFBH2rNSg';
    const loaded = useGoogleMaps(apiKey);

    // Función de inicialización del mapa
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

                    searchPlaces(newMap, pos);  // Llamada optimizada para la búsqueda de lugares
                },
                () => {
                    handleLocationError(true, newMap.getCenter(), newMap);
                }
            );
        } else {
            handleLocationError(false, newMap.getCenter(), newMap);
        }
    }, [loaded]);

    // Cargar mapa cuando cambie el tipo de actividad
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

    // Función optimizada para buscar lugares cercanos
    const searchPlaces = useCallback((map, location) => {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: location,
            radius: '5000',
            type: [activityType],
            ...(nextPageToken && { pageToken: nextPageToken }),
            rankBy: google.maps.places.RankBy.PROMINENCE,
        };

        service.nearbySearch(request, (results, status, pagination) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const filteredResults = results
                    .filter(result => result.rating)
                    .sort((a, b) => b.rating - a.rating);

                setPlaces(prevPlaces => [
                    ...prevPlaces,
                    ...filteredResults.slice(0, resultsLimit - prevPlaces.length).map(place => ({
                        name: place.name,
                        address: place.vicinity,
                        photos: place.photos ? place.photos : [], // Guardar fotos
                        rating: place.rating
                    }))
                ]);

                setNextPageToken(pagination.hasNextPage ? pagination.nextPageToken : null);

                results.forEach((place) => {
                    new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        title: place.name,
                    });
                });
            }
        });
    }, [activityType, nextPageToken, resultsLimit]);

    // Filtrado y búsqueda optimizados con debounce
    const searchPlace = useMemo(() => debounce(() => {
        if (!map) return;
        const service = new google.maps.places.PlacesService(map);
        const request = {
            query: searchQuery,
            fields: ['name', 'geometry', 'formatted_address', 'photos', 'rating'],
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
                    photos: place.photos ? place.photos : [], // Guardar fotos
                    rating: place.rating
                }]);
            }
        });
    }, 300), [searchQuery, map]);

    const handleSearch = () => {
        searchPlace();
    };

    const handleActivityTypeChange = (e) => {
        setActivityType(e.target.value);
        setPlaces([]); // Limpiar los resultados previos
        setNextPageToken(null); // Reiniciar el token de la siguiente página
        initMap(); // Recargar mapa con la nueva actividad
    };

    const handleImageChange = (direction) => {
        if (!selectedPlace || !selectedPlace.photos) return;

        const newIndex = (currentImageIndex + direction + selectedPlace.photos.length) % selectedPlace.photos.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className={styles.App}>
            <h1 className={styles.h1}>Tu Guía de Actividades Infantiles</h1>
            <div className={styles.searchContainer}>
                <div className={styles.searchWrapper}>
                    <input
                        className={`${styles.searchInput} ${isFilterOpen ? styles.searchInputWithFilter : ''}`}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Escribe el nombre del lugar... ${isFilterOpen ? '' : 'Filtrar'}`}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    />
                    {isFilterOpen && (
                        <div className={styles.dropdownMenu}>
                            <label htmlFor="activityType">Selecciona tipo de actividad:</label>
                            <select
                                id="activityType"
                                value={activityType}
                                onChange={handleActivityTypeChange}
                            >
                                <option value="park">Parque</option>
                                <option value="playground">Parque de Juegos</option>
                                <option value="museum">Museo</option>
                            </select>
                        </div>
                    )}
                </div>
                <button className={styles.searchButton} onClick={handleSearch}>
                    Buscar
                </button>
                {nextPageToken && (
                    <button className={styles.loadMoreButton} onClick={() => searchPlaces(map)}>
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
                                    setCurrentImageIndex(0); // Reiniciar índice de imagen al seleccionar un lugar
                                    setIsModalOpen(true);
                                }}
                            >
                                <img src={place.photos.length > 0 ? place.photos[0].getUrl() : '/default-image.png'} alt={place.name} className={styles.parkImage} loading="lazy" />
                                <span>{place.name}</span>
                                <div className={styles.parkRating}>⭐ {place.rating}</div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div id="map" className={styles.map}></div>
                </div>
            </div>
            {isModalOpen && selectedPlace && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalImages}>
                            {selectedPlace.photos.length > 0 && (
                                <img
                                    src={selectedPlace.photos[currentImageIndex].getUrl()}
                                    alt={selectedPlace.name}
                                    className={styles.modalImage}
                                />
                            )}
                            <div className={styles.modalNav}>
                                <button onClick={() => handleImageChange(-1)}>❮</button>
                                <button onClick={() => handleImageChange(1)}>❯</button>
                            </div>
                        </div>
                        <p>{selectedPlace.address}</p>
                        <button className={styles.scheduleButton}>Agendar</button>
                        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
