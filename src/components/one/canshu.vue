<template>
  <div>
    <p>路由参数this.$route.params：{{canshu}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canshu: ""
    };
  },
  mounted() {
    this.canshu = this.$route.params.kk; // kk只是一个标识，只要和路由配置处用的名字相同即可
  },
  watch: {
    $route() {
      this.canshu = this.$route.params.kk; // kk只是一个标识，只要和路由配置处用的名字相同即可
    }
  }
};
</script>
kk