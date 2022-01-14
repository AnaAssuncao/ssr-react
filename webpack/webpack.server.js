const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  name: 'server',
  entry: {
    index: './src/Server/server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve( __dirname, '../build/server' ),
    filename: 'server.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }
    ]
  },
  plugins: [
  ]
}
