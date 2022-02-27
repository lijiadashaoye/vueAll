const state = {
    num: 2
};
const mutations = {
    changeNum: (...k) => {
        // k为一个数组，第一个参数是state，第二个参数是触发commit时传递的参数，读取时属性名要正确
        state.num = ++k[0].num * k[1].n;
    }
};
const actions = {
    asyncChange: (...k) => {
        console.log(k)
            // k为一个数组，第一项是当前store构造器，第二项是dispatch时传递的参数，读取时属性名要正确
            // [
            // 0:
            //  dispatch: ƒ (_type, _payload, _options)
            //  commit: ƒ (_type, _payload, _options)
            //  getters: {}
            //  state: {__ob__: Observer}
            //  rootGetters: {}
            //  rootState: {__ob__: Observer}
            //  __proto__: Object
            // 1: {n: 4}
            // ]
        setTimeout(() => {
            k[0].commit('changeNum', k[1])
        }, 500)
    }
}
const getters = {
    // getter 必须有return才有意义
    // 定义成函数，使用时可以传递参数
    oneGetter1: (...sta) => (...kk) => {
        // sta为一个数组，按顺序分别为： 
        //   [
        //     0: 当前命名空间的 state,
        //     1: 当前命名空间的 getters,
        //     2: 全局命名空间的 state,
        //     3: 全局命名空间的 getters,
        //   ]
        // kk为传递的参数
        return sta[0].num * kk[0]
    },
    // 只能作为读取state
    oneGetter2: (...sta) => {
        // kk为一个数组，按顺序分别为： 
        //   [
        //     0: 当前命名空间的 state,
        //     1: 当前命名空间的 getters,
        //     2: 全局命名空间的 state,
        //     3: 全局命名空间的 getters,
        //   ]
        return sta[0].num * 10
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}