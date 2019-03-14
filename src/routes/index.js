import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//router-level code splitting
const SignUpView = () => import("../views/SignUpView.vue");
const LoginView = () => import("../views/LoginView.vue");
const HomePageView = () => import("../views/HomeView.vue");

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: HomePageView
    },
    {
      path: "/sign-up",
      component: SignUpView
    },
    {
      path: "/login",
      component: LoginView
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
