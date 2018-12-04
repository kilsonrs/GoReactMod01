//package.json

    "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
    },
    "devDependencies": {
    "@babel/core": "^7.1.6",
    "@babel/preset-env": "^7.1.6",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.4",
    "webpack": "^4.26.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
    }

// .babelrc

{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}

// 

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), // arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public") 
    // pasta que o webserver precisa ficar monitorando pra atualizar o bundle quando necessario
  },
  module: {
    rules: [
      {
        test: /\.js$/, // forma do babel tratar arquivos .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};


npm run dev