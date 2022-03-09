import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/slider",
    name: "Slider",
    component: () => import("../pages/Slider.vue"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../pages/Success.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
