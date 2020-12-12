module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "style-loader",
          loader: "css-loader"
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "url-loader"
        }
      }      
    ]
  }
};
