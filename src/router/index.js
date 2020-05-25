import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import Login from '@/views/Login.vue'
import UserInfo from '@/views/UserInfo.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userinfo',
    component: UserInfo
  },
]

const router = new VueRouter({
  routes
})

export default router
