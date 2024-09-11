"use client";

import React, { useEffect, useRef, useState } from 'react';

const MapComponent = ({ parkName }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);


  useEffect(() => {
    if (!mapRef.current) {
      const mapInstance = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15,
      });
      mapRef.current = mapInstance;
      setMap(mapInstance);
    }
  }, []);


  useEffect(() => {
    if (parkName && map) {
      const service = new google.maps.places.PlacesService(map);
      const request = {
        query: parkName,
        fields: ['name', 'geometry'],
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
        } else {
          alert('No se encontraron resultados para la búsqueda.');
        }
      });
    }
  }, [parkName, map]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
