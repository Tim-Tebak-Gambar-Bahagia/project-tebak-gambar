import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Guide from '../views/HowTo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/guide',
        name: 'guide',
        component: Guide
      } 
    ]
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next('/')
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
