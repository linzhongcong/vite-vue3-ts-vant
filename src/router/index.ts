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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
