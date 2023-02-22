<template>
  <div>
    <p>keep-alive1</p>
    <p style="color: red; font-weight: bold">{{ select }}</p>
    <ul>
      <li v-for="i in list" :key="i" @click="select = i">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 5, 6, 7, 8, 9, 10],
      select: "",
    };
  },
};
</script>
<style>
ul {
  height: 80px;
  overflow-y: scroll;
}
li {
  padding: 2px 0;
  margin-bottom: 4px;
  cursor: pointer;
}
.select {
  background: palegoldenrod;
}
</style>