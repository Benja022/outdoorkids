/* eslint-disable quotes */
"use client";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUser, FaQuestionCircle, FaTimes, FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "../AuthContext";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const { isLoggedIn, login, logout } = useAuth(); // Cambia a true para probar
  const [activeButton, setActiveButton] = useState("mapa");
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <header className={`${style.header} ${isScrolled ? style.scrolled : ""}`}>
        <div className={style.logoContainer}>
          <Link href="/">
            <Image
              className={style.logo}
              src="/images/logopng.png"
              alt="OutdoorKids Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <nav className={`${style.nav} ${isMenuOpen ? style.open : ""}`}>
          <ul className={style.navList}>
            <li>
              {isLoggedIn ? (
                <Link href="/">
                  <button onClick={logout} className={style.navItem}>
                    <FaUser className={style.icon} />
                    <span className={style.navText}>Cerrar sesión</span>
                  </button>
                </Link>
              ) : (
                <Link href="/iniciarSesion" className={style.navItem}>
                  <FaUser className={style.icon} />
                  <span className={style.navText}>Iniciar sesión</span>
                </Link>
              )}
            </li>
            <li>
              <Link href="/faq" className={style.navItem}>
                <FaQuestionCircle className={style.icon} />
                <span className={style.navText}>Preguntas frecuentes</span>
              </Link>
            </li>
          </ul>
          {isMobile && (
            <button className={style.menuToggle} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </nav>
      </header>

      {isLoggedIn && (
        <header className={style.secondaryHeader}>
          <nav className={style.secondaryNav}>
            <Link href="/perfilPrivado/vistaFamilia">
              <button
                className={`${style.navButton} ${
                  activeButton === "familia" ? style.active : ""
                }`}
                onClick={() => handleButtonClick("familia")}
              >
                Mi Familia
              </button>
            </Link>
            <Link href="/perfilPrivado/listadoParques">
              <button
                className={`${style.navButton} ${
                  activeButton === "mapa" ? style.active : ""
                }`}
                onClick={() => handleButtonClick("mapa")}
              >
                Mapa
              </button>
            </Link>
            <Link href="/perfilPrivado/vistaAgenda">
              <button
                className={`${style.navButton} ${
                  activeButton === "agenda" ? style.active : ""
                }`}
                onClick={() => handleButtonClick("agenda")}
              >
                Agenda
              </button>
            </Link>
          </nav>
        </header>
      )}
    </>
  );
}
