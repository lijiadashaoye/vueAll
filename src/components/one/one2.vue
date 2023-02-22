<template>
  <div style="border: 1px dashed red; padding: 2px 5px">
    <h3>子组件</h3>
    定义好插槽名称和在子组件里写出来的要显示的内容
    <br />&lt;slot&gt; 标签是用来显示父组件中的内容
    <br />在slot标签间添加内容是无效的，如：&lt;slot&gt;内容&lt;/slot&gt;'内容'不会被显示
    <br />子组件：name='header'写法命名插槽
    <hr />
    <slot></slot>
    <slot name="header"></slot>
    <slot name="content" :ccc="jigou"></slot>
    <slot name="footer" :user="user"> </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jigou: "子组件中的数据，传递给父组件",
      user: "子组件中的数据，传递给父组件",
    };
  },
};
</script>