module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: __dirname + 'build',
    publicPath: '/',
  },
  devServer: {
    contentBase: './build',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
}
