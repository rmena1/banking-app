# BankingAPP

Esta aplicación es la solución al desafío técnico de CurrencyBird. Esta fue desarrollada en React.

La aplicación fue deployada en Heroku, en el siguiente link: https://currencybird-banking-app.herokuapp.com/

## Deploy local

Para correr la aplicación localmente, se debe clonar el repositorio y crear un archivo .env en la raíz de este, con los mismos contenidos que el archivo .env.template del repositorio. Luego, se deben correr los siguientes comandos para ejecutar el ambiente de producción:

```shell
yarn install
yarn start-dev
```

Por otro lado, si se desea ejecutar el ambiente de deploy, se deben ejecutar los siguientes comandos:

```shell
yarn install
yarn build
yarn start
```

De esta forma se creará un build optimizado de la aplicación y este se ejecutará desde un pequeño servidor desarrollado en Express incluido en la aplicación.

