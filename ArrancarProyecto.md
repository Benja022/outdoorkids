#### SOLO LA PRIMERA VEZ:
Esto instala la libreria npm

~~~
npm install -g pnpm
~~~

Instalamos el paquete del proyecto

~~~
pnpm i
~~~

#### TODAS LAS VECES:
Para poner en marcha el proyecto 
~~~
pnmp dev
~~~

#### PARA LAS CLASE DE CSS:

Vamos a utilizar la natación de BEM. Se basa en seguir la estructura de bloques, elementos y modificadores. Ejemplo: para un botón de color rojo, el bloque sería el botón, el elemento sería el color y el modificador sería el rojo.

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
	background: #569E3D linear-gradient(#79D858, 
}
.button--state-danger {
	color: #900;
}
~~~

Como vamos a usar archivos module, en el className de los componentes, se añadirá el nombre del archivo CSS. Ejemplo:

~~~
className={styles['button--entry']}
~~~

styles es el nombre del archivo CSS, se lo damos al generar la importacion de los estilos.

Ejemlo:

import **styles** from './ButtonEntry.module.css

Los nombres de los archivos con CSS deben ser el mismo que el del componente, pero con la extensión .module.css

Ejemplo:

ButtonEntry.js
ButtonEntry.module.css

Todos los componentes y sus hojas de estilo deben estar en la carpeta components. 

#### GIT 

Para trabajar en la parte que hayamos elegido, debemos crear una rama con el nombre de la tarea que vamos a realizar. Luego, cuando hayamos terminado, hacemos un pull request a la rama principal. O solo subimos la rama y cuando lo comprobemos con un compañero lo mergeamos.