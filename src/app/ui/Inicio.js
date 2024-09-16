"use client";
import style from "./Inicio.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Inicio() {
  const [backgroundClass, setBackgroundClass] = useState(style.pageBackground1);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
    });
  }, []);

  return (
    <div className={backgroundClass}>
      {/* Sección de video en el header */}
      <section id="banner" className={style.videoSection}>
        <video
          className={style.video}
          preload="auto"
          autoPlay
          loop
          muted
        >
          <source src="/videos/niñosheader.mp4" type="video/mp4" />
          {/* Puedes añadir más fuentes si tienes otros formatos */}
          Sorry, your browser does not support HTML5 video.
        </video>
        <div className={style.overlayText}>
          <h1 className={style.welcomeText}>¡Bienvenido a OutdoorKids!</h1>
        </div>
      </section>

      {/* Sección de video al principio */}
      <div className={style.videoContainer} data-aos="fade-up">
        {/* Puedes añadir un segundo video aquí si lo deseas */}
      </div>

      {/* Secciones de contenido */}
      <div className={`${style.section} ${style.textImage}`} data-aos="fade-up">
        <div className={style.textBlock}>
          <h1 className={style.welcomeText}>Descubre la Naturaleza</h1>
          <p>
            Nuestra misión es inspirar a los niños a disfrutar de la naturaleza
            mientras aprenden la importancia de protegerla.
          </p>
        </div>
        <div className={style.textImageSection}>
          <Image
            src="/images/imagen4.jpg"
            alt="parque infantil"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className={`${style.section} ${style.imageText}`} data-aos="fade-up">
        <div className={style.textImageSection}>
          <Image
            src="/images/jugando.avif"
            alt="familia en aire libre"
            width={800}
            height={500}
          />
        </div>
        <div className={style.textBlock}>
          <p>
            Con nuestro mapa interactivo, los pequeños exploradores pueden descubrir parques y actividades emocionantes que respetan y protegen el medio ambiente.
          </p>
        </div>
      </div>

      <div className={`${style.section} ${style.textImage}`} data-aos="fade-up">
        <div className={style.textBlock}>
          <h2>¡Únete a la Aventura!</h2>
          <p>
            Regístrate en OutdoorKids y empieza a explorar un mundo lleno de maravillas naturales. Descubre lugares increíbles y participa en actividades divertidas.
          </p>
        </div>
        <div className={style.textImageSection}>
          <Image
            src="/images/imagen5.avif"
            alt="exploradores"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className={`${style.section} ${style.imageText}`} data-aos="fade-up">
        <div className={style.textImageSection}>
          <Image
            src="/images/airelibre.jpg"
            alt="actividades al aire libre"
            width={800}
            height={500}
          />
        </div>
        <div className={style.textBlock}>
          <p>
            Explora y únete a nuestra comunidad para mantener a tus hijos activos y conectados con la naturaleza.
          </p>
        </div>
      </div>

      <div className={style.ctaButton} data-aos="fade-up">
        <button className={style.btn}>¡Únete!</button>
      </div>
    </div>
  );
}
