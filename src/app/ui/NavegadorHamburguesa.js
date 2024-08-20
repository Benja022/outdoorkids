/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */

import style from "./NavegadorHamburguesa.module.css";
import React, { useState } from "react";

export default function NavegadorHamburguesa() {
  const [menu, setMenu] = useState(false);

  const abrirMenu = () => {
    // console.log("abrir menu");
    // console.log(menu);
    setMenu(true);
  };
  return (
    <>
      <div className={style.inicio}>
        <nav className={menu ? style.navegacion : style.ocultar}>
          <button className={style.btnCerrar} onClick={() => setMenu(false)}>
            x
          </button>
          <a href="#">Inicio</a>
          <a href="#">Registrate</a>
          <a href="#">Iniciar sesión</a>
          <a href="#">Preguntas frecuentes</a>
        </nav>
      </div>
      <div className={style.hamburguesa} onClick={abrirMenu}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
