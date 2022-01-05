import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("@/views/home/Home.vue")
  },
  {
    path: "/classification",
    component: () => import("@/views/classification/classification.vue")
  },
  {
    path: "/cart",
    component: () => import("@/views/cart/cart.vue")
  },
  {
    path: "/my",
    component: () => import("@/views/my/my.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
