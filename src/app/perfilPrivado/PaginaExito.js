/* eslint-disable jsx-quotes */
import React from "react";
import style from "./paginaExito.module.css";
import Link from "next/link";
import Image from "next/image";

const PaginaExito = () => {
  return (
    <div>
      <div className={style.formContainer}>
        <div className={style.contenedorEstrellas}>
          <Link href="/perfilPrivado/vistaFamilia">
            <div className={style.estrellaFamilia}>
              <Image
                src="/images/estrella.png"
                width={200}
                height={200}
                alt="enlace a mi familia"
              />
              <div className={style.textoSobreImagen}>MI FAMILIA</div>
            </div>
          </Link>
          <Link href="/perfilPrivado/listadoParques">
            <div className={style.estrellaMapa}>
              <Image
                src="/images/estrella.png"
                width={200}
                height={200}
                alt="enlace a mapa"
              />
              <div className={style.textoSobreImagen}>MAPA</div>
            </div>
          </Link>
        </div>
        <Link href="/perfilPrivado/vistaAgenda">
          <div className={style.estrellaAgenda}>
            <Image
              src="/images/estrella.png"
              width={200}
              height={200}
              alt="enlace a Agenda"
            />
            <div className={style.textoSobreImagen}>AGENDA</div>
          </div>
        </Link>
      </div>
      <div className={style.card}>
        <Image src="/images/imagenAbajoDeReistro.png"
        width={800}
        height={400}
        alt="imagen de abajo del registro" />
      </div>
    </div>
  );
};

export default PaginaExito;
