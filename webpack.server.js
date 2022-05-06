const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );


module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use:[{loader: MiniCssExtractPlugin.loader},{loader:'css-loader'}]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin()
   ]
};

