## Creador y gestion de tareas

Este proyecto representa una aplicación de gestión de tareas breves diseñada para simplificar la organización y el seguimiento eficaz de las tareas pendientes. Facilita a los usuarios la capacidad de añadir nuevas tareas, actualizar su estado y eliminarlas una vez completadas.

## Instrucciones de Instalacion

1. Clona el repositorio: 
2. Instala las dependencias: `npm install`

## Configuracion 

1. Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias.

    SANITY_API_TOKEN=<Tu token de sanity>

## Como utilizar 

1.  Inicia el servidor `npm start`
2. Accede a Swagger UI en tu navegador: http://localhost:3000/api-docs
Esto proporcionará una interfaz interactiva para probar y explorar las API.

## Documentacion 

La documentación de la API se genera automáticamente mediante Swagger. Puedes acceder a ella en http://localhost:3000/api-docs.
La API incluye los siguientes puntos finales:

1. GET /task: Obtiene todas las tareas.
2. POST /task: Agrega una nueva tarea.
3. PUT /task/:id: Actualiza una tarea existente.
4. DELETE /task/:id: Elimina una tarea existente.


Esta estructura organizativa proporciona una guía clara para la instalación, configuración y uso del gestor de tareas, junto con una descripción concisa de los puntos finales de la API.
