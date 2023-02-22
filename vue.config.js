// vue项目优化：https://blog.csdn.net/qq_37939251/article/details/100031285
module.exports = {
    publicPath: './',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // css: {
    //     loaderOptions: {
    //         sass: {
    //              // 只能是一个字符串
    //             additionalData: `@import "@/globalScss.scss";`
    //         },

    //     }
    // },

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
    },
}