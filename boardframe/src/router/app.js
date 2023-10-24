import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/app/Home/Home.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/app',
        component: () => import('@/main.vue'),
        children: [
        {
            path: '/app',
            name: '/app',
            redirect: '/app/home',
            component: () => import('@/app/App.vue'),
            children: [
                {
                    path: '/app/home',
                    name: '/app/home',
                    component: () => import('@/app/Home/Home.vue')
                },
                {
                    path: '/app/table',
                    name: '/app/table',
                    component: () => import('@/app/table/table.vue')
                },]
        }
        ,]
    }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
