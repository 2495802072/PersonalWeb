import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MusicPage from '../views/MusicPage.vue'
import ProjectPage from '../views/ProjectPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'primaryPage',
    component: () => import('../views/primaryPage.vue')
  }, {
    path: '/primaryPage',
    name: 'primaryPage',
    component: () => import('../views/primaryPage.vue'),
    children: [{
      path: '/',
      name: 'home',
      component: HomePage
    },{
      path: '/primaryPage/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/primaryPage/music',
      name: 'music',
      component: MusicPage
    },
    {
      path: '/primaryPage/project',
      name: 'project',
      component: ProjectPage
    }]
  }, {
    path: '/peosonalResum',
    name: 'peosonalResum',
    component: () => import('../views/peosonalResum.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
