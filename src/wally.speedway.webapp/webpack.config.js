const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'none', // 'none', 'development' or 'production'
  entry: './src/index.ts',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public"
        }
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    open: true,
    host: '127.0.0.1'
  },

  devtool: 'source-map'
};
