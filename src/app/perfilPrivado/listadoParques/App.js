"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import useGoogleMaps from "./useGoogleMaps";
import debounce from "lodash/debounce";
import styles from "./lista.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [activityType, setActivityType] = useState("park");
  const [nextPageToken, setNextPageToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [resultsLimit] = useState(18);
  const apiKey = "AIzaSyDRprasEZWaNEDEFPoRAad-ROkFBH2rNSg";
  const loaded = useGoogleMaps(apiKey);

  const searchPlaces = useCallback(
    (map, location) => {
      if (!map) return;

      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: location,
        radius: "5000",
        type: [activityType],
        ...(nextPageToken && { pageToken: nextPageToken }),
        rankBy: google.maps.places.RankBy.PROMINENCE,
      };

      service.nearbySearch(request, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const filteredResults = results
            .filter((result) => result.rating)
            .sort((a, b) => b.rating - a.rating);

          setPlaces(filteredResults.slice(0, resultsLimit));
          console.log(places);

          setNextPageToken(
            pagination.hasNextPage ? pagination.nextPageToken : null
          );

          if (map.markers) {
            map.markers.forEach((marker) => marker.setMap(null));
          }
          map.markers = [];

          results.forEach((place) => {
            const marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              title: place.name,
            });
            map.markers.push(marker);
          });
        } else {
          console.error("Error en la búsqueda de lugares:", status);
        }
      });
      updateParques();
    },
    [activityType, nextPageToken, resultsLimit]
  );

  const initMap = useCallback(() => {
    if (!loaded) return;

    const newMap = new google.maps.Map(document.getElementById("map"), {
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
          searchPlaces(newMap, pos);
        },
        () => {
          handleLocationError(true, newMap.getCenter(), newMap);
        }
      );
    } else {
      handleLocationError(false, newMap.getCenter(), newMap);
    }
  }, [loaded, searchPlaces]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  const handleLocationError = (browserHasGeolocation, pos, map) => {
    new google.maps.InfoWindow({
      content: browserHasGeolocation
        ? "Error: El servicio de geolocalización ha fallado."
        : "Error: Tu navegador no soporta geolocalización.",
      position: pos,
    }).open(map);
  };

  const searchPlace = useMemo(
    () =>
      debounce(() => {
        if (!map) return;
        const service = new google.maps.places.PlacesService(map);
        const request = {
          query: searchQuery,
          fields: ["name", "geometry", "formatted_address", "photos", "rating"],
        };

        service.findPlaceFromQuery(request, (results, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            results[0]
          ) {
            const place = results[0];
            map.setCenter(place.geometry.location);
            new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              title: place.name,
            });
            setPlaces([
              {
                name: place.name,
                address: place.formatted_address,
                photos: place.photos ? place.photos : [],
                rating: place.rating,
              },
            ]);
          } else {
            console.error("Error en la búsqueda de lugar:", status);
          }
        });
      }, 300),
    [searchQuery, map]
  );

  const handleSearch = () => {
    searchPlace();
    // updateParques();
  };

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
    setPlaces([]);
    setNextPageToken(null);
    if (map) {
      searchPlaces(map, map.getCenter());
    }
  };

  const handleImageChange = (direction) => {
    if (
      !selectedPlace ||
      !selectedPlace.photos ||
      selectedPlace.photos.length < 2
    )
      return;

    const newIndex =
      (currentImageIndex + direction + selectedPlace.photos.length) %
      selectedPlace.photos.length;
    setCurrentImageIndex(newIndex);
  };

  // Verifica el contenido de selectedPlace
  useEffect(() => {
    if (selectedPlace) {
      console.log("Selected Place:", selectedPlace);
    }
  }, [selectedPlace]);

  const updateParques = async () => {
    const parquesData = places.map(place => ({
      name: place.name,
      address: place.vicinity,
    }));

    const url = `http://localhost:8080/api/parques`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parquesData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Parques actualizados:', result);
    } catch (error) {
      console.error('Error al actualizar los parques:', error);
    }
  };
  return (
    <div className={styles.App}>
      <h1 className={styles.h1}>Tu Guía de Actividades Infantiles</h1>
      <div className={styles.searchWrapper}>
        <input
          className={`${styles.searchInput} ${styles.searchInputWithFilter}`}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Escribe el nombre del lugar..."
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Buscar
        </button>
        <div className={styles.filterContainer}>
          <label htmlFor="activityType" className={styles.filterLabel}>
            Tipo de actividad
          </label>
          <select
            id="activityType"
            value={activityType}
            onChange={handleActivityTypeChange}
            className={styles.dropdownMenu}
          >
            <option value="park">Parque</option>
            <option value="playground">Parque de Juegos</option>
            <option value="museum">Museo</option>
            <option value="library">Biblioteca</option>
          </select>
        </div>
      </div>
      <div className={styles.parkList}>
        {places.length > 0 ? (
          places.map((place, index) => (
            <button
              key={index}
              className={styles.parkItem}
              onClick={() => {
                setSelectedPlace(place);
                setCurrentImageIndex(0);
                setIsModalOpen(true);
              }}
            >
              <img
                src={
                  place.photos && place.photos.length > 0
                    ? place.photos[0].getUrl()
                    : "/default-image.png"
                }
                alt={place.name}
                className={styles.parkImage}
                loading="lazy"
              />
              <span>{place.name}</span>
            </button>
          ))
        ) : (
          <p>No se encontraron parques o museos.</p>
        )}
      </div>
      <div className={styles.mapContainer}>
        <div id="map" className={styles.map}></div>
      </div>
      {isModalOpen && selectedPlace && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2>{selectedPlace.name}</h2>
            {selectedPlace.photos && selectedPlace.photos.length > 0 && (
              <div className={styles.modalImages}>
                <img
                  src={selectedPlace.photos[currentImageIndex].getUrl()}
                  alt={selectedPlace.name}
                  className={styles.modalImage}
                />
                {selectedPlace.photos.length > 1 && (
                  <div className={styles.modalNav}>
                    <button onClick={() => handleImageChange(-1)}>
                      &#10094;
                    </button>
                    <button onClick={() => handleImageChange(1)}>
                      &#10095;
                    </button>
                  </div>
                )}
              </div>
            )}
            {selectedPlace.rating && (
              <div className={styles.ratingContainer}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={styles.star}
                    style={{
                      color:
                        index < Math.round(selectedPlace.rating)
                          ? "yellow"
                          : "gray",
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            )}
            {selectedPlace.vicinity && (
              <p className={styles.modalAddress}>{selectedPlace.vicinity}</p>
            )}
            <button
              className={styles.modalButton}
              onClick={() => setIsModalOpen(false)}
            >
              Cerrar
            </button>
            <Link href="/perfilPrivado/vistaAgenda">
              <button className={styles.customButton}>Agendar</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
