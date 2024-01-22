# Proyecto de Desafío Adoclick

Este proyecto es parte del desafío propuesto por Adoclick. Puedes encontrar más detalles sobre el desafío en [este enlace](https://github.com/adoclicdotcom/prueba_angular_2).

## Guía de instalación

### Requisitos Previos

- Angular 16

### Pasos para levantar el proyecto 🚀

1. **Clona el Repositorio:**

    ```bash
    git clone https://github.com/maurogs1/adoclick_challenge.git
    cd adoclick_challenge
    ```

2. **Instalar las dependencias:**

    ```bash
    npm install
    ```

3. **Levantar el proyecto:**

    Estando en la raíz del proyecto, ejecuta el siguiente comando:

    ```bash
    ng serve
    ```

   Para ejecutar las pruebas unitarias (se abrirá un navegador o por consola para ver los resultados):

    ```bash
    ng test
    ```

## Pruebas Unitarias

El proyecto contiene pruebas unitarias para validar el funcionamiento de los servicios y componentes clave. Aquí se presenta un resumen de las pruebas realizadas:

### 1. AuthService

**1.1 should initialize "userIsLogged" as true from local storage:**
- *Resultado Esperado:* El servicio debería inicializar la propiedad userIsLogged como verdadera si existe un valor "true" en el almacenamiento local.
- *Interpretación del Resultado:* La prueba pasa si el servicio inicializa userIsLogged correctamente según el valor almacenado localmente.

**1.2 should return true and set "userIsLogged" on successful login:**
- *Resultado Esperado:* La función de inicio de sesión debería devolver verdadero y establecer userIsLogged en verdadero en caso de inicio de sesión exitoso
- *Interpretación del Resultado:* La prueba pasa si el resultado de la función de inicio de sesión es verdadero y userIsLogged se establece en verdadero

**1.3 should return false and not set "userIsLogged" on unsuccessful login:**
- *Resultado Esperado:* La función de inicio de sesión debería devolver falso y no establecer userIsLogged en verdadero en caso de inicio de sesión no exitoso
- *Interpretación del Resultado:* La prueba pasa si el resultado de la función de inicio de sesión es falso y userIsLogged no se establece en verdadero

**1.4 should logout user and update userIsLogged on logout:**
- *Resultado Esperado:* La función de cierre de sesión debería actualizar userIsLogged a falso y eliminar el ítem del almacenamiento local
- *Interpretación del Resultado:* La prueba pasa si userIsLogged se establece en falso y se llama correctamente a removeItem del almacenamiento local

**1.5 should return the correct token with getAuthToken:**
- *Resultado Esperado:* La función getAuthToken debería devolver el token correcto
- *Interpretación del Resultado:* La prueba pasa si el token devuelto es igual al valor esperado

### 2. ProductService

**2.1 should be created:**
- *Resultado Esperado:* El servicio ProductService debería crearse correctamente
- *Interpretación del Resultado:* La prueba pasa si el servicio se crea sin errores

**2.2 should get products from the API:**
- *Resultado Esperado:* El servicio debería obtener productos de la API
- *Interpretación del Resultado:* La prueba pasa si los productos obtenidos son iguales a los productos simulados (mockedProducts)

**2.3 should get a product by id from the API:**
- *Resultado Esperado:* El servicio debería obtener un producto por ID de la API
- *Interpretación del Resultado:* La prueba pasa si el producto obtenido por ID es igual al producto simulado (mockedOneProduct)

**2.4 should get categories from the API:**
- *Resultado Esperado:* El servicio debería obtener categorías de la API
- *Interpretación del Resultado:* La prueba pasa si las categorías obtenidas son iguales a las categorías simuladas (mockCategories)

**2.5 should get products by category from the API:**
- *Resultado Esperado:* El servicio debería obtener productos por categoría de la API
- *Interpretación del Resultado:* La prueba pasa si los productos obtenidos por categoría son iguales a los productos simulados (mockedProductsByMensClothingCategory).

### 3. Login.component

**3.1 should call a login method:**
- *Resultado Esperado:* La función login del servicio AuthService debería ser llamada con los parámetros correctos
- *Interpretación del Resultado:* La prueba pasa si la función login del servicio se llama con los valores esperados del formulario

**3.2 should navigate to "/shopping" on successful login:**
- *Resultado Esperado:* Después de un inicio de sesión exitoso, se debería navegar a la ruta "/shopping"
- *Interpretación del Resultado:* La prueba pasa si la aplicación navega a la ruta correcta después de un inicio de sesión exitoso

**3.3 should display error messages when password is invalid and email is invalid:**
- *Resultado Esperado:* Cuando las credenciales son inválidas, deberían mostrarse mensajes de error y las validaciones del formulario deberían activarse
- *Interpretación del Resultado:* La prueba pasa si se muestra el mensaje de error correcto y se activa la validación de formulario correspondiente

**3.4 should set loading to false on both successful and unsuccessful login:**
- *Resultado Esperado:* El indicador de carga (loading) debería establecerse en falso tanto en un inicio de sesión exitoso como en uno no exitoso
- *Interpretación del Resultado:* La prueba pasa si el indicador de carga se establece correctamente después de un inicio de sesión

