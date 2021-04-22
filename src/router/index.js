import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import defaultLayout from "@/components/layouts/default-layout.vue";
import headerLayout from "@/components/layouts/header-layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "defaultLayout",
    component: defaultLayout,
    children: [
      {
        path: "/",
        name: "headerLayout",
        component: headerLayout,
        children: [
          {
            path: "/",
            name: "Home",
            component: Home,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
