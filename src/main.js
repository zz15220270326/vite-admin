/*
 * @Author: 张先生
 * @Date: 2021-02-25 23:27:28
 * @LastEditTime: 2021-02-26 00:43:56
 * @FilePath: \vite-admin\src\main.js
 */
import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';

import router from './Router';

const app = createApp(App)

app.use(router);

app
  .mount('#app')
