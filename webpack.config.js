const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

// add paths for subdomains here
const paths  = [
  {
    name: "physiotherapie",
    title: "#HARTWORK - Physiotherapie",
    description: "#HARTWORK - Physiotherapie zur Behandlung und evtl. Vorbeugung körperlicher Beschwerden in Neuenstein"
  },
  {
    name: "sporttherapie",
    title: "#HARTWORK - Sporttherapie",
    description: "#HARTWORK - Sporttherapie und Personal- oder Gruppentraining für bis zu Personen in Neuenstein"
  },
  {
    name: "impressum",
    title: "#HARTWORK - Impressum",
    description: "#HARTWORK - Physiotherapie & Personaltraining in Neuenstein",
    noIndex: "noIndex"
  },
  {
    name: "philosophie",
    title: "#HARTWORK - Philosophie",
    description: "#HARTWORK - Philosophie "
  },
  {
    name: "karriere",
    title: "#HARTWORK - Karriere",
    description: "Karriere bei #HARTWORK ",
    noIndex: "noIndex"
  },
  {
    name: "ems",
    title: "#HARTWORK - EMS Training",
    description: "EMS-Training bei #HARTWORK ",
  }
]

let multipleHtmlPlugins = paths.map(single => {
  return new HtmlWebPackPlugin({
    template: "./static/index.ejs",
    filename: `../docs/${single.name}/index.html`,
    header: {title: single.title},
    meta: {
      description: single.description,
      ...single.noIndex && {robots: single.noIndex}
    },
  })
});

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
        },
        {
          test: /\.(js|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader"
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(ttf)$/,
          use: {
            loader: "url-loader"
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./static/index.ejs",
          filename: "../docs/index.html",
          meta: {
            description: "#HARTWORK - Physiotherapie & Personaltraining in Neuenstein"
          },
          header: {title: "#HARTWORK"},
        }),
        new HtmlWebPackPlugin({
          template: "./static/index.ejs",
          filename: "../docs/404.html",
          header: {title: "#HARTWORK"},
          meta: {
            description: "#HARTWORK - Physiotherapie & Personaltraining in Neuenstein"
          }
        }),
      new MiniCssExtractPlugin({
          filename: "style.css",
          path: path.resolve(__dirname, "docs")
        })
      ].concat(multipleHtmlPlugins),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "docs")
    }
  };