const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  return {
    entry: { main: './src/index.tsx' },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/',
    },
    mode: 'development',
    devServer: {
      static: path.resolve(__dirname, './build'),
      compress: true,
      port: 9000,

      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: /svgr/, // include *.svg only with parameter *.svg?svgr
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          resourceQuery: { not: [/svgr/] }, // exclude react component if *.svg?svgr
          type: 'asset/resource',
        },
        {
          test: /\.((sa|sc|c)ss)$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath) => resPath.includes('.module.scss'),
                  localIdentName: isDev ? '[local]--[hash:base64:5]' : '[hash:base64:8]',
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};