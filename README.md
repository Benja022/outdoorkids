### INICIAR EL PROYECTO DOCKERFILE

Este proyecto lleva incluido un dockerfile para poder ejecutarlo en un contenedor.
Si deseas  ponerlo en marcha, sigue los siguientes pasos:

1. Construye la imagen con el siguiente comando:
 `docker build -t outdoorkids .`

2. Pon en marcha el contenedor:
    `docker run -p 3000:3000 outdoorkids`

3. Abre tu navegador y escribe la siguiente dirección:
    `http://localhost:3000`

Para detener el contenedor en ejecución, sigue estos pasos:

1. Lista los contenedores en ejecución para obtener el `container_id` o `container_name`:

    ```sh docker ps
    ```

2. Detén el contenedor usando el `container_id` o `container_name`:

    ```sh
    docker stop <container_id>
    ```

    ó

    ```sh
    docker stop <container_name>
    ```

### INICIAR EL PROYECTO CON NEXTJS

#### SOLO LA PRIMERA VEZ

Esto instala la libreria npm

~~~
npm install -g pnpm
~~~

Instalamos el paquete del proyecto

~~~
pnpm i
~~~

#### TODAS LAS VECES

Para poner en marcha el proyecto

~~~
pnpm dev
~~~

#### PARA LAS CLASE DE CSS

Vamos a utilizar camelCase para los nombres de las clases. Ejemplo:

~~~
.buttonEntry {
display: inline-block;
border-radius: 3px;
}
~~~

**PARA USAR LA NOTACIÓN BEM HAY QUE USAR LITERALES**
Vamos a utilizar la notación de BEM. Se basa en seguir la estructura de bloques, elementos y modificadores. Ejemplo: para un botón de color rojo, el bloque sería el botón, el elemento sería el color y el modificador sería el rojo.

~~~
block block-modifier-value
"button button--state-success"
"button button--state-danger"
~~~

En el CSS qudará así:

~~~
.button {
 display: inline-block;
 border-radius: 3px;
l;
}
.button--state-success {
 color: #FFF;
 background: #569E3D 
    linear-gradient: #79D858, 
}
.button--state-danger {
 color: #900;
}
~~~

Como vamos a usar archivos module, en el className de los componentes, se añadirá el nombre del archivo CSS. Ejemplo:

~~~
className={styles['button--entry']}
~~~

**Para dar mas de una clase vamos a utilizar classNames.**

Se debe instarlar la libreria classNames:

~~~
npm install classnames
~~~

Y se importa de la siguiente manera:

~~~
import classNames from "classnames";
~~~

Se utiliza de la siguiente manera:

~~~
<button className={classNames(style.btn, style.btnInicio)}>
~~~

styles es el nombre del archivo CSS, se lo damos al generar la importacion de los estilos.

Ejemlo:

import **styles** from './ButtonEntry.module.css

Los nombres de los archivos con CSS deben ser el mismo que el del componente, pero con la extensión .module.css

Ejemplo:

ButtonEntry.js
ButtonEntry.module.css

Todos los componentes y sus hojas de estilo deben estar en la carpeta components.

**IMPORTATE**
Para facilitar la lectura del CSS, se deben poner las clases en el mismo orden, o lo más parecido posible, que en el HTML.

#### GIT

Para trabajar en la parte que hayamos elegido, debemos crear una rama con el nombre de la tarea que vamos a realizar. Luego, cuando hayamos terminado, hacemos un pull request a la rama principal. O solo subimos la rama y cuando lo comprobemos con un compañero lo mergeamos.

#### MEDIA QUERIES

Vamos a utilizar tres tamaños de pantalla: móvil, tablet y escritorio. Para ello, vamos a utilizar los siguientes tamaños:

- Móvil: <= 576px
- Tablet: 577px - 992px
- Escritorio: >= 993px

Si al ir montando la aplicación vemos que necesitamos más tamaños, los añadiremos.

#### SNIPPETS PARA NEXTJS

Instalar plugin ES7 React/Redux/GraphQL/React-Native snippets de **dsznajder**.

rafce: Crea un componente funcional con export por defecto

#### ROUTER Y LINKS

En nextjs el enrutado se crea mediante el arbol de carpetas. Dentro de la carpeta se crea un archivo pages.*
que será la ruta de la página. 

Para enlazar una página con otra se utiliza el componente Link de nextjs. De esta forma evitamos  que se recarge completamente la página.Y solo se renderiza el componente que se ha enlazado.

Ejemplo:

~~~
import Link from 'next/link';

<Link href="/ruta">
    <a>Texto</a>
</Link>
~~~






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### LIBRERIAS EXTERNAS A NEXTJS

- **react-icons**: Para utilizar iconos de FontAwesome.
- **classnames**: Para añadir más de una clase a un componente.
- **aos**: Para añadir animaciones a los componentes.
- **react-drag-and-drop-files**: Para añadir la funcionalidad de arrastrar y soltar.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


