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
    path: '/transitions',
    name: 'Transitions',
    component: () => import('../views/Transition.vue')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('../views/Teleport.vue')
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: () => import('../views/Suspense.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
