<template>
  <div>
    <h3>通过路由接收的参数：{{ name }}</h3>
    <div class="wap">
      <div>
        <h3>动态切换组件</h3>
        <button @click="setCom(1)">组件1</button>&nbsp;&nbsp;
        <button @click="setCom(2)">组件2</button>&nbsp;&nbsp;
        <button @click="setCom(3)">进度条</button>
        <component
          style="width: 300px; flex-shrink: 0"
          v-on:emits="setEmit($event)"
          :msg="datas"
          :is="which_component"
        ></component>
      </div>

      <div>
        <h3>动态加载组件</h3>
        <AsyncComponent />
      </div>

      <div>
        <h3>使用加密插件</h3>
        <input v-model="texts" />
        <br />
        <button @click="jiami">加密</button>
        <button @click="jiemi">解密</button>
        <p>
          加密：{{ forJia }}
          <br />
          解密：{{ forJie }}
        </p>
      </div>

      <div>
        <h3>图片的引入</h3>
        <button @click="changeImg">changeImg</button>
        <br />
        <img :src="imgs" />
      </div>

      <div>
        <h3>样式的切换</h3>
        <button @click="changeClass">切换字体颜色</button>&nbsp;&nbsp;
        <br />
        <p :class="{ freeze: true, active1: isActive1 }">:class</p>
        <p :style="{ color: isActive1 ? 'green' : 'black' }">:style</p>
      </div>

      <div>
        <h3>使用axios</h3>
        <button @click="http">axios</button>
        <table v-if="httpDatas">
          <tr v-for="(item, index) in httpDatas" :key="index">
            <th>{{ item.code }}</th>
            <td v-html="item.symbol"></td>
            <td>{{ item.rate_float }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </table>
      </div>

      <div class="maodian">
        <h3>跳转到页面后自动定位到锚点</h3>
        <span id="mao">锚点</span>
      </div>
    </div>
  </div>
</template>

<script>
import two1 from "@/components/two/two1";
import two2 from "@/components/two/two2";
// import jindutiao from "@/components/two/jindutiao";
import secret from "@/jiami";

export default {
  components: {
    two1,
    two2,
    // jindutiao,
    // 动态按需加载组件写法二
    AsyncComponent: () => import("@/components/one/one3"),
    // 动态按需加载组件写法三
    // () => {
    //   // 只是为了体现异步延迟
    //   return new Promise(res => {
    //     setTimeout(() => {
    //       res(import("@/components/one/one3")); // import() 其实也是 Promise
    //     }, 3000)
    //   })
    // }
  },
  data() {
    return {
      datas: "", // 传递给子组件的数据
      which_component: null,
      name: "", // 获取的路由传参query

      texts: "", // 要被加密的数据
      forJia: "", // 加密完的数据
      forJie: "", // 解密完的数据

      imgs: "", // 图片
      isActive1: false,
      httpDatas: null,
    };
  },
  created() {
    this.name = this.$route.query.name;
    this.which_component = two1;
  },
  // 变更路由前执行
  beforeRouteLeave(to, from, next) {
    if (confirm(`在配置路由时，可以添加meta数据：${from.meta.requiresAuth}`)) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    // js方式动态切换组件
    setCom(num) {
      if (num === 1) {
        this.datas = "传递给组件1的数据";
        this.which_component = two1;
      } else if (num === 2) {
        this.datas = "传递给组件2的数据";
        this.which_component = two1;
      } else {
        this.which_component = () => import("../components/two/jindutiao.vue");
      }
    },
    // 加密、解密
    jiami() {
      this.forJia = secret.Encrypt(this.texts);
    },
    jiemi() {
      this.forJie = secret.Decrypt(this.forJia);
    },
    changeImg() {
      // 预先引入
      // import img1 from "../../../assets/1.jpeg";
      // import img2 from "../../../assets/2.jpg";
      // this.imgs = this.imgs == img1 ? img2 : img1;

      // 按需引入
      this.imgs = require("@/assets/timg.jpg");
    },
    // 切换样式
    changeClass() {
      this.isActive1 = !this.isActive1;
    },
    // 使用axios
    http() {
      this.httpDatas = null;
      this.$http.getData().then((res) => {
        this.httpDatas = res.bpi;
      });
    },
  },
};
</script>

<style scope>
.maodian {
  height: 1100px;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#mao {
  margin-bottom: 50px;
}
img {
  width: 100px;
}
.freeze {
  font-weight: bold;
}
.active1 {
  color: red;
}
table {
  border: 1px solid;
  border-collapse: collapse;
}
tr {
  border: 1px solid;
}
td {
  border: 1px solid;
  padding: 2px 5px;
}
</style>