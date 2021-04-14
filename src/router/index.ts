import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/views/Main.vue";
import Feladat from "@/views/Feladat.vue";
import Javitasi from "@/views/Javitasi.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/feladat",
    name: "Feladat",
    component: Feladat
  },
  {
    path: "/javitasi",
    name: "Javitasi",
    component: Javitasi
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
