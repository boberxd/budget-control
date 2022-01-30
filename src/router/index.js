import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/index/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index, 
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/stats',
        name: 'Statistics',
        component: () => import('@/views/Statistics.vue')
      },
      {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/Categories.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
