# sesion8

Si creas una copia de este repo en local, asegúrate de instalar las siguientes dependencias.

Primero inicia un nuevo proyecto con el comando
```
npm init -y
```

Instala express body-parser y cors
```
npm install express body-parser cors
```

Instala nodemon de manera global:
```
npm install -g nodemon
```

Asegurate de incluir las siguientes dos líneas dentro del objeto "scripts" del archivo package.json:
```
"start": "node ./app.js",
"dev": "nodemon ./app.js",
```

Instalar Sequelize con el siguiente comando de npm:
```
npm install sequelize
```

El dialecto para poder usar PstreSQL con Sequelize:
```
npm install --save pg pg-hstore
```

Instalar el paquete router utilizando npm con el siguiente comando dentro de la carpeta del proyecto:

```
npm install routerjs
```

Instalamos las dependencias necesarias de seguridad
```
npm install crypto jsonwebtoken passport passport-local express-jwt
```

Instalar dotenv modulo localmente, para variables de ambiente
```
npm install dotenv --save
```

Installar swagger para documentar funcionamiento de la API
```
npm i swagger-jsdoc swagger-ui-express
```