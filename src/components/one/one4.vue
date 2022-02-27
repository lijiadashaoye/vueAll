<template>
  <div>混入</div>
</template>

<script>
export default {
  created() {
    console.log("来自混入子组件的created");
    this.minMethods()
    // console.log(this)  // 被当做混入组件使用时，this指向调用混入组件的组件
  },
  methods: {
    minMethods() {
      console.log("子组件中的对象型选项 33333");
    }
  }
};
</script>
