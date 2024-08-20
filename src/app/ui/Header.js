
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import Image from "next/image";
import style from "./Header.module.css";

export default function Header () {
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
    </header>
  );
}
