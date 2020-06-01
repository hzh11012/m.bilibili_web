import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import Login from '@/views/Login.vue'
import UserInfo from '@/views/UserInfo.vue'
import Home from '@/views/Home.vue'
import HomeTab from '../components/Home/HomeTab.vue'
import ChanelTab from '../components/Home/ChanelTab.vue'
import Video from '@/views/Video.vue'
import Tag from '@/views/Tag.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/register', component: register
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/userinfo', component: UserInfo
  },
  {
    path: '/home', component: Home,
    children: [
      { path: '/home/home', component: HomeTab },
      { path: '/home/chanel', component: ChanelTab },
    ]
  },
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/video', component: Video
  },
  {
    path: '/tag', component: Tag
  },
]


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
