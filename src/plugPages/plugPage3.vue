<template >
  <div class="wrap" id="selfPlugin">
    <div
      class="message"
      :class="item.type"
      v-for="item in notices"
      :key="item._name"
    >
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
const DefaultOptions = {
  duration: 1500,
  type: "info",
  content: "这是一条提示信息！",
};
let mid = 0;
export default {
  data() {
    return {
      notices: [],
    };
  },
  created() {
    this.$on("hook:mounted", () => {
      let selfPlugin = document.querySelector("#selfPlugin");
      if (!selfPlugin) {
        document.body.appendChild(this.$el);
      }
    });
  },
  methods: {
    add(notice = {}) {
      // name标识 用于移除弹窗
      let _name = this.getName();
      // 合并选项
      notice = Object.assign(
        {
          _name,
        },
        DefaultOptions,
        notice
      );

      this.notices.push(notice);

      setTimeout(() => {
        this.removeNotice(_name);
      }, notice.duration);
    },
    getName() {
      return "msg_" + mid++;
    },
    removeNotice(_name) {
      let index = this.notices.findIndex((item) => item._name === _name);
      this.notices.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.wrap {
  --borderWidth: 3px;
  position: fixed;
  top: 80px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
}

.message {
  width: 440px;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 0 8px #ddd;
  overflow: hidden;
}

.content {
  padding: 8px;
  line-height: 1.3;
  font-size: 50px;
}

.message.info {
  border-left: var(--borderWidth) solid #909399;
  background: #f4f4f5;
}

.message.success {
  border-left: var(--borderWidth) solid #67c23a;
  background: #e0f4d5;
}

.message.error {
  border-left: var(--borderWidth) solid #f56c6c;
  background: #fef0f0;
}

.message.warning {
  border-left: var(--borderWidth) solid #e6a23c;
  background: #fdf6ec;
}
</style>