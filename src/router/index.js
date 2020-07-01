import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/characters",
        name: "Characters",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/character/index.vue"
            )
    },
    {
        path: "/characters/:id",
        name: "Character",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/character/_id.vue")
    },
    {
        path: "*",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Error.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
