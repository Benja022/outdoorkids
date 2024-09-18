'use client'
import React from 'react';
import style from "./Inicio.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function Inicio() {
  const [backgroundClass, setBackgroundClass] = useState(style.pageBackground1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Simular carga de contenido
    setTimeout(() => setLoading(false), 3000); // Simula tiempo de carga de 3 segundos
  }, []);

  return (
    <>
      <Head>
        <title>OutdoorKids - Explora la Naturaleza</title>
        <meta name="description" content="Descubre parques y actividades para niños al aire libre con OutdoorKids. Regístrate para explorar y aprender más sobre la naturaleza." />
        <meta name="keywords" content="parques, actividades para niños, naturaleza, aventura, exploración" />
        <meta name="robots" content="index, follow" />
      </Head>
      {loading && <div className="spinner"></div>}
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
            Sorry, your browser does not support HTML5 video.
          </video>
          <div className={style.overlayText}>
            <h1 className={style.welcomeText}>¡Bienvenido a OutdoorKids!</h1>
          </div>
        </section>

        {/* Secciones de contenido */}
        <div className={`${style.section} ${style.textImage}`} data-aos="fade-up">
          <div className={style.textBlock}>
            <h1 className={style.welcomeText}>Descubre la Naturaleza</h1>
            <p>
              Nuestra misión es inspirar a los niños a explorar y disfrutar al máximo del mundo natural, 
              mientras adquieren valiosas lecciones sobre la importancia de cuidarlo y preservarlo para las 
              futuras generaciones. A través de la aventura y el juego, queremos fomentar en ellos un profundo 
              amor y respeto por el medio ambiente.
            </p>
          </div>
          <div className={style.textImageSection}>
            <Image
              src="/images/imagen4.jpg"
              alt="Parque infantil con niños jugando"
              width={400}
              height={400}
            />
          </div>
        </div>
        
        <div className={style.marquee}>
  <div className={style.marqueeText}>
    OutdoorKids: Juegos Verdes, Futuro Seguro.
  </div>
  <div className={style.marqueeContent}>
    {Array.from({ length: 2 }, (_, i) => (
      <React.Fragment key={i}>
        <Image
          src="/images/parquebolas.jfif"
          alt="Parque de bolas"
          width={300}
          height={200}
        />
        <Image
          src="/images/museoavion.jpg"
          alt="Museo de aviación"
          width={300}
          height={200}
        />
        <Image
          src="/images/parqueagua.webp"
          alt="Parque de agua"
          width={300}
          height={200}
        />
        <Image
          src="/images/parquenatural.jfif"
          alt="Parque natural"
          width={300}
          height={200}
        />
        <Image
          src="/images/parquetesoro.jfif"
          alt="Parque del tesoro"
          width={300}
          height={200}
        />
        <Image
          src="/images/acuario.jfif"
          alt="Acuario"
          width={300}
          height={200}
        />
        <Image
          src="/images/agua.jpg"
          alt="Parque del agua"
          width={300}
          height={200}
        />
        <Image
          src="/images/columpio.jpg"
          alt="Parque del columpio"
          width={300}
          height={200}
        />
        <Image
          src="/images/museo.jfif"
          alt="Museo"
          width={300}
          height={200}
        />
        <Image
          src="/images/tobogan.jfif"
          alt="Parque del tobogán"
          width={300}
          height={200}
        />
        <Image
          src="/images/plaza.webp"
          alt="Plaza"
          width={300}
          height={200}
        />
      </React.Fragment>
    ))}
  </div>
</div>



        <div className={`${style.section} ${style.imageText}`} data-aos="fade-up">
          <div className={style.textImageSection}>
            <Image
              src="/images/jugando.avif"
              alt="Familia en aire libre"
              width={600}
              height={400}
            />
          </div>
          <div className={style.textBlock}>
            <p>
              Con nuestro mapa interactivo, los pequeños exploradores tendrán la oportunidad de descubrir una
              amplia variedad de parques y actividades diseñadas específicamente para ellos, en entornos que
              promueven la diversión mientras se respeta y protege el medio ambiente. Ya sea que busquen
              espacios verdes para jugar o actividades al aire libre llenas de aprendizaje, nuestro mapa
              los guiará hacia experiencias inolvidables, fomentando su conexión con la naturaleza.
            </p>
          </div>
        </div>

        <div className={`${style.section} ${style.textImage}`} data-aos="fade-up">
          <div className={style.textBlock}>
            <h2>¡Únete a la Aventura!</h2>
            <p>
              Regístrate en OutdoorKids para comenzar tu emocionante viaje hacia la exploración y el descubrimiento. 
              Al convertirte en parte de nuestra comunidad, tendrás acceso a una amplia gama de lugares increíbles y
              actividades divertidas diseñadas para inspirar y educar. Desde parques asombrosos hasta experiencias al aire
              libre únicas, te ofrecemos la oportunidad de disfrutar de la naturaleza mientras te diviertes y aprendes. 
              No pierdas la oportunidad de ser parte de esta emocionante aventura que te conectará con lo mejor de la 
              vida al aire libre.
            </p>
          </div>
          <div className={style.textImageSection}>
            <Image
              src="/images/imagen5.avif"
              alt="Exploradores"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className={`${style.section} ${style.imageText}`} data-aos="fade-up">
          <div className={style.textImageSection}>
            <Image
              src="/images/airelibre.jpg"
              alt="Actividades al aire libre"
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

        {/* Sección de video al final */}
        <div className={style.videoContainer} data-aos="fade-up">
          <iframe
            src="https://www.youtube.com/embed/ZtiOgqrDqso?autoplay=1&mute=1"
            title="Video Promocional"
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={style.ctaButton}>
            <Link href="/registro">
              <button className={style.scheduleButton}>¡Únete!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
