/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import React from "react"
import style from "./Registro.module.css"
import Image from "next/image"
import classNames from "classnames"

export default function Registro () {
  return (
    <div className={style.body}>
      <header className={style.header}>
        <Image
          className={style.logo}
          src="/images/Logo.jpg"
          alt="logo"
          width={120}
          height={120}
          layout="resposive"
        />
      </header>

      <div class={style.formContainer}>
        <form action="/registro.php" id="formulario-registro">
          <legend>Registrate!</legend>
          <br />
          <label htmlFor="nombre">Nombre completo:</label>
          <br />
          <input type="text" id="nombre" name="nombre" required />
          <br />
          <label htmlFor="correo">Correo Electronico:</label>
          <br />
          <input type="email" id="correo" name="correo" required />
          <br />
          <br />
          <label htmlFor="peque">Nombre del peque:</label>
          <br />
          <input type="text" id="peque" name="peque" />
          <br />
          <label htmlFor="edad">Edad:</label>
          <br />
          <input type="number" id="edad" name="edad" />
          <br />
          <label htmlFor="password">Contraseña:</label>
          <br />
          <input type="password" id="password" name="password" required />
          <br />
          <br />
          <input className={style.btn} type="submit" value="Enviar" />
        </form>
        <div class={style.textInicio}>
          <h3>Ya tienes cuenta?</h3>
          <a className={style.btn} href="#">
            Inicia Sesión
          </a>
        </div>
      </div>
      <div class={style.card}>
        <Image
          src="/images/imagenAbajoDeReistro.png"
          alt="imagenes de debajo del registro"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  )
}
