<template>
  <div>
    <div class="nav">
      <button :class="{ active: activeNum === 'one' }" @click="toRoute('one')">
        one
      </button>
      <button :class="{ active: activeNum === 'two' }" @click="toRoute('two')">
        two
      </button>
      <button
        :class="{ active: activeNum === 'three' }"
        @click="toRoute('four')"
      >
        four
      </button>
      <button :class="{ active: activeNum === 'css' }" @click="toRoute('css')">
        css
      </button>
      <button :class="{ active: activeNum === 'js' }" @click="toRoute('js')">
        js
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNum: "",
    };
  },
  watch: {
    // $route：用来读取路由信息
    // $router：用来操作路由
    // 使用数组可以同时执行多个方法
    $route: [
      function (...d) {
        this.activeNum = d[0].name;
      },
      {
        handler: function () {
          console.log("使用数组可以同时执行多个方法");
        },
        immaediate: true,
      },
    ],
  },
  mounted() {
    this.activeNum = this.$route.name;

    // 创建同域下浏览器不同页面的数据传递频道
    // 方法一：
    var bc = new BroadcastChannel("11");
    bc.onmessage = function (ev) {
      console.log(ev);
    };
    // 方法二：
    // window.addEventListener("message", t => console.log(t));
  },
  methods: {
    toRoute(tar) {
      if (tar !== "four") {
        this.$router.push({
          name: tar,
          query: {
            name: tar,
          },
        });
      } else {
        this.$router.push({
          path: "/four",
          query: {
            name: tar,
          },
        });
      }
    },
    // 添加一些逻辑，生成服务数据
    fuwu() {
      return "从App组件传递的服务";
    },
  },
  // 定义全局注入服务，依赖注入所提供的属性是非响应式
  provide() {
    return {
      fuwu: this.fuwu,
      zhuru: "使用依赖注入传递的数据",
    };
  },
};
</script>
<style >
.wap {
  display: flex;
  flex-wrap: wrap;
}
.wap > div {
  padding: 0 10px;
}
.nav button {
  font-size: 14px;
  padding: 3px 15px;
  margin-right: 15px;
  border-radius: 3px;
}
p,
h3 {
  padding: 2px;
  margin: 2px 0;
}
h4,
h3 {
  padding: 2px;
  margin: 2px 0;
  background-color: rgb(220, 217, 221);
}

.active {
  color: #657eeb;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
div,
button {
  font-size: 14px;
}
</style>