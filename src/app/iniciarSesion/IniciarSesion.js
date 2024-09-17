import React from "react";
import style from "./IniciarSesion.module.css";
import Image from "next/image";
import Link from "next/link";

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
          layout="intrinsic"
        />
        <form action="/registro.php" id="formulario-registro">
          <legend className={style.legend}>Inicia Sesión</legend>
          <label htmlFor="correo" className={style.label}>Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" className={style.input} required />
          <label htmlFor="password" className={style.label}>Contraseña:</label>
          <input type="password" id="password" name="password" className={style.input} required />
          <Link href="/perfilPrivado">
            <input className={style.btn} type="submit" value="Enviar" />
          </Link>
          <p className={style.link}>¿No tienes cuenta?</p>
          <Link href="/registro" className={style.link}>
            Regístrate
          </Link>
        </form>
        <div className={style.cardImage}>
          <Image
            src="/images/imagenAbajoDeReistro.png"
            alt="Imagen de registro"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
