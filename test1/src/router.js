
import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '@/views/Test.vue'
import App from '@/views/App.vue'


const routes = [
  {
    path: '/',
    name: 'test',
    component: TestPage
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router