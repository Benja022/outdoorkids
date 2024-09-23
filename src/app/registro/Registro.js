'use client';
import React from "react";
import style from "./Registro.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Registro() {

  

  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <Image
          className={style.logo}
          src="/images/Logo.jpg"
          alt="logo"
          width={120}
          height={120}
          layout="responsive"
        />
        <form action="/registro.php" id="formulario-registro">
          <legend className={style.legend}>¡Regístrate!</legend>
          
          <label className={style.label} htmlFor="nombre">Nombre:</label>
          <input className={style.input} type="text" id="nombre" name="nombre" required />
          
          <label className={style.label} htmlFor="apellidos">Apellidos:</label>
          <input className={style.input} type="text" id="apellidos" name="apellidos" />
          
          <label className={style.label} htmlFor="correo">Correo Electrónico:</label>
          <input className={style.input} type="email" id="correo" name="correo" required />
          
          <label className={style.label} htmlFor="password">Contraseña:</label>
          <input className={style.input} type="password" id="password" name="password" required />
          
          <input className={style.btn} type="submit" value="Enviar" />
        </form>
        
        <div className={style.textContainer}>
          <h3 className={style.text}>¿Ya tienes cuenta?</h3>
          <Link href="/iniciarSesion" className={style.link}>
                  Inicia Sesión
            </Link>

        </div>
        
        <div className={style.cardImage}>
          <Image
            src="/images/imagenAbajoDeReistro.png"
            alt="Imagen de abajo del registro"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
