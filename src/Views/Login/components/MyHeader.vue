<!--
 * @Author: 张先生
 * @Date: 2021-02-26 00:40:52
 * @LastEditTime: 2021-02-26 00:59:45
 * @FilePath: \vite-admin\src\Views\Login\components\MyHeader.vue
-->
<template>
  <div class="login-header">
    <span class="header-text">
      {{ loginTitle }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoginHeader',
  props: {
    loginTitle: {
      type: String,
      default: '登录',
    },
  },
  setup() {},
});
</script>

<style lang='scss' scoped>
.login-header {
  height: 3.6rem;
  background-color: #0094ff;
  text-align: center;
  .header-text {
    color: #fff;
    font-size: 1.4rem;
    position: relative;
    top: 1rem;
  }
}
</style>
