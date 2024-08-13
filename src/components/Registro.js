import React from 'react';
import style from './Registro.module.css'

export default function Registro () {
    return (
        <div>
        <header>

        <div className={style["Logo"]}>
            <img src="images/Logo.jpg"></img>
        </div>
        <nav>
    
            <h6>OutdoorKids</h6>
            <button className={style["btn btnInicio"]}>Inicio</button>
        <button className={style["btn btnRegistrate"]}>Registrate</button>
        <button className={style["btn btnIniciarSec"]}>Iniciar secion</button>
        <button className={style["btn btnPreguntas"]}>Preguntas frecuentes</button>
        </nav>
    </header>
    </div>
    )
  }document.getElementById("formulario-registro").addEventListener("submit", function(event)
   {  var email = document.getElementById("email").value;  var emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
      if (!emailRegex.test(email)) {    event.preventDefault();
            alert("Por favor ingrese un correo electrónico válido.");  }});