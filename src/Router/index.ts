import {
  // api
  createRouter,
  createWebHistory,
  // ts
  Router,
  // RouteRecordRaw,
} from 'vue-router';

import routes from './routes';

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (to.path === '/') {
    if (!userInfo) {
      next('/login');
    } else {
      next();
      return;
    }
  }
  if (to.path === '/login') {
    if (!userInfo) {
      next();
    } else {
      next('/');
      return;
    }
  }
});

console.log(router);


export default router;
