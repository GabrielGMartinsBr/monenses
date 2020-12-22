import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { isLoggedIn, isLoggedOut } from './guards';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    beforeEnter: isLoggedIn,
    component: () => import('@/views/LoggedInView.vue'),
    children: [
      {
        path: '/account',
        component: () => import('@/views/account/AccountView.vue'),
      },
      {
        path: '/workbench',
        component: () => import('@/views/workbench/WorkbenchView.vue'),
      },
    ]
  },
  {
    path: '',
    beforeEnter: isLoggedOut,
    component: () => import('@/views/LoggedOutView.vue'),
    children: [
      {
        path: '/sign-in',
        component: () => import('@/views/sign/SignInView.vue'),
      },
      {
        path: '/sign-up',
        component: () => import('@/views/sign/SignUpView.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'app',
  routes
})

export default router
