<template>
  <div class="plugPage">vue插件页面 1
    <p>{{plugInputData.data}}</p>
  </div>
</template>

<script>
export default {
  name: "testPlugPage1",
  props:['plugInputData'],
  data(){
    return{
      
    }
  },
};
</script>

<style scoped>
.plugPage{
  padding:2px 5px;
  background:pink;
  font-size:16px;
}
.plugPage>p{
  font-size:14px;
}
</style>