/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import style from "./NavegadorHamburguesa.module.css";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";


export default function NavegadorHamburguesa() {
  const [menu, setMenu] = useState(false);

  const abrirMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={style.inicio}>
        <nav className={menu ? style.navegacion : style.ocultar}>
          <button className={style.btnCerrar} onClick={abrirMenu}>
            x
          </button>
          <Link href="/">
            <button style={{background : "none", border : 0}}>
              Inicio
            </button>
          </Link>
          <Link href="/registro">
            <button style={{background : "none", border : 0}}>
              Registrate
            </button>
          </Link>
          <Link href="/iniciarSesion">
            <button style={{background : "none", border : 0}}>
              Iniciar sesión
            </button>
          </Link>
          <Link href="/preguntasfrecuentes">
            <button style={{background : "none", border : 0}} >
              Preguntas frecuentes
            </button>
          </Link>
        </nav>


        <div className={style.hamburguesa} onClick={abrirMenu}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
}
