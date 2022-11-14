import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Page Home
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
    // Page About
    {
      path: '/about',
      name: 'about',
      // component: () => import('../views/About.vue'),
      component: () => import('../views/About.vue'),
      alias: '/about'
    },
    // Page 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/Notfound.vue'),
      // redirect: '8',
      alias: '/NotFound'
    }
  ]
})

export default router
