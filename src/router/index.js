import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Cookie from 'js-cookie';

Vue.use(Router);

const defaultRoutes = [
  {
    path: '/signin',
    component: () => import('@views/login'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/register',
    component: () => import('@views/login/register.vue')
  }
]


export const viewRoutes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@views/home')
  },
  {
    path: '/user',
    name: '用户',
    component: () => import('@views/user')
  }
]

const router = new Router({
  mode: 'history',
  routes: [
    ...defaultRoutes,
    ...viewRoutes
  ]
});

export const whiteList = defaultRoutes.map(n => n.path);

router.beforeEach((to, from, next) => {
  NProgress.start();
  const hasLogin = Cookie.get('hasLogin');
  console.log(to)

  if (hasLogin) {
    if (/signin/.test(to.path)) {
      next('/')
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next('/signin');
    }
  }
});

router.afterEach(() => {
  NProgress.done();
})

export default router;