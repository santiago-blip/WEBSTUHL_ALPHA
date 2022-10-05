import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Details from '@/views/Details.vue'
import Administration from '@/views/Administration.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/details/:id',
        name: 'details',
        component: Details
    },
    {
        path: '/admin',
        name: 'admin',
        component: Administration,
        children: [{ path: 'vacancies', name: 'vacanciesAdmin', component: () => import('@/views/AdminChildrensViews/Vacancies.vue') }],
    }
]

const router=createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
    
    routes 
})

export default router

