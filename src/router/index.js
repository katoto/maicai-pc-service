import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/intro",
        name: "Intro",
        component: () =>
            import(/* webpackChunkName: "intro" */ "../views/Intro.vue")
    },
    {
        path: "/news",
        name: "news",
        component: () => import(/* webpackChunkName: "news" */ "../views/News.vue")
    },
    {
        path: "/bigHealth",
        name: "bigHealth",
        component: () =>
            import(/* webpackChunkName: "bigHealth" */ "../views/BigHealth.vue")
    },
    {
        path: "/server",
        name: "server",
        component: () =>
            import(/* webpackChunkName: "server" */ "../views/Server.vue")
    },
    {
        path: "/contentUs",
        name: "contentUs",
        component: () =>
            import(/* webpackChunkName: "contentUs" */ "../views/ContentUs.vue")
    },
    {
        path: "/meat",
        name: "meat3",
        component: () =>
            import(/* webpackChunkName: "meat" */ "../views/Meat3.vue")
    },
    {
        path: "/greens",
        name: "greens3",
        component: () =>
            import(/* webpackChunkName: "greens" */ "../views/Greens3.vue")
    },
    {
        path: "/fruits",
        name: "fruits3",
        component: () =>
            import(/* webpackChunkName: "fruits" */ "../views/Fruits3.vue")
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router
