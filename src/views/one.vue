<template>
  <div>
    <h3>通过路由接收的参数：{{ name }}</h3>
    <div class="wap">
      <div>
        <h3>父组件</h3>
        <p>插槽：写在父组件里，与子组件混合显示时使用</p>
        <p>先要把子组件引入，放到 components 里</p>
        <p>子组件中用&lt;slot&gt;标签，定义插槽位置、顺序</p>
        <p>
          父组件中用&lt;template v-slot:name
          &gt;标签，定义往哪个名字插槽里插入什么内容
        </p>

        <one2>
          <template v-slot:header>
            <p style="color: red">
              父组件的：v-slot:header 写法找到 name="header" 的插槽, v-slot
              只能添加在&lt;template&gt; 上，在子组件中插入父组件内写出的容用
            </p>
          </template>
          <template v-slot:content="bbb">
            <p style="color: red">
              父组件的：父组件用 v-slot:content=" bbb " 匹配到子组件里
              name="content"
              的插槽，和子组件传递给父组件的参数(bbb)，但这个参数，只能用在 当前
              &lt;template&gt;&lt;/template&gt;标签内使用(作用域的原因)
            </p>
            <p style="color: red">
              父子组件之间传递的参数名可以不一样，子组件里参数名是：ccc，父组件里用：bbb
              接收，因为父组件里接收的是一个对象； {{ bbb }}
            </p>
          </template>
          <template #footer="gg">
            <p style="color: red">
              父组件用 #footer="gg"
              写法找到插槽，并传递参数，父组件中随意用参数名（gg）指代子组件传的参数，
              gg: {{ gg }}
            </p>
          </template>
          <template>
            <p>
              默认slot，父组件里可以随意决定&lt;template&gt;的位置，但实际上显示的顺序取决于子组件里&lt;slot&gt;的位置；
              注意默认插槽的缩写语法不能和具名插槽混用(嵌套)，因为它会导致作用域不明确
            </p>
          </template>
        </one2>
      </div>

      <div>
        <h3>依赖注入</h3>
        <p>
          provide/inject 是解决组件间的通信问题的利器，
          <br />不受层级结构的限制，但不是响应式的。
        </p>
        <button @click="seeFuWu">使用依赖注入调用服务源组件中的函数</button>
        <br />
        {{ seeFuWuData }}
        <br />
        <p>
          使用依赖注入直接获取数据：<span style="color: red">{{ zhuru }}</span>
        </p>
      </div>

      <div>
        <h3>全局根数据</h3>
        <button @click="getRoot">获取main.js里定义的根的数据</button>
        <br />
        {{ seeRootData }}
      </div>

      <div>
        <h3>过滤器</h3>
        <p>前一个过滤器返回的数据是后一个过滤器接收的参数</p>
        <p>先执行 filterZuJian，再执行 quanjuFilter</p>
        <h3>{{ date | filterZuJian | quanjuFilter }}</h3>
      </div>

      <div>
        <h3>数据的监听</h3>
        <p>基本数据：{{ computedval }}</p>
        <p>对象数据：{{ wat.name }}</p>
        <p>数组数据：{{ arr[0].one }}</p>
        <button @click="testWatch">深度监听</button>
      </div>

      <div>
        <h3>状态管理</h3>
        <p>{{ $store.state.age }}</p>
        <button @click="testCommit">使用commit</button>
        <button @click="testDispatch">使用dispatch</button>
      </div>

      <div>
        <h3>使用命名空间</h3>
        <p>
          在每个状态管理文件内，通过 namespaced: true 来定义空间模式
          <br />
          在状态管理 index.js 文件里，通过 modules: { useNameSpace }
          来定义空间名；
        </p>

        <p>mapState, mapGetters：属于属性读取</p>
        <p>mapMutations, mapActions：属于方法读取</p>
        <p>使用mapGetters拿到getter：{{ oneGetter2 }}</p>
        <p>使用可传参的方式拿到getter：{{ oneGetter1 }}</p>
        <p>使用mapState拿到state：{{ num }}</p>
        <p>读取命名空间state：{{ $store.state.useNameSpace.num }}</p>
        <button @click="changeNum({ n: 3 })">
          使用 mapMutations 直接触发 commit 执行 changeNum 函数
        </button>
        <br />
        <button @click="chongmingming({ n: 4 })">
          使用 mapActions 触发 action，重命名在当前组件里使用的 action 名字
        </button>
        <br />
        <button @click="changeNum1({ n: 3 })">触发commit</button>
        &nbsp;&nbsp;&nbsp;
        <button @click="asyncChange1({ n: 4 })">触发dispatch</button>
      </div>

      <div>
        <h3>使用自定义插件</h3>
        <button @click="pluginCom">插件</button>
      </div>

      <div>
        <h3>使用动态注册组件</h3>
        <button @click="usePlugin">组件</button>
        <div :plugInputData="plugData" :is="plugData.component"></div>
      </div>

      <div>
        <h3>动态参数路由</h3>
        <p>观察浏览器地址栏的变化</p>
        <button @click="luyou(1)">参数：1</button>
        <button @click="luyou(2)">参数：2</button>
        <router-view />
      </div>

      <div>
        <h3>自定义表单组件</h3>
        <one1
          attrs="$attrs 类似data-，属于组件自己的属性，不作为 props 被读取，定义到attributes"
          :kk="'定义到this上的属性(kk)'"
          v-model="selfInput"
          @changed="selfEmit"
        />
        <p>Computed：{{ testComputed }}</p>
        <button @click="SetComputed">SetComputed</button>
      </div>

      <div style="width: 420px">
        <h3>自定义非表单组件</h3>
        <button @click="seeEditor">查看富文本数据</button>
        <Editor v-model="editorData" />
        <p>把v-model拆开</p>
        <Editor1
          v-bind:tt="editorData1"
          v-on:returnBack="(t) => (editorData1 = t)"
        />
      </div>

      <div style="width: 350px">
        <h3>nextTick</h3>
        <button @click="fn">nextTick</button>
        <p>vue 的DOM构建是异步的，会落后于data数据的变化</p>
        <p>未在nextTick里：{{ nextTickBefore }}</p>
        <p>在nextTick里：{{ nextTickAfter }}</p>
        <p ref="ul">
          <span style="margin-right: 5px" v-for="(t, ind) of list" :key="ind">{{
            t
          }}</span>
        </p>
      </div>
      <div>
        <h3>keep-alive 使用</h3>
        <div>
          <button @click="componentName = 'one5'">one5</button>&nbsp;&nbsp;
          <button @click="componentName = 'one6'">one6</button>
          <transition appear name="fade" mode="out-in">
            <keep-alive :include="['one5']">
              <component :is="componentName"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
      <div>
        <h3>笔记</h3>
        <p>
          v-for的优先级高于v-if，因此v-if会重复运行在每个v-for中，性能损耗严重。
        </p>
        <p>
          正确写法：使用template标签进行包裹(template为html5的新标签，无特殊含义)
        </p>
        <p>currentTarget始终是监听事件者，而target是事件的真正发出者。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// 动态按需加载组件写法一
