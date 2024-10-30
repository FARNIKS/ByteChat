# Chat en Tiempo Real con WebSocket - Versión 1.0

Este es un proyecto de aplicación de chat en tiempo real utilizando **Spring Boot** y **WebSocket**. La aplicación permite a múltiples usuarios conectarse y participar en un chat grupal, donde pueden enviar y recibir mensajes instantáneamente.

## Características

- **Conexión en Tiempo Real**: Los usuarios pueden enviar y recibir mensajes al instante.
- **Interfaz Amigable**: Desarrollado en HTML y JavaScript.
- **STOMP sobre WebSocket**: Utiliza el protocolo STOMP para la comunicación de mensajes y suscripción a temas.

## Mejoras Futuras

- **Integración de Base de Datos**: Agregar almacenamiento persistente para mensajes.
- **Despliegue en Servidor con Docker**: Preparar la aplicación para ejecutarse en entornos de producción utilizando Docker.

## Instalación y Configuración

### Prerrequisitos
- Java 17 o superior.

### Paso a Paso

1. **Clona el Repositorio**:
   ```bash
   git clone https://github.com/tuusuario/tu-repo.git
   cd tu-repo
   ```
2.Compila y Ejecuta el Proyecto:
  ```
  ./mvnw spring-boot:run
  ```
3. Accede a la Aplicación:
- Abre un navegador y ve a `http://localhost:8080`.

### Uso de la Aplicación
1. En la interfaz, ingresa tu nombre de usuario y un mensaje.
2. Presiona el botón Enviar para enviar el mensaje a todos los usuarios conectados.
3. Los mensajes se mostrarán en la lista de mensajes en tiempo real.

### Endpoints Principales
- WebSocket Endpoint: `/websocket`
- Suscripción a mensajes: `/tema/mensajes`
- Envío de mensajes: `/app/envio`

### Estructura del Proyecto
- **/config:** Configuración de WebSocket en Spring Boot.
- **/controller:** Controlador que maneja el envío y recepción de mensajes.
- **/model:** Modelos de datos para los mensajes.
