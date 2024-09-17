"use client";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUser, FaQuestionCircle, FaTimes, FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set initial values
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

  return (
    <header className={`${style.header} ${isScrolled ? style.scrolled : ""}`}>
      <div className={style.logoContainer}>
        <Link href="/">
          <Image
            className={style.logo}
            src="/images/Logo.jpg"
            alt="OutdoorKids Logo"
            width={80}
            height={80}
          />
        </Link>
        <Link href="/">
          <h1 className={style.title}>OutdoorKids</h1>
        </Link>
      </div>
      <nav className={`${style.nav} ${isMenuOpen ? style.open : ""}`}>
        <ul className={style.navList}>
          <li>
            <Link href="/iniciarSesion">
              <FaUser className={style.icon} />
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <FaQuestionCircle className={style.icon} />
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
  );
}
