const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        include: __dirname + '/src/',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[name]-[local]_[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9", // React doesn't support IE8 anyway
                  ],
                  flexbox: "no-2009",
                }),
              ],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: "file-loader?name=assets/[name].[ext]",
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        use: [
          "url-loader?limit=10240&name=assets/[name].[ext]",
        ],
        include: path.resolve("src", "assets"),
      },
    ],
  }
};
