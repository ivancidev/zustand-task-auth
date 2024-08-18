# Task Manager con Autenticación-Firebase

Este proyecto es una aplicación de gestión de tareas que incluye autenticación básica utilizando Firebase y Zustand. Los usuarios pueden registrarse, iniciar sesión, gestionar sus tareas y cerrar sesión. La aplicación está construida con React y Bootstrap y utiliza una estructura de carpetas organizada para un mantenimiento eficiente del código.

## Características

- **Autenticación de Usuarios**: Registro, inicio de sesión y cierre de sesión utilizando Firebase Authentication.
- **Gestión de Tareas**: Añadir, editar y listar tareas con una interfaz sencilla.
- **Navegación**: Navegación entre páginas utilizando React Router DOM.
- **Estado Global**: Gestión del estado de la autenticación y de las tareas usando Zustand.
- **Componentización**: Código modular y reutilizable con componentes separados para inputs, botones, formularios, etc.

## Screenshots:
## Login
[![Captura-de-pantalla-2024-08-17-202633.png](https://i.postimg.cc/6qJkXSLp/Captura-de-pantalla-2024-08-17-202633.png)](https://postimg.cc/TL07jt4z)

## Register
[![Captura-de-pantalla-2024-08-17-202659.png](https://i.postimg.cc/tCzLKB19/Captura-de-pantalla-2024-08-17-202659.png)](https://postimg.cc/KRRqLrrW)

## Task-Manager
[![Captura-de-pantalla-2024-08-17-204935.png](https://i.postimg.cc/qvzj1wyb/Captura-de-pantalla-2024-08-17-204935.png)](https://postimg.cc/yDCmdFfc)

## Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/ivancidev/zustand-task-auth.git
    ```

2. **Instala las dependencias**:

    ```bash
    cd zustand-auth-firebase
    npm install
    ```

### Configuración de Credenciales de Firebase

Para conectar tu aplicación con Firebase, sigue estos pasos:

1. **Crea un Proyecto en Firebase:**
   - Visita [Firebase Console](https://console.firebase.google.com/).
   - Haz clic en **"Add Project"** y sigue las instrucciones para crear un nuevo proyecto.

2. **Configura la Aplicación Web:**
   - Una vez que el proyecto esté creado, selecciona el proyecto y navega a la sección **"Project Overview"** (Resumen del proyecto).
   - Haz clic en el ícono `</>` para agregar una aplicación web.
   - Dale un nombre a la aplicación y regístrala.

3. **Obtén las Credenciales:**
   - Después de registrar la aplicación, Firebase te proporcionará las credenciales necesarias. Estas se verán como un objeto de configuración de Firebase en JavaScript.
   - Copia estas credenciales y pégalas en tu archivo `.env` con las siguientes variables de entorno:

    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

4. **Agrega el Archivo `.env` a tu Proyecto:**
   - Crea un archivo `.env` en la raíz de tu proyecto y pega las credenciales que copiaste.

Para obtener más detalles, consulta la [documentación oficial de Firebase](https://firebase.google.com/docs/web/setup).

5. **Ejecuta la aplicación**:

    ```bash
    npm run dev
    ```

6. **Construcción para producción**:

    ```bash
    npm run build
    ```



