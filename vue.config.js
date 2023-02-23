// vue项目优化：https://blog.csdn.net/qq_37939251/article/details/100031285
// cnpm i compression-webpack-plugin -D
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    publicPath: './',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    chainWebpack: config => {
        const oneOfsMap = config.module.rule("scss").oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    // 需要插入的文件路径，可以是一个字符串，也可以是字符串数组
                    // 只有写到 resources 数组里，scss文件之间才可互相引用变量
                    resources: "./src/globalScss.scss" // 引入一个全局scss文件
                    // resources: ["./src/globalScss.scss", "./src/views/css.scss"]  // 引入多个个全局scss文件
                })
                .end();
        });
        if (process.env.NODE_ENV === 'production') {
            config.plugin('CompressionPlugin').use(
                new CompressionPlugin({
                    algorithm: 'gzip',
                    threshold: 102400, // 超过100kb的文件就压缩
                    deleteOriginalAssets: true, // 删除源文件
                    minRatio: 0.8
                })
            )
        }

    },
    // configureWebpack: {
    //     plugins: [
    //         new CompressionPlugin({
    //             filename: '[path].gz',
    //             algorithm: 'gzip',
    //             threshold: 1024 * 100,//文件大于这个值（10K）的才压缩，默认为0
    //             minRatio: 1,//默认为0.8，能压缩到小于等于原来的80%才压缩，小编这里觉得能压缩就行，其实有些文件压缩反而变大的
    //             deleteOriginalAssets: true//压缩完是否删除源文件
    //         })
    //     ]
    // }
}