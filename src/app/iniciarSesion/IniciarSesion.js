import React from "react";
import style from "./IniciarSesion.module.css";
import Link from "next/link";

export default function IniciarSesion() {
  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <form action="/registro.php" id="formulario-registro">
          <legend className={style.legend}>Login</legend>
          <label htmlFor="correo" className={style.label}>
            Email Address
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            className={style.input}
            required
          />
          <label htmlFor="password" className={style.label}>
            Enter password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={style.input}
            required
          />
          <Link href="/perfilPrivado/listadoParques">
            <input className={style.btn} type="submit" value="Login" />
          </Link>
          <Link href="/forgot-password" className={style.link}>
            Forgot Password?
          </Link>
          <p className={style.link}>Don't have an account?</p>
          <Link href="/registro" className={style.link}>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
