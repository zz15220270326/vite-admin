<!--
 * @Author: 张先生
 * @Date: 2021-02-26 01:00:41
 * @LastEditTime: 2021-02-26 01:04:54
 * @FilePath: \vite-admin\src\Views\Login\components\MyLogo.vue
-->
<template>
  <div class="my-logo-wrapper">
    <img src="/@/Assets/logo.png" alt="">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'MyLogo',
    props: {}
  })
</script>

<style lang='scss' scoped>
.my-logo-wrapper {
  background-color: pink;
  width: 100%;
  height: 8rem;
  img {
    height: 8rem;
  }
}
</style>