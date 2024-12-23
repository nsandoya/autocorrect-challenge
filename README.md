# Autocorrect Challenge

**Tecnologías usadas** - React | Yarn | Vite

## Análisis del problema

La premisa del desafío consiste en crear una web app que, al detectar palabras mal escritas mientras el usuario ingresa su texto en un input, las corrija. Esto debe suceder en tiempo real, no cuando el usuario haya terminado de escribir y/o o haga click en un botón. También es adecuado detectar coincidencias, aún cuando la palabra tenga mayúsculas.

## 💻 Diseño y Desarrollo de la solución
Pensé adecuado dividir el código en dos partes, procurando que la web app sea escalable y mantenible:

- `useAutocorrect.jsx`: Custom hook que contiene la lógica necesaria para detectar ciertas palabras mal escritas (según su pequeño diccionario interno) y reemplazarlas automáticamente por su forma correcta.
- `TextArea.jsx` : Componente que consume `useAutocorrect` y renderiza el `<textarea>` donde el usuario ingresará su texto, ejecutando autocorrecciones según sea necesario.

## Instrucciones: Cómo ejecutar la aplicación
🤖 **Despliegue**
1. Para descargar el fichero en tu PC, puedes dirigirte al botón `Code → SSH`, en la página principal del repositorio del proyecto.
2. Este es el momento ideal para abrir tu términal. Escribe: `git clone [enlace SSH del proyecto]`.
3. Ubícate en la carpeta del proyecto, e instalar todos los paquetes del proyecto (y yarn, si es necesario): `yarn install`
4. Finalmente, escribe `yarn dev`. ¡Enjoy!

👩🏻‍💻 **Cómo funciona**
1. Escribes tu texto normalmente (typos + whitespace incluido :) )
2. Si la app detecta una de las palabras mal escritas incluidas en el diccionario, automáticamente las corregirá --no hace falta presionar un botón o dejar de escribir
