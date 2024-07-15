import Layout from "@/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Recommed from "@/views/Recommed/index.vue";
import myMusic from "@/views/myMusic/index.vue";
// import Login from "@/views/Login/index.vue";

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "recommed",
      children: [
        {
          path: "/recommed",
          name: "recommed",
          component: () => Recommed,
        },
        {
          path: "/myMusic",
          name: "myMusic",
          component: () => myMusic,
        },
      ],
    },
    { path: "/login", name: "login", component: Login },
  ],
});

export default router;
