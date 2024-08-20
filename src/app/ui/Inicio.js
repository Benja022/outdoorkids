/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import style from "./Inicio.module.css";
import className from "classnames";
import Image from "next/image";

export default function Inicio() {
  return (
    <>
      <video className={style.video} src="" />
      <div className={className(style.contenedorNosotros)}>
        <p className={style.bienvenido}>Bienvenido a </p>
        <h1 className={style.outdoorTitle}>OutdoorKids</h1>
        <div className={style.textoImagenesNosotros}>
          <div className={style.textoNosotros}>
            <p className={style.textoNosotrosParrafos}>
              Nuestra misión es inspirar a los niños a disfrutar de la
              naturaleza mientras aprenden la importancia de protegerla. Con
              nuestro mapa interactivo, los pequeños exploradores pueden
              descubrir parques y actividades emocionantes que respetan y
              protegen el medio ambiente. Desde parques para jugar y correr,
              hasta reservas naturales llenas de animales y plantas asombrosas,
              OutdoorKids ofrece un mundo de aventuras verdes esperando ser
              descubierto. También pueden compartir sus experiencias y
              recomendaciones, creando una comunidad de jóvenes defensores del
              planeta.
            </p>
            <p className={style.textoNosotrosParrafos}>
              Regístrate en OutdoorKids y empieza a explorar un mundo lleno de
              maravillas naturales. Descubre lugares increíbles, participa en
              actividades divertidas. ¡Únete a nosotros y convierte cada día en
              una aventura!
            </p>
          </div>
          <div className={style.imagenesNosotros}>
            <Image
              className={style.img}
              src="/images/imagen4.jpg"
              alt="parque infantil"
              width={500}
              height={500}
              layout="responsive"
            />
            <Image
              className={style.img}
              src="/images/imagen2.jpg"
              alt="ninos en aire libre"
              width={500}
              height={500}
              layout="responsive"
            />
            <Image
              className={style.img}
              src="/images/imagen3.jpg"
              alt="familia en aire libre"
              width={500}
              height={500}
              layout="responsive"
            />
            <Image
              className={style.img}
              src="/images/imagen2.jpg"
              alt="ninos en aire libre"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className={style.contenedorBotonRojo}>
        <button
          href="#"
          className={className(style.btn, style.btnRojo, style.btnUnete)}
        >
          ¡Únete!
        </button>
      </div>
    </>
  );
}
