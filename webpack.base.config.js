const path = require('path');
// 基础的webpack配置
module.exports = {
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // babel-loader处理jsx或tsx文件
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.node$/,
        exclude: /node_modules/,
        use: 'node-loader' // node-loader处理.node文件
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.node'],
    alias: {
      '~native': path.resolve(__dirname, 'native'),
      '~resources': path.resolve(__dirname, 'resources'),
      '~build': path.resolve(__dirname, 'build')
    }
  },
  devtool: 'source-map',
  plugins: []
};