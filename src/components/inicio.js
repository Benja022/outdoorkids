const menu = document.querySelector('.hamburguesa');

const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerar();
}

const botonCerar = () =>{
    const btnCerar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    //if(document.querySelectorAll.length('.pantalla-completa') > 0) return;
    body.appendChild(overlay);
    btnCerar.textContent = 'x';
    btnCerar.classList.add('btn-cerar');
    console.log(navegacion.children);
    navegacion.appendChild(btnCerar);
    cerarMenu(btnCerar);
}

const cerarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });
    
    overlay.onclick = function() {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }

}

