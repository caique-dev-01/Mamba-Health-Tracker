import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../pages/home/index.vue'),
    },
    {
      path: '/fasting',
      name: 'fasting',
      component: () => import('../pages/fasting/index.vue'),
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: () => import('../pages/nutrition/index.vue'),
    },
  ],
})

export default router
