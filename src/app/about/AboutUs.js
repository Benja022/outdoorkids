import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";

const teamMembers = [
  {
    name: "Juan Pérez",
    role: "Desarrollador Frontend",
    description:
      "Juan es un experto en React y tiene más de 5 años de experiencia en desarrollo frontend.",
    image: "/images/member1.jpg",
  },
  {
    name: "María García",
    role: "Desarrolladora Backend",
    description:
      "María se especializa en Node.js y ha trabajado en varios proyectos de gran escala.",
    image: "/images/member2.jpg",
  },
  {
    name: "Carlos López",
    role: "Diseñador UX/UI",
    description:
      "Carlos tiene un ojo para el diseño y se asegura de que nuestras aplicaciones sean intuitivas y atractivas.",
    image: "/images/member3.jpg",
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
              src={"/images/estrella.png"}
              // src={member.image}
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
