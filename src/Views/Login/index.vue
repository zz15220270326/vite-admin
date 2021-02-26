<template>
  <div class="login-wrapper">
    <div class="login-card">
      <m-header />
      <m-logo />
      <m-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MHeader from './components/MyHeader.vue';
import MLogo from './components/MyLogo.vue';
import MContent from './components/MyContent.vue';

export default defineComponent({
  name: 'Login',
  components: {
    MHeader,
    MLogo,
    MContent
  },
  setup() {},
});
</script>

<style lang='scss' scoped>
.login-wrapper {
  background-color: #f6f6f6;
  height: 100vh;
  text-align: center;
  .login-card {
    margin: 12rem auto;
    height: 30rem;
    width: 24rem;
    border: 2px solid #ddd;
    border-radius: 1.2rem;
    box-shadow: #333 1px 1px 10%;
    overflow: hidden;
  }
}
</style>