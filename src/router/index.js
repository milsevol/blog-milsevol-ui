import Vue from 'vue'
import VueRouter from 'vue-router'

/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: '首页'
      },
      {
        path: 'detail',
        component: () => import('@/views/detail/index'),
        name: '详情'
      },
      {
        path: 'timeline',
        component: () => import('@/views/timeline/index'),
        name: '时间轴'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
