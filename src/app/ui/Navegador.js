import style from "./Navegador.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function Navegador() {
  return (
    <nav className={style.nav}>
      <div className={style.divisor}>
        <Link href="/">
          <button className={classNames(style.btn, style.btnInicio)}>
            Inicio
          </button>
        </Link>
        <Link href="/registro">
          <button className={classNames(style.btn, style.btnRegistrate)}>
            Registrate
          </button>
        </Link>
        <Link href="/iniciarSesion">
          <button className={classNames(style.btn, style.btnIniciarSes)}>
            Iniciar sesión
          </button>
        </Link>
        <button className={classNames(style.btn, style.btnPreguntas)}>
          Preguntas frecuentes
        </button>
      </div>
    </nav>
  );
}
