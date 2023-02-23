const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
// 注入脚本到html-webpack-plugin打包的html文件,必须和html-webpack-plugin配合使用
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
// 支持vue解析
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const template = path.resolve(__dirname, '../public/index.html');
// 打包多页应用
const plugins = [
    new HtmlWebpackPlugin({
        template,
        title: 'webpack打包但单应用',
        filename: 'index.html',
        chunks: ['runtime', 'vender', 'common', 'main']
    }),
    new HtmlWebpackPlugin({
        template,
        title: '关于我们',
        filename: 'about.html',
        chunks: ['runtime', 'vender', 'common', 'about']
    }),
    new HtmlWebpackPlugin({
        template,
        title: 'vue',
        filename: 'us.html',
        chunks: ['runtime', 'vender', 'common', 'vue']
    }),
    new VueLoaderPlugin(),
    // new webpack.ProvidePlugin({ // 将代码中用到的库自动引入
    //     _: 'lodash'
    //     // join: ['lodash', 'join']  //将lodash的一个方法导出到全局
    // }),
]

// 获取dll目录下的文件名
const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
files.forEach((file) => {
    if (/.*\.dll.js/.test(file)) {
        plugins.push(
            new AddAssetHtmlWebpackPlugin({
                filepath: path.resolve(__dirname, '../dll', file)
            })
        )
    }
    if (/.*\.manifest.json/.test(file)) {
        plugins.push(
            new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, '../dll', file)
            })
        )
    }
});

module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/about.tsx',
        vue: './src/vue.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    resolve: { // 配置模块如何解析
        alias: { //创建 import 或 require 的别名，来确保模块引入变得更简单
            'pages': path.resolve(__dirname, '../src/pages'),
            'images': path.resolve(__dirname, '../src/images'),
            'components': path.resolve(__dirname, '../src/components'),
            'common': path.resolve(__dirname, '../src/common'),
            'css': path.resolve(__dirname, '../src/css')
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"] // 自动解析确定的扩展
    },
    module: {
        rules: [
            // 将es6编译成es5
            {
                test: /\.jsx?$/, // ?表示x有0个或一个
                exclude: /node_modules/, // 不编译某个目录下的文件
                include: path.resolve(__dirname, '../src'), // 只在include包含的目录下进行loader编译
                use: [
                    "babel-loader",
                    // {
                    //   loader: "imports-loader?this=>window"  //将this导出为全局变量，此时会创建一个闭包，所以不能使用import语法
                    // }
                ]
            },
            // 编译ts
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // 编译vue
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, '../src'),
                loader: 'vue-loader'
            },
            // 加载解析文件资源
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader', // 和file-loader功能相同，但更智能
                    options: {
                        // 配置打包后的文件名,具体可看webpack的file-loader文档
                        name: '[name].[ext]?[hash]',
                        outputPath: 'images/',
                        limit: 4096 // 当图片大小大于4k时将以文件形式输出，否则以base64输出
                    }
                }
            },
            // 引入字体，svg等文件
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}