import Vue from "vue";
import Router from "vue-router";

import Layout from "../components/layout/Layout.vue";
import Home from "../components/Home.vue";
import Report from "../components/Report.vue";
import Profile from "../components/Profile.vue";
import Dashboard from "../components/Dashboard.vue";
import Auth from "../views/Auth.vue";
import Page404 from "../views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: "/app",
      name: "app",
      component: Layout,
      children: [
        {
          path: "admin",
          name: "home",
          component: Home
        },
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "report",
          name: "report",
          component: Report
        }
      ]
    },
    {
      path: "/",
      redirect: "/auth"
    },
    {
      path: "*",
      component: Page404
    }
  ]
});
