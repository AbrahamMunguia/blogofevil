This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

# Instrucciones
 Para este ejercicio sencillo, usaremos todo lo instalado
 * Nextjs 15
 * React 19
 * Tailwind 
 La idea es simple:
 Usando todas las herramientas disponibles para diseñar un sistema de blog.
 Eres un usuario el cual mandara un mensaje y el blog lo publicara.
 El examen esta divido en 3 partes, no te preocupes por los estilos, prioriza funcionalidad y buenas practicas. Lo estetico dale menor relevancia.

## Paso 1
Crear un blog-post. La idea es tener una caja de texto sencilla(TextArea /Components/TextAreaInput), donde escriban ideas y con un boton las publiquen (Components/Button/Button.tsx).
* Crear una manera de capturar el comentario
* Al presionar el boton este manda el comentario y lo muestra en la seccion (/IdeaContainer/Container.tsx)
  * Nota: Se puede usar contexto o reducer si este facilita el ejercicio
* El contenedor de comentarios recibe este y lo renderiza, pudiendo mostrar todos de manera FIFO
## Paso 2
Una vez terminado se podran mandar a una API interna (/api/myideas) la idea es guardarlos en el objeto singleton para persistencia. 
* Puedes usar 'use client' o 'use server' a gusto
* Es valido hacer refresh despues de cada comment, solo se evalua el uso de POST/GET
* NOTA: Al ser un singleton vive en la memoria temporal no desactives la consola o la reinicies para que este persista
* La api funciona con POST y GET 
* Es como usar ExpressJS para facilitar el ejercicio y comprension
* Los comentarios se renderizan sin ningun problema y se mandan. Puntos extra por hacer updates optimistas

## Paso 3 - Puntos extra - Opcionales
No hay un orden de ataque aqui, diviertete y se creativo
* Bloquear el boton cuando este no detecte ningun caracter escrito en la caja de texto
* Agregar la opcion DELETE para borrar comentarios
* Hacer que la caja de Texto use Debounce
* Manejar fechas para los comentarios
* Crear interfaces y tipificaciones