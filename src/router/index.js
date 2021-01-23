import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Demo from '../views/Demo.vue'
// 自动导入后缀为router.js的文件
// const requireService = require.context('.', false, /\.router\.js$/)
let routes = []
// requireService.keys().forEach(filename => {
//   const config = requireService(filename)
//   routes = routes.concat(config.default)
// })
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
    },
    ...routes
  ]
})

// router.beforeEach
export default router
