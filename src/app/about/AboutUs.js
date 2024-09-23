import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";

const teamMembers = [
  {
    name: "Olga Sorokina",
    role: "Full Stack Web Developer",
    description:
      "Capacitada para cualquier tarea, trabaja con tesón sin perder de vista el objetivo.",
    image: "/images/olga1.JPG",
  },
  {
    name: "Siwar Karoni",
    role: "Full Stack Web Developer",
    description:
      "Resolutiva y proactiva, se desenvuelve en cualquier entorno sin perder su instinto natural para el diseño.",
    image: "/images/yo.jpg",
  },
  {
    name: "Benjamín Mancera",
    role: "Full Stack Web Developer",
    description:
      "Siempre entre el Front y el Back. Cuidadoso en los detalles y apasionado por la programación.",
    image: "/images/FotoBenjamin.png",
  },
];

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>Sobre Nosotros</h2>
      <div className={styles.team}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <Image
              width={200}
              height={200}
              priority
              src={member.image}
              alt={member.name}
              className={styles.memberImage}
            />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
