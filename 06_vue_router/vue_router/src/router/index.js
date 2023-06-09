import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/Profile/shadow'
  },
  {
    // path: '/:pathMatch(.*)',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      name: 'shadow',
      age: 2,
      addr: "heaven's side"
    },
    children: [
      {
        path: '',
        redirect: '/home/goods',
        name: 'goods'
      },
      {
        path: 'recommendation',
        component: () => import('@/views/HomeRecommendation.vue')
      }
    ]
  },
  {
    path: '/profile/:user',
    component: () => import(/* webpackChunkName: 'profile_chunk' */ '@/views/Profile.vue')
  }
]

const router = createRouter({ routes, history: createWebHistory() })

const loginRoute = {
  path: '/login',
  component: () => import('@/views/Login.vue'),
  name: 'login'
}

const goodsRoute = {
  path: 'goods',
  component: () => import('@/views/HomeGoods.vue')
}

router.addRoute(loginRoute)
router.addRoute('home', goodsRoute)

router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    if (!localStorage.getItem('token')) {
      return {
        path: '/login'
      }
    }
  }
})

export default router
