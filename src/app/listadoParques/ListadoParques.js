"use client";
import style from "./lista.module.css";
import "./MapComponent";
import "./ParkSearch"
import "./page"
import Script from "next/script";

export default function ListadoParques (initMap) {
  initMap();
  return (
    <>
      <h1> Tu Guía de Actividades Infantiles </h1>

      <div className={style.searchContainer}>
        <div className={style.userInput}>
          <input
            type="text"
            id="parkName"
            placeholder="Escribe el nombre del parque..."
          />
          <button onclick={() => window.searchPark()}>Buscar Parque</button>
        </div>
      </div>

      <div className={style.contentContainer}>
        <div className={style.leftColumn}>
          <Script src="lista.js" strategy="afterInteractive" />
          <div className={style.parkList}>
            <button
              className={style.parkItem}
              data-address="Dirección del Parque de Oeste"
            >
              Parque de Oeste
            </button>
            <button
              className={style.parkItem}
              data-address="Dirección del Parque La Isla del Tesoro"
            >
              Parque La Isla del Tesoro
            </button>
            <button
              className={style.parkItem}
              data-address="Dirección del Parque Litoral"
            >
              Parque Litoral
            </button>
            <button
              className={style.parkItem}
              data-address="Dirección del Parque de la Alegría"
            >
              Parque de la Alegría
            </button>
          </div>
        </div>
        <div id="map" />
      </div>
      <div className={style.movingImage}>
        <img src="/images/lupa.webp" alt="Imagen en movimiento" />
      </div>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRprasEZWaNEDEFPoRAad-ROkFBH2rNSg&libraries=places"
        strategy="afterInteractive"
      />
    </>
  );
}
