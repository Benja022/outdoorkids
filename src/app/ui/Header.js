"use client";
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import Image from "next/image";
import style from "./Header.module.css";
import NavegadorHamburguesa from "./NavegadorHamburguesa";
import Navegador from "./Navegador";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
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
      <div>{isMobile ? <NavegadorHamburguesa /> : <Navegador />}</div>{" "}
    </header>
  );
}
