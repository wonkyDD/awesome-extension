// https://velog.io/@xortm854/Typescript-React-Webpack-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95-4%ED%8E%B8-Webpack-%EC%84%A4%EC%A0%95%EC%9D%84-%ED%95%B4%EB%B3%B4%EC%9E%90
// https://taenami.tistory.com/125
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcDir = path.join(__dirname, 'src');

module.exports = (env, argv) => {
    const prod = argv.mode === "production";
    
    return {
        mode: prod ? "production" : "development",
        // devtool: 'inline-source-map',(dev)
        // devtool: prod ? "hidden-source-map" : "eval",
        entry: {
            popup: path.join(srcDir, 'popup.tsx'),
            options: path.join(srcDir, 'options.tsx'),
            background: path.join(srcDir, 'background.ts'),
            content_script: path.join(srcDir, 'content_script.tsx'),
        },
        output: {
            path: path.join(__dirname, './dist/'),
            // filename: "bundle.min.js",
            filename: "[name].js",
        },
        // optimization: {
        //     splitChunks: {
        //       name: 'vendor',
        //       chunks(chunk) {
        //         return chunk.name !== 'background';
        //       },
        //     },
        // },
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
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
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
                React: "react",
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
    }
};
