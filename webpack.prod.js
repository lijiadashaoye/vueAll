const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
const TerserPlugin = require('terser-webpack-plugin');
// 使webpack开启gizp
const CompressionPlugin = require('compression-webpack-plugin');

// pwa
const WorkboxPlugin = require('workbox-webpack-plugin');

// copy
const CopyWebpackPlugin = require('copy-webpack-plugin');

const base = require('./webpack.base');
const merge = require('webpack-merge');

// plugins
const plugins = [
    new CleanWebpackPlugin(),
    // 将js中的css代码剖离成单独的文件
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[name]_[hash].css',
        chunkFilename: 'css/[name]_[hash].chunk.css',
    }),
    // 开启gizp
    new CompressionPlugin({
        test: /\.(js|css)$/i,
        algorithm: 'gzip'
    }),
    // pwa
    new WorkboxPlugin.GenerateSW({
        // 这些选项帮助 ServiceWorkers 快速启用
        // 不允许遗留任何“旧的” ServiceWorkers
        clientsClaim: true,
        skipWaiting: true
    }),
    // copy文件
    new CopyWebpackPlugin([{
        from: './public/favicon.ico',
        to: './favicon.ico'
    }]),
];

module.exports = merge({
    mode: 'production',
    // 如果没有设置mode，会剖出警告
    devtool: 'cheap-module-source-map', // 调试的时候显示源代码错误的行，建议在生产模式下使用
    output: {
        // path: '/home/proj/cdn/assets/[hash]',
        // publicPath: 'https://cdn.example.com/assets/[hash]/', // 将公共路径写为cdn路径
        filename: 'js/[name]_[contenthash].js',
        chunkFilename: 'js/[name]_[contenthash].chunk.js'
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [ // loader解析的顺序是从下到上，从右到左的顺序
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        filename: '[name].css',
                        chunkFilename: '[name].css',
                        publicPath: '../' //****最后打包的时候替换引入文件路径
                    },
                },
                // 'style-loader',  使用MiniCssExtractPlugin时就不能使用style-loader了
                {
                    loader: 'css-loader',
                    options: {
                        // modules: true,
                        importLoaders: 2 //该方式可以让@import引入的css文件再次执行一边css打包loader
                    }
                },
                'sass-loader',
                'less-loader',
                'postcss-loader',
            ]
        }]
    },
    optimization: {
        runtimeChunk: { // 打包后将包之间的依赖关系放进runtime.js中，此时不修改源文件，打包后的hash就不会变化了
            name: 'runtime' //可自定义名称
        },
        splitChunks: {
            chunks: 'all',
            minSize: 30000, // 当大于指定大小时，对代码进行二次分割
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '_',
            name: true,
            cacheGroups: { // 缓存组：如果满足vendor的条件，就按vender打包，否则按default打包
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, // 权重越大，打包优先级越高
                    // filename: 'js/vender.js'  //将代码打包成名为vender.js的文件
                    name: 'vender'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    name: 'common',
                    // filename: 'js/common.js',
                    reuseExistingChunk: true // 是否复用已经打包过的代码
                },
                // 将公用的css单独抽离出来
                common: {
                    test: /(css[\\/]common.css)/,
                    name: 'common',
                    minChunks: 1, // 做小公用次数
                    reuseExistingChunk: true
                }
            }
        },
        usedExports: true, // 使得tree shaking能够生效,将css从代码中拆分出来
        minimizer: [
            new TerserPlugin({ // 压缩js代码
                cache: true, // 启用文件缓存
                parallel: true, // 使用多进程并行执行任务来提高构建效率
                sourceMap: true, // 将错误消息位置映射到模块
                terserOptions: {
                    drop_console: true, // 打包时剔除所有console.log
                    drop_debugger: true // 打包时剔除所有debugger
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ] // 压缩css代码
    },
    plugins
}, base)