'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';

const MapComponent = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (window.google && mapRef.current && !map) {
            const initMap = () => {
                const newMap = new window.google.maps.Map(mapRef.current, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 15,
                });
                setMap(newMap);
                return newMap;
            };

            const initializedMap = initMap();

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        initializedMap.setCenter(pos);

                        const service = new window.google.maps.places.PlacesService(initializedMap);
                        const request = {
                            location: pos,
                            radius: '5000',
                            type: ['park'],
                        };

                        service.nearbySearch(request, (results, status) => {
                            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                                results.forEach((place) => {
                                    new window.google.maps.Marker({
                                        map: initializedMap,
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
                        handleLocationError(true, initializedMap.getCenter(), initializedMap);
                    }
                );
            } else {
                handleLocationError(false, initializedMap.getCenter(), initializedMap);
            }
        }
    }, );

    const handleLocationError = useCallback((browserHasGeolocation, pos, map) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: browserHasGeolocation
                ? 'Error: El servicio de geolocalización ha fallado.'
                : 'Error: Tu navegador no soporta geolocalización.',
            position: pos,
        });
        infoWindow.open(map);
    }, []);

    const searchPark = useCallback((parkName) => {
        if (map) {
            const service = new window.google.maps.places.PlacesService(map);
            const request = {
                query: parkName,
                fields: ['name', 'geometry'],
            };

            service.findPlaceFromQuery(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
                    const place = results[0];
                    map.setCenter(place.geometry.location);
                    new window.google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        title: place.name,
                    });
                } else {
                    alert('No se encontraron resultados para la búsqueda.');
                }
            });
        }
    }, [map]);

    return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
