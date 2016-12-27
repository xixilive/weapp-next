var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: null,

  context: path.join(__dirname, 'es6'),

  entry: {
    'index': './index',
    'polyfill': './polyfill',
    'promise': './promise'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0"]
        },
        include: path.join(__dirname, 'es6'),
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['es6', 'node_modules']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
}
