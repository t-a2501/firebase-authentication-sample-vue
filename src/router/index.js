import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Success from '@/components/Success'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
