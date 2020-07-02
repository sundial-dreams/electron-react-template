// 渲染进程prod环境webpack配置
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config');

const entry = {
  index: path.join(__dirname, 'src/renderer/index/index.tsx'), // 页面入口
  userInfo: path.join(__dirname, 'src/renderer/userInfo/index.tsx')
};
// 对每一个入口生成一个.html文件
const htmlWebpackPlugin = Object.keys(entry).map(name => new HtmlWebpackPlugin({
  inject: 'body',
  scriptLoading: 'defer',
  template: path.join(__dirname, 'resources/template/template.html'),
  minify: false,
  filename: `${name}/index.html`,
  chunks: [name]
}));

module.exports = merge.smart(webpackBaseConfig, {
  devtool: 'none',

  mode: 'production',

  target: 'electron-preload',

  entry,

  output: {
    path: path.join(__dirname, 'dist/renderer/'),
    publicPath: '../',
    filename: '[name]/index.prod.js' // 输出则是每一个入口对应一个文件夹
  },
  module: {
    rules: [
      // 处理全局.css文件
      {
        test: /\.global\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {loader: 'resolve-url-loader'}, // 解决样式文件中的相对路径问题
        ]
      },
      // 一般样式文件，使用css模块
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              },
              sourceMap: true
            }
          },
          {loader: 'resolve-url-loader'},
        ]
      },
      // 处理scss全局样式
      {
        test: /\.global\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {loader: 'resolve-url-loader'},
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // 处理一般sass样式，依然使用css模块
      {
        test: /^((?!\.global).)*\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              },
              importLoaders: 1,
              sourceMap: true
            }
          },
          {loader: 'resolve-url-loader'},
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // 处理字体文件 WOFF
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      // 处理字体文件 WOFF2
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      // 处理字体文件 TTF
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      // 处理字体文件 EOT
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      // 处理svg文件 SVG
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }
      },
      // 处理图片
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/index.style.css',
      publicPath: '../'
    }),
    ...htmlWebpackPlugin
  ]
});