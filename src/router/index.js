import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from '../views/Hot.vue'
import Fav from '../views/Fav.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hot',
    name: 'hot',
    component:Hot
  },
  {
    path:'/fav',
    name:'fav',
    component:Fav
  },
  {
    path:'/user',
    name:'user',
    component:User
  }
]

const router = new VueRouter({
  routes
})

export default router
