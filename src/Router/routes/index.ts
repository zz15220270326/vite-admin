import { RouteRecordRaw } from 'vue-router';

import Login from '/@/Views/Login/index.vue';
// import Login from '../../Views/Login/index.vue';

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('/@/Views/Main/index.vue'),
  },
];

const asyncRoutes: RouteRecordRaw[] = [];

const routes = [...constantRoutes, ...asyncRoutes];

export default routes;
