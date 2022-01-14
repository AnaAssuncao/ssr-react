const path = require('path')

module.exports = {
  name: 'client',
  entry: {
    index: './src/Client/client.js'
  },
  output: {
    path: path.resolve( __dirname, '../build/client' ),
    filename: 'client.bundle.js',
  },
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
