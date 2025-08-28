> [!NOTE]
> No olvidar el token para poder instalar paquetes privados.

> [!IMPORTANT]
> El token debe estar en el archivo `.npmrc` en la raíz del proyecto. Y también para agregar la variable de entorno en Windows podemos ejecutar el comando `setx <nombre-variable> <valor variable>`.

> [!TIP]
> Para poder instalar paquetes privados, debe crear un token de acceso personal (secret) en el repositorio de GitHub.

# Paquetes utilizados

```bash
npm i -D @babel/cli @babel/preset-env @babel/preset-typescript @types/express @types/jsonwebtoken cross-env

npm i express typescript cloudinary mongoose @elastic/elasticsearch http-status-codes winston winston-elasticsearch
```

> [!WARNING]
> Para instalar nuestro paquete en los microservicios debemos tener el token registrado en nuestros secretos o en variables de entorno del sistema operativo.

> [!CAUTION]
> No dejar credenciales a la vista en el repositorio.

# Utilidades

- [Trabajar con Actions y NPM](https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
