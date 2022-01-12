import { createWebHistory, createRouter } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import TaskPage from '@/pages/TaskPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: IndexPage,
  },
  {
    path: '/tasks/:id',
    name: 'Task',
    component: TaskPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
