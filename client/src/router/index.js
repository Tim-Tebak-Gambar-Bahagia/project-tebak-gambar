import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
