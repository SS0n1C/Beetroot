import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Characters",
    component: () => import("../views/Characters.vue")
  },
  {
    path: "/",
    name: "Episodes",
    component: () => import("../views/Episodes.vue")
  },
  {
    path: "/",
    name: "Location",
    component: () => import("../views/Location.vue")
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
