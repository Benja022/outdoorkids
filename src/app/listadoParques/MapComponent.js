// src/components/MapComponent.js
import React, { useEffect, useRef, useState } from 'react';

const MapComponent = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (window.google && mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15,
            });
            setMap(map);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        map.setCenter(pos);

                        const service = new window.google.maps.places.PlacesService(map);
                        const request = {
                            location: pos,
                            radius: '5000',
                            type: ['park'],
                        };

                        service.nearbySearch(request, (results, status) => {
                            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                                results.forEach((place) => {
                                    new window.google.maps.Marker({
                                        map: map,
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
                        handleLocationError(true, map.getCenter(), map);
                    }
                );
            } else {
                handleLocationError(false, map.getCenter(), map);
            }
        }
    }, []);

    const handleLocationError = (browserHasGeolocation, pos, map) => {
        new window.google.maps.InfoWindow({
            content: browserHasGeolocation
                ? 'Error: El servicio de geolocalización ha fallado.'
                : 'Error: Tu navegador no soporta geolocalización.',
            position: pos,
        }).open(map);
    };

    const searchPark = (parkName) => {
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
    };

    return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
