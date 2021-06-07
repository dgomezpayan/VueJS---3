import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/jobs/jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: () => import('../views/jobs/jobDetails.vue')
  },
  { // redirect
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
