<template>
  <div>
    <h3>通过路由接收的参数：{{name}}</h3>
    重定向路由，本来要去four，重定向到three页面<br>
    路由跳转时，如果用query，传递的参数会显示在地址栏，如果用params，则不会显示出来

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    // 获取路由传参
    this.name = this.$route.params.name;
  },
  methods: {
    make() {},
  },
};
</script>
