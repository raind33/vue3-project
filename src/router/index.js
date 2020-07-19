import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Demo from '../views/Demo.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/demo',
      component: Demo
    }
  ]
})

// router.beforeEach
export default router
