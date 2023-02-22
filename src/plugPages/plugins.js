import Vue from 'vue'
import testPanel1 from './plugPage1.vue';
import testPanel2 from './plugPage2.vue';
import testPanel3 from './plugPage3.vue';

export default {
    // 插件通常用来为 Vue 添加全局功能。 插件的功能范围没有严格的限制—— 一般有下面几种：
    // 添加全局方法或者属性。
    // 添加全局资源： 指令 / 过滤器 / 过渡等。
    // 通过全局混入来添加一些组件选项。 
    // 添加 Vue 实例方法， 通过把它们添加到 Vue.prototype 上实现。
    // 一个库， 提供自己的 API， 同时提供上面提到的一个或多个功能
    install: function (vue) {
        // 注册全局组件
        [testPanel1, testPanel2].forEach(t => {
            vue.component(t.name, t)
        });
        // 注册全局插件
        vue.prototype.$pluginCom = (new (Vue.extend(testPanel3))).$mount()

    },
}