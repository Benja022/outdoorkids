/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="simbolos">
        <div className={`${style["tiktok-icon"]}`}>
          <i className={`${style["fab fa-tiktok"]}`} />
        </div>

        <div className={`${style["whatsapp-icon"]}`}>
          <i className={`${style["fab fa-whatsapp"]}`} />
        </div>

        <div className={`${style["github-icon"]}`}>
          <i className={`${style["fab fa-github"]}`} />
        </div>

        <div className={`${style["instagram-icon"]}`}>
          <i className={`${style["fab fa-instagram"]}`} />
        </div>

        <a href="https://www.linkedin.com" className="linkedin-icon">
          <i className={`${style["fab fa-linkedin"]}`} />
        </a>
      </div>
      <span className="right-text">
        <p className="copyright-text">
          &copy;OutdoorKids by Esplai 2024 Todos los derechos reservados
        </p>
        <a href="ola.olga5@mail.ru">OutdoorKids@gmail.com</a>
      </span>
    </footer>
  );
}
