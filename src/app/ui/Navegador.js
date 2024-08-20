import style from "./Navegador.module.css";
import classNames from "classnames";

export default function Navegador() {
  return (
    <nav className={style.nav}>
      <div className={style.divisor}>
        <button className={classNames(style.btn, style.btnInicio)}>
          Inicio
        </button>
        <button className={classNames(style.btn, style.btnRegistrate)}>
          Registrate
        </button>
        <button className={classNames(style.btn, style.btnIniciarSes)}>
          Iniciar sesión
        </button>
        <button className={classNames(style.btn, style.btnPreguntas)}>
          Preguntas frecuentes
        </button>
      </div>
    </nav>
  );
}
