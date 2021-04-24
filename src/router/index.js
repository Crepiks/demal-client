import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import defaultLayout from "@/components/layouts/default-layout.vue";
import headerLayout from "@/components/layouts/header-layout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Events from "@/views/Events.vue";
import UserEvents from "@/views/UserEvents.vue";

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
          {
            path: "/events",
            name: "houses",
            component: Events,
          },
          {
            path: "/my-events",
            name: "my-events",
            component: UserEvents,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
