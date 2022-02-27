import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import http from './api/axiosSet';
Vue.prototype.$http = http;

// 添加IE兼容 npm i --save @babel/polyfill
import '@babel/polyfill';

// 插入自定义指令
import directives from './directive';
Object.keys(directives).forEach(str => {
    Vue.directive(str, directives[str])
})

// 插入自定义全局过滤器
import filters from './filter';
Object.keys(filters).forEach(str => {
    Vue.filter(str, filters[str])
})

// 插入自定义全局插件
import plugins from '@/plugPages/plugins';
Vue.use(plugins)

// 单独建立一个文件做 axios 设置后，进行挂载
// 已经在 plugins.js 定义为 $http
// import axios from './axios.js';
// Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    // 定义根数据，一般用于全局
    data: {
        data: 'main.js 里 data 属性定义的根数据'
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')