import Layout from "@/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Recommed from "@/views/Recommed/index.vue";
import myMusic from "@/views/myMusic/index.vue";
import Lately from "@/views/Lately/index.vue";
import Podcast from "@/views/Podcast/index.vue";
import Collection from "@/views/Collection/index.vue";
import Download from "@/views/Download/index.vue";
import localMusic from "@/views/localMusic/index.vue";
import cloudDrive from "@/views/cloudDrive/index.vue";

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
        {
          path: "/Lately",
          name: "Lately",
          component: () => Lately,
        },
        {
          path: "/Podcast",
          name: "Podcast",
          component: () => Podcast,
        },
        {
          path: "/Collection",
          name: "Collection",
          component: () => Collection,
        },
        {
          path: "/Download",
          name: "Download",
          component: () => Download,
        },
        {
          path: "/localMusic",
          name: "localMusic",
          component: () => localMusic,
        },
        {
          path: "/cloudDrive",
          name: "cloudDrive",
          component: () => cloudDrive,
        },
      ],
    },
    { path: "/login", name: "login", component: Login },
  ],
});

export default router;
