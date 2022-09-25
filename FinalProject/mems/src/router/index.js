import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mems',
    name: 'mems',
    component: () => import('../views/memViews.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewVue.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/OurVideo.vue')
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router