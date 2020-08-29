import Vue from "vue";
import Router from "vue-router";

import NotFound from "./views/NotFound";
import Login from "./views/auth/Login";

import System from "@/views/system/System";
import Config from "@/views/config/Config";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: { name: 'login' }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/system",
            name: "system",
            component: System,
            children: [
                {
                    path: "config",
                    name: "config",
                    component: Config
                },
                {
                    path: "*",
                    name: "system.404",
                    component: NotFound
                }
            ]
        },
        {
            path: "*",
            name: "404",
            component: NotFound
        }
    ]
});