import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fragment',
    name: 'Fragment',
    component: () => import('../views/Fragment.vue')
  },
  {
    path: '/composition',
    name: 'CompositionAPI',
    component: () => import('../views/Composition.vue')
  },
  {
    path: '/model',
    name: 'Model',
    component: () => import('../views/Model.vue')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('../views/Teleport.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