import one1 from "@/components/one/one1";
import one2 from "@/components/one/one2";
import forMixin from "@/components/one/one4";
import Editor from "@/components/one/editor.vue";
import Editor1 from "@/components/one/editor1.vue";

import one5 from "@/components/one/one5";
import one6 from "@/components/one/one6";

export default {
  // 同名钩子函数将合并为一个数组，因此都将被调用。
  // 另外，混入对象的钩子将在组件自身钩子之前调用。
  // 写法一，混入子组件会自动执行(created、mounted 等）但如果混入组件里有 this.minMethods()这种调取方法的
  // 如果两个组件有同名的methods，则调用当前组件里的方法，如 minMethods
  mixins: [forMixin],
  // 写法二，混入子组件会被封装成同名对象(forMixin)，之后按需调用
  // mixins: ["forMixin"],
  // 依赖注入
  inject: ["fuwu", "zhuru"],
  components: {
    one1,
    one2,
    Editor,
    Editor1,
    one5,
    one6,
  },
  data() {
    return {
      chanianData: "", // 获取插件的值
      selfInput: "", // 给自定义组件的传入值
      seeRootData: "", // 查看根数据
      seeFuWuData: "", // 查看依赖注入数据
      date: new Date(), // 过滤器使用的数据

      computedval: 1,
      wat: {
        name: 10,
      },
      arr: [{ one: 100 }],

      name: "",
      plugData: {
        component: null,
        data: "传给插件的数据",
      },
      editorData: "<p>富文本编辑器 editor</p>",
      editorData1: "<p>富文本编辑器 editor1</p>",

      list: [],
      nextTickBefore: "",
      nextTickAfter: "",
      componentName: "",
    };
  },
  created() {
    this.name = this.$route.query.name;
    // 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。
    this.minMethods(); // 两个组件有同名的方法，则调用当前组件里的方法

    // 混入写法二时的使用方法
    // forMixin.created();
    // forMixin.methods.minMethods();

    // console.log(forMixin);
  },
  mounted() {
    // console.log(this.$children); // 获取当前组件components里写到的并且用到的子组件
    // 深度监听写法一：
    // this.$watch(
    //   "wat",
    //   function(...d) {
    //     // 参数是一个数组，但没太大实际意义
    //     console.log(d);
    //   },
    //   {
    // deep: true, // 深度监听
    // immediate: true // 挂载上立即执行一次监听
    // }
    // );
  },
  filters: {
    // 组件内的管道、过滤器
    filterZuJian: function (val) {
      return {
        year: val.getFullYear(),
        month: val.getMonth() + 1,
        day: val.getDate(),
      };
    },
  },
  watch: {
    // 表示监听组件内的值类型(数字、字符串、布尔值)数据变动
    computedval: (...d) => {
      // 参数是一个数组，[新值，旧值]
      console.log(d);
    },
    // 如果值被重新赋值了，也可以监听到
    arr: (...d) => {
      // 参数是一个数组，[新值，旧值]
      console.log(d);
    },
    // 深度监听写法二：
    wat: {
      handler: (e) => {
        console.log(e);
      },
      deep: true,
      // 如果不设置immediate，或者将immediate设为false的话，则刷新页面后不会立即监听此对象
      // 在第一次就监听变化，需要加上
      immediate: true,
    },
  },
  computed: {
    // 计算属性默认只有getter，不过在需要时你也可以提供一个setter
    testComputed: {
      // 读取 testComputed 时的监听函数，只要显示出来，就会调用get函数
      get: function () {
        let data = this.selfInput + this.computedval;
        console.log(data);
        return data;
      },
      // 设置 testComputed 时的监听函数
      set: function (...k) {
        console.log("set方法");
        console.log(k);
        this.selfInput *= 10;
      },
    },
    // 第一个参数指定模块名称
    // getter 就是将state执行过getter方法后的结果返回，使得 oneGetter2 在组件内可直接使用
    ...mapGetters("useNameSpace", ["oneGetter2"]), // 只能用来读取数据
    // 使用可传参方式获取getter，用到this，不能用箭头函数
    oneGetter1: function () {
      let k = this.$store.getters["useNameSpace/oneGetter1"](2);
      return k;
    },

    // 使用 mapState 辅助函数帮助我们生成计算属性，直接将store里的状态作为组件属性使用
    // 使用命名空间方式区分不同的 state，但不能重名（即num必须唯一）
    ...mapState("useNameSpace", ["num"]),
  },
  methods: {
    seeEditor() {
      console.log(this.editorData);
      console.log(this.editorData1);
    },
    // 自定义组件的事件监听
    selfEmit(e) {
      console.log(e);
    },
    // 查看依赖注入数据
    seeFuWu() {
      this.seeFuWuData = this.fuwu();
    },
    // 获取全局依赖注入服务提供的数据
    getRoot() {
      console.log(this.$root);
      this.seeRootData = this.$root.$data;
    },
    // 数据的深度监听使用
    testWatch() {
      this.computedval++;
      this.wat.name++;
      this.arr[0].one++; // 只能通过this.$watch监听到
      // this.arr = [{ one: 3234 }]; // 如果 arr 指向被重新赋值了，也可以通过 watch 监听到
    },
    // 测试 computed
    SetComputed() {
      ++this.testComputed;
    },
    // 状态管理
    testCommit() {
      // this.$store.commit("getAge");
      this.$store.commit({ type: "getAge" });
    },
    testDispatch() {
      // this.$store.dispatch("getAge1");
      this.$store.dispatch({ type: "getAge1" }).then((v) => {
        console.log("action 后可接action 里return 的数据：", v);
      });
    },
    // 混入时重复出现的方法
    minMethods() {
      console.log("父组件中的对象型选项");
    },

    // 使用 mapMutations 辅助函数将 mutations 的方法映射为 store.commit 调用
    // 直接写，省略了 this.$store.commit
    // 使用命名空间方式区分不同的 mutations
    ...mapMutations("useNameSpace", ["changeNum"]),
    // 使用 mapActions 辅助函数将 actions 的方法映射为 store.dispatch 调用
    // 直接写，省略了 this.$store.dispatch
    // 使用命名空间方式区分不同的 actions
    // 并重命名在当前组件里使用的action名字
    ...mapActions("useNameSpace", {
      chongmingming: "asyncChange",
    }),
    // 以载荷形式分发
    changeNum1() {
      this.$store.commit({
        type: "useNameSpace/changeNum",
        n: 7,
      });
    },
    // 以载荷形式分发
    asyncChange1() {
      this.$store.dispatch({
        type: "useNameSpace/asyncChange",
        n: 5,
      });
    },
    // 使用自定义插件
    chajian() {
      this.chanianData = this.$pluginFn(9);
    },
    // 使用vue插件
    usePlugin() {
      this.plugData.show = !this.plugData.show;
      // 可以动态切换使用的全局插件
      this.plugData.component = this.plugData.show
        ? "testPlugPage1"
        : "testPlugPage2";
    },
    pluginCom() {
      this.$pluginCom.add({
        type: "success",
        content: "成功信息提示",
        duration: 3000,
      });
    },

    // 根据参数决定路由 path/:canshu 形式
    luyou(num) {
      this.$router.push({
        path: `/one/canshu/${num}`,
      });
    },
    fn() {
      for (let i = 3; i--; ) {
        this.list.unshift(Math.trunc(Math.random() * 100));
      }
      this.nextTickBefore = this.$refs.ul.children.length;
      this.$nextTick(() => {
        this.nextTickAfter = this.$refs.ul.children.length;
      });
    },
  },
};
</script>