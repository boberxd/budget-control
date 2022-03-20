import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/index/Index.vue'
import store from '../store/user'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index, 
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue'),
        beforeEnter (to, from, next) {
          store.state.user ? next() : next('/login')
        }
      },
      {
        path: '/stats',
        name: 'Statistics',
        component: () => import('@/views/Statistics.vue'),
        beforeEnter (to, from, next) {
          store.state.user ? next() : next('/login')
        }
      },
      {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/Categories.vue'),
        beforeEnter (to, from, next) {
          store.state.user ? next() : next('/login')
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
