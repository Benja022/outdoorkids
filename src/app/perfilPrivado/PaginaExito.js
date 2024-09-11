import React from "react";
import style from "./paginaExito.module.css";

const PaginaExito = () => {
  return (
    <div>
      <div className={style.formContainer}>
        <div className={style.contenedorEstrellas}>
          <div className={style.estrellaFamilia}>
            <img src="images/estrella.png" />
            <div className={style.textoSobreImagen}>MI FAMILIA</div>
          </div>
          <div className={style.estrellaMapa}>
            <img src="images/estrella.png" />
            <div className={style.textoSobreImagen}>MAPA</div>
          </div>
        </div>
        <div className={style.estrellaAgenda}>
          <img src="images/estrella.png" />
          <div className={style.textoSobreImagen}>AGENDA</div>
        </div>
      </div>
      <div className={style.card}>
        <img src="images/imagenAbajoDeReistro.png" />
      </div>
    </div>
  );
};

export default PaginaExito;
