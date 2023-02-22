import Vue from 'vue';
import Vuex from 'vuex';
import useNameSpace from './useNameSpace'

Vue.use(Vuex);

// 自定义插件，只有一个store参数，自动执行的
const myPlugin = store => {
    // console.log(store)
    setTimeout(() => { // 插件内触发状态变动
        store.commit('getAge')
    }, 3000)
}

export default new Vuex.Store({
    modules: {
        useNameSpace
    },
    state: {
        age: 9
    },
    // mutation内部必须是同步函数，异步会导致内部状态难以追踪
    mutations: {
        getAge: (state) => {
            state.age++;
        }
    },
    actions: {
        getAge1: ({
            commit
        }) => {
            setTimeout(() => {
                commit('getAge')
            }, 500)
            return 'actions返回的数据'
        }
    },
    plugins: [myPlugin]
})