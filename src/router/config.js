import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name:'home', component: HomeView },
  { path: '/projects', name:'projects', component: ProjectsView },
  { path: '/resume', name:'resume',component: ResumeView },
  { path: '/contact', name:'contact',component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router