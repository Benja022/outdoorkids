/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import React from "react";
import style from "./IniciarSesion.module.css";
import Image from "next/image";
import Link from "next/link";
// import classNames from "classnames"

export default function IniciarSesion() {
  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <Image
          className={style.logo}
          src="/images/Logo.jpg"
          alt="logo"
          width={120}
          height={120}
        />
        <form action="/registro.php" id="formulario-registro">
          <legend>Inicia Sesión</legend>
          <br />
          <label htmlFor="correo">Correo Electronico:</label>
          <br />
          <input type="email" id="correo" name="correo" required />
          <br />
          <label htmlFor="password">Contraseña:</label>
          <br />
          <input type="password" id="password" name="password" required />
          <br />
          <br />
          <Link href="/perfilPrivado">
            <input className={style.btn} type="submit" value="Enviar" />
          </Link>
          <p> ¿No tienes cuenta? </p>
          <Link href="/registro">
            <p>Registrate</p>
          </Link>
        </form>
        <div className={style.card}>
          <Image
            src="/images/imagenAbajoDeReistro.png"
            alt="imagenes de debajo del registro"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
