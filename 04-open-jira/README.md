# Next.js OpenJira APP
Para correr localmente, se necesita la base de datos

# Proyecto tiene diferentes enfoques 
```
docker-compose up -d

```
* La -d significa _detached_

* MongoDB URL Local:

mongodb://localhost:27017/entriesdb


# Configurar las variables de entorno

Renombrar el archivo __.env.template__ a __.env__

# Llenar la base de datos con información de pruebas

Llamar a la URL: 

```
    http://localhost:3000/api/seed
```