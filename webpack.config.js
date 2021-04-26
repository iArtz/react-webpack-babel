module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: __dirname + 'build',
    publicPath: '/',
  },
  devServer: {
    contentBase: './build',
    host: '0.0.0.0',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
