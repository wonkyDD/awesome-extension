/**
 * @TODO
 * package.json에 type을 module로 주면 webpack에러가 난다.
 * 문제는 난 보통 repl로 테스트할때 루트경로에서 하는데..
 * 이런식으로 에러가 나면
 */

const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcDir = path.join(__dirname, 'src');

module.exports = (env, argv) => {
  const prod = argv.mode === 'production';

  return {
    mode: prod ? 'production' : 'development',
    // devtool: 'inline-source-map',(dev)
    // devtool: prod ? "hidden-source-map" : "eval",
    entry: {
      popup: path.join(srcDir, 'popup.tsx'),
      options: path.join(srcDir, 'options.tsx'),
      background: path.join(srcDir, 'background.ts'),
      content_script: path.join(srcDir, 'content_script.tsx'),
      devtools: path.join(srcDir, 'devtools.ts'),
    },
    output: {
      path: path.join(__dirname, './dist/'),
      // filename: "bundle.min.js",
      filename: '[name].js',
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks(chunk) {
          return chunk.name !== 'background';
        },
      },
    },
    // devServer: {
    //     host: 'localhost',
    //     port: 8080,
    //     open: true,
    //     hot: true,

    //     // local에서 docker로 테스트서버 사용시에 3000포트로 was를 올려놓자
    //     historyApiFallback: true,
    //     proxy: {
    //       '/api/': {
    //         target: 'http://localhost:3000/api',
    //         changeOrigin: true,
    //         pathRewrite: {
    //           '^/api': '',
    //         },
    //       },
    //     },
    // },
    // node: {
    //   global: false,
    //   __filename: false,
    //   __dirname: false,
    //   fs: 'empty',
    // },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {},
    },
    module: {
      rules: [
        // ts-loader의 옵션은 성능 향상을 위해서? babel-loader만 있어도 ok?
        {
          test: /\.(ts|tsx)$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
        // {
        //     test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
        //     use: [
        //       {
        //         loader: 'file-loader',
        //       },
        //     ],
        //   },
        // {
        //     test: /\.css$/i,
        //     use: ['style-loader', 'css-loader'],
        // },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      // new HtmlWebpackPlugin({
      //     template: './public/*.html',
      //     minify: process.env.NODE_ENV === 'production' ? {
      //         collapseWhitespace: true,
      //         removeComments: true,
      //     } : false,
      // }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: '.', to: '.', context: 'public' }],
        options: {},
      }),
    ],
  };
};
