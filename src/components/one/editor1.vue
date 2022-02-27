<template>
  <div class="wapd">
    <div ref="toolbar" class="toolbar"></div>
    <span v-if="show" class="pla">请输入</span>
    <div ref="text" class="text"></div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "tt", // 定义v-model里，v-bind 绑定的属性名
    event: "returnBack", // 定义v-model里，v-on 绑定的执行数据反馈的事件
  },
  data() {
    return {
      editor: null,
      show: true,
    };
  },
  computed: {
    tt: {
      set: function (t) {
        let k = t;
        if (this.checkVal(t)) {
          k = "";
          this.show = true;
        } else {
          this.show = false;
        }
        this.$emit("returnBack", k);
      },
      get: function (t) {
        return t.$attrs.tt;
      },
    },
  },
  mounted() {
    // 文档：https://www.kancloud.cn/wangfupeng/wangeditor3/332599
    var E = require("wangeditor");
    this.editor = new E(this.$refs.toolbar, this.$refs.text);
    this.editor.config.uploadImgShowBase64 = true;
    this.editor.config.onchangeTimeout = 200; // 定义防抖延时
    this.editor.config.onchange = (html) => {
      this.tt = html; // 设置inData的值，会同时执行上边的set函数
    };
    this.editor.create();
    if (this.tt !== "") {
      this.editor.txt.html("" + this.tt);
      this.show = false;
    }
  },
  methods: {
    checkVal(str) {
      let num = 0,
        reg = /<p>(&nbsp;|&nbsp;\s+)+<\/p>|<p>(<br>)+<\/p>/g;
      while (num < str.length && str != "") {
        num++;
        let k = str.match(reg);
        if (k) {
          str = str.replace(k[0], "");
        }
      }
      return str == "";
    },
  },
};
</script>
<style >
.wapd {
  display: flex;
  padding: 0;
  position: relative;
  min-width: 420px;
  flex-wrap: wrap;
}
.toolbar {
  width: 50px;
  display: flex!;
  flex-wrap: wrap;
  border: 1px solid rgb(199, 196, 196);
  width: 100%;
}
.toolbar div {
  padding: 0px 2px !important;
}
.text {
  width: 100%;
  box-sizing: border-box !important;
  border: 1px solid rgb(199, 196, 196);
  min-height: 205px;
}
.w-e-text {
  overflow-y: hidden !important;
}
.pla {
  position: absolute;
  left: 15px;
  top: 34px;
  color: rgb(167, 164, 164);
}
</style>

