/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import style from "./Inicio.module.css";
import className from "classnames";
import Image from "next/image";
import React, { useState } from "react";

export default function Inicio() {
  const [menu, setMenu] = useState(false);

  const abrirMenu = () => {
    console.log("abrir menu");
    console.log(menu);
    setMenu(true);
  }

  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Image
            className={style.logo}
            src="/images/Logo.jpg"
            alt="logo"
            width={120}
            height={120}
            layout="resposive"
          />
        </div>

        <h6 className={style.text}>OutdoorKids</h6>
        <div className={style.inicio}>
          <nav className={menu ? style.navegacion : style.ocultar}>
            <button className={style.btnCerrar} onClick={() => setMenu(false)}>x</button>
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
      </header>
      <video className={style.video} src="" />
      <div className={className(style.contenedorNosotros)}>
        <div className={style.textoNosotros}>
          <p className={style.bienvenido}>Bienvenido a </p>
          <h1>OutdoorKids</h1>
          <p className={style.textoNosotrosParrafos}>
            Nuestra misión es inspirar a los niños a disfrutar de la naturaleza
            mientras aprenden la importancia de protegerla. Con nuestro mapa
            interactivo, los pequeños exploradores pueden descubrir parques y
            actividades emocionantes que respetan y protegen el medio ambiente.
            Desde parques para jugar y correr, hasta reservas naturales llenas
            de animales y plantas asombrosas, OutdoorKids ofrece un mundo de
            aventuras verdes esperando ser descubierto. También pueden compartir
            sus experiencias y recomendaciones, creando una comunidad de jóvenes
            defensores del planeta.
          </p>
          <p className={style.textoNosotrosParrafos}>
            Regístrate en OutdoorKids y empieza a explorar un mundo lleno de
            maravillas naturales. Descubre lugares increíbles, participa en
            actividades divertidas. ¡Únete a nosotros y convierte cada día en
            una aventura!
          </p>
        </div>
        <div className={style.imagenesNosotros}>
          <div className={style.imagen1}>
            <Image
              className={style.img}
              src="/images/imagen4.jpg"
              alt="parque infantil"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
          <div className={style.imagenes2}>
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
          </div>
        </div>
      </div>
      <a href="#" className={className(style.btn, style.btnRojo)}>
        ¡Únete!
      </a>
    </>
  );
}

/*
const menu = document.querySelector('.hamburguesa');

const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerar();
}

const botonCerar = () =>{
    const btnCerar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    //if(document.querySelectorAll.length('.pantalla-completa') > 0) return;
    body.appendChild(overlay);
    btnCerar.textContent = 'x';
    btnCerar.classList.add('btn-cerar');
    console.log(navegacion.children);
    navegacion.appendChild(btnCerar);
    cerarMenu(btnCerar);
}

const cerarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });
    overlay.onclick = function() {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }

}

*/