'use client'
import Image from "next/image";
import style from "./Inicio.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Inicio() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
    });
  }, []);

  return (
    <div className={style.pageBackground}>
      <div className={style.section + ' ' + style.textImage} data-aos="fade-up">
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
      
      <div className={style.section + ' ' + style.imageText} data-aos="fade-up">
        <div className={style.textImageSection}>
          <Image
            src="/images/imagen3.jpg"
            alt="familia en aire libre"
            width={600}
            height={400}
          />
        </div>
        <div className={style.textBlock}>
          <p>
            Con nuestro mapa interactivo, los pequeños exploradores pueden descubrir parques y actividades emocionantes que respetan y protegen el medio ambiente.
          </p>
        </div>
      </div>

      <div className={style.videoContainer} data-aos="fade-up">
        <iframe
          className={style.video}
          src="https://www.youtube.com/embed/ZtiOgqrDqso?autoplay=1&mute=1"
          title="video promocional OutdoorKids"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className={style.section + ' ' + style.textImage} data-aos="fade-up">
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
            className={style.image}
          />
        </div>
      </div>

      <div className={style.section + ' ' + style.imageText} data-aos="fade-up">
        <div className={style.textImageSection}>
          <Image
            src="/images/actividades"
            alt="actividades al aire libre"
            width={600}
            height={400}
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

