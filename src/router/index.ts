import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
