// import React from "react";
// import style from "./IniciarSesion.module.css";
// import Image from "next/image";
// import Link from "next/link";

// export default function IniciarSesion() {
//   return (
//     <div className={style.body}>
//       <div className={style.formContainer}>
//         <Image
//           className={style.logo}
//           src="/images/Logo.jpg"
//           alt="logo"
//           width={120}
//           height={120}
//           layout="intrinsic"
//         />
//         <form action="/registro.php" id="formulario-registro">
//           <legend className={style.legend}>Inicia Sesión</legend>
//           <label htmlFor="correo" className={style.label}>Correo Electrónico:</label>
//           <input type="email" id="correo" name="correo" className={style.input} required />
//           <label htmlFor="password" className={style.label}>Contraseña:</label>
//           <input type="password" id="password" name="password" className={style.input} required />
//           <Link href="/perfilPrivado">
//             <input className={style.btn} type="submit" value="Enviar" />
//           </Link>
//           <p className={style.link}>¿No tienes cuenta?</p>
//           <Link href="/registro" className={style.link}>
//             Regístrate
//           </Link>
//         </form>
//         <div className={style.cardImage}>
//           <Image
//             src="/images/imagenAbajoDeReistro.png"
//             alt="Imagen de registro"
//             width={300}
//             height={200}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import style from "./IniciarSesion.module.css";
import Image from "next/image";
import Link from "next/link";

export default function IniciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirigir al usuario a la página correspondiente
        window.location.href = "/perfilPrivado";
      } else {
        setError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError(
        
        "Error al conectar con el servidor. Por favor, inténtalo de nuevo."
      );
      console.log(error)
    }
  };

  return (
    <div className={style.body}>
      <div className={style.formContainer}>
        <Image
          className={style.logo}
          src="/images/Logo.jpg"
          alt="logo"
          width={120}
          height={120}
        />
        <form onSubmit={handleSubmit} className={style.loginForm}>
          <h2>Iniciar Sesión</h2>
          {error && <p className={style.error}>{error}</p>}
          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={style.loginButton}>
            Login
          </button>
        </form>
        <Link href="/registro" className={style.registerLink}>
          ¿No tienes una cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}
