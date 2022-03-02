# Como crear un proyecto de React sin create-react-app

## Inicializacion del proyecto

Iniciamos **git** y **npm** con los comandos:

```sh
git init

npm init -y
```

Ademas es necesario la instalacion de React y ReactDom

```sh
npm i react react-dom
```

## Estructura del proyecto

📦public
┗ 📜index.html
📦src
┣ 📂components
┃ ┗ 📜App.jsx
┗ 📜index.js

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Platzi Conf Store</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### index.js

```js
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("app"));
```

### App.jsx

```js
import React from "react";

const App = () => <h1>Hola Mundo !</h1>;

export default App;
```

## Instalación y configuración de **webpack** y **Babel**

### Instalación

Comando para instalar webpack:

```sh
npm install webpack webpack-cli webpack-dev-server --save-dev
```

Comando para instalar el plugin de html:

```sh
npm install html-webpack-plugin html-loader --save-dev
```

Comando para instalar babel:

```sh
npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev
```

### Configuración

Primero debemos crear el archivo de configuracion de webpack en la raiz del proyecto con el nombre:

📜webpack.config.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
};
```

Luego debemos crear el archivo de configuración de babel en laraiz del proyecto con el nombre:

📜.babelrc

```js
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

Finalmente se agregan los scripts de **build** y **start** en el package.json del proyecto

```json
 "start": "webpack serve --mode=development",
 "build": "webpack --mode production"
```

# Estilos

Para agregar estilos en la aplicacion es necesario instalar los loader y plugins necesarios para laconfiguracion de webpack

## css

Primero es necesario instalar los siguientes paquetes

```js
npm i css-loader mini-css-extract-plugin --save-dev
```

y luego añadirlos a la configuracion de webpack

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

{
    test: /\.css$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        "css-loader",
    ],
},


new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
```
## SCSS

Primero debemos de instalar las dependencias necesarias para darle soporte a Sass dentro de nuestro proyecto:

```
npm install --save-dev sass-loader node-sass
```
Una vez agregadas las dependencias necesarias, debemos agregar una nueva regla a la configuración de Webpack en la parte de rules:

```JS
{
    test: /\.scss$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        "css-loader",
        "sass-loader",
    ],
}
```

