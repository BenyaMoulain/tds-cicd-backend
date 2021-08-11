# Tarea de Taller de Diseño de Sistemas

La tarea de esta semana consiste en generar un entorno de Integración y despliegue continuo CI/CD

## Autores

Benjamín Molina - 201573005-9

## Requisitos

Construido con

- NodeJs v14.15.4
- Typescript
- Express

## Comandos de aplicacion

El comando npm run dev fue probado en un entorno de Linux,
ejecutarlo en Windows puede requerir librerias externas o una adaptación del comando

```shell

# instalacion de dependencias
npm install

# preparacion de git hook
npm run prepare

# ejecucion de solucion en ambiente desarrollo
npm run dev

npm run dev:debug

# ejecucion de los tests unitarios
npm run test:unit

# ejecucion de los tests de integracion
npm run test:integration

# ejecucion de ambos tests
npm run test

# ejecucion de cobertura de codigo y obtencion del reporte (ubicado en folder ./coverage/lcov-report/index.html)
npm run coverage

# ejecucion de checkeo de prettier (code formatter)
npm run prettier:check

# ejecucion de autoformateado de prettier (code formatter)
npm run prettier:format

# ejecucion de checkeo de linter (analisis estatico de codigo)
npm run lint

# ejecucion de formateo de linter (analisis estatico de codigo)
npm run lint:fix

# construccion de imagen docker
npm run docker:build

# ejecucion de imagen docker construida
npm run docker:run

# compilacion de typescript del proyecto
npm run compile

# ejecucion en ambiente de produccion
npm start
```
