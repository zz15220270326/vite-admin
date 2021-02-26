<template>
  <div class="login-content">
    <div class="input-wrapper">
      <span>用户名:</span>
      <input v-model="username" type="text" placeholder="请输入用户名" />
    </div>
    <div class="input-wrapper">
      <span>密码:</span>
      <input v-model="password" type="password" placeholder="请输入密码" />
    </div>
    <div class="btn-wrapper">
      <button class="my-btn" @click="handleSubmit">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  // api
  defineComponent,
  ref,
  getCurrentInstance,
  // ts
  Ref,
  ComponentInternalInstance,
} from 'vue';
import { Router } from 'vue-router';
import { ILoginInput } from '../../../Typings/interfaces';

interface crtInstance extends ComponentInternalInstance {
  ctx?: {
    username: string;
    password: string;
    handleSubmit: () => void;
    $router: Router;
  };
}

export default defineComponent({
  name: 'LoginContent',
  setup() {
    const username: Ref<string> = ref(''),
      password: Ref<string> = ref(''),
      { ctx }: crtInstance = getCurrentInstance();

    const handleSubmit = (): void => {
      const params: ILoginInput = {
        username: username.value,
        password: password.value,
      };
      if (checkInput(params)) {
        localStorage.setItem('userInfo', JSON.stringify(params));
        console.log('登录成功');
        ctx.$router.replace('/');
      }
    };
    const checkInput = ({ username, password }: ILoginInput): boolean => {
      if (!username.length || !password.length) {
        console.log('用户名或密码不能为空');
        return false;
      } else return true;
    };
    return {
      username,
      password,

      handleSubmit,
    };
  },
});
</script>

<style lang='scss' scoped>
.login-content {
  height: 100%;
  .input-wrapper {
    height: 3rem;
    padding: 0.6rem;
    font-size: 1.2rem;
    background-color: skyblue;
    position: relative;
    span {
      position: absolute;
      left: 3.6rem;
      bottom: 2rem;
      font-weight: bold;
      color: #555;
    }
    input {
      position: absolute;
      right: 4rem;
      padding: 0.4rem 0;
      border: 0;
      box-sizing: border-box;
      box-shadow: #777 1px 1px 1px;
      border-radius: 0.3rem;
      font-size: 1.05rem;
      color: #333;
    }
  }
  .btn-wrapper {
    padding-top: 1rem;
    .my-btn {
      width: 5.2rem;
      height: 2rem;
      font-size: 1.06rem;
      border: 0;
      box-sizing: border-box;
      color: #888;
      font-weight: 500;
      &:hover {
        color: #0094ff;
        border: 1px solid #0094ff;
        box-sizing: border-box;
        box-shadow: skyblue 1px 1px 1px;
        border-radius: 0.3rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}
</style>