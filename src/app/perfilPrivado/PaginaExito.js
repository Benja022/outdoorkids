/* eslint-disable jsx-quotes */
import React from "react";
import style from "./paginaExito.module.css";
import Link from "next/link";
import Image from "next/image";

const PaginaExito = () => {
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <div className={style.contenedorEstrellas}>
          <Link href="/perfilPrivado/vistaFamilia" passHref>
            <div className={style.estrellaFamilia}>
              <Image
                src="/images/estrella.png"
                alt="enlace a mi familia"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={style.textoSobreImagen}>MI FAMILIA</div>
            </div>
          </Link>
          <Link href="/perfilPrivado/listadoParques">
            <div className={style.estrellaMapa}>
              <Image
                src="/images/estrella.png"
                alt="enlace a mapa"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={style.textoSobreImagen}>MAPA</div>
            </div>
          </Link>
        </div>
        <Link href="/perfilPrivado/vistaAgenda" passHref>
          <div className={style.estrellaAgenda}>
            <Image
              src="/images/estrella.png"
              alt="enlace a Agenda"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
