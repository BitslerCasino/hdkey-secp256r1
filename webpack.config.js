var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

let common = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['lib'], {
      exclude: ['test.html']
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

module.exports = [
  Object.assign({}, common, {
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()]
  })
];
