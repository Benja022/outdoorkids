"use client";
import style from "./Footer.module.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.contactInfo}>
          <h3>Contacto</h3>
          <p>Email: OutdoorKids@gmail.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className={style.siteLinks}>
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><Link href="/about">Acerca de nosotros</Link></li>
            <li><Link href="/privacy-policy">Política de Privacidad</Link></li>
            <li><Link href="/terms">Términos de Servicio</Link></li>
          </ul>
        </div>

        <div className={style.socialMedia}>
          <h3>Síguenos</h3>
          <div className={style.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>&copy; {new Date().getFullYear()} OutdoorKids. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
