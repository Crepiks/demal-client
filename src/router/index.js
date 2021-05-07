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
            meta: {
              title: "demal - вдали от городской суеты",
            },
          },
          {
            path: "/tours",
            name: "tours",
            component: Events,
            meta: {
              title: "Все туры",
            },
          },
          {
            path: "/my-tours",
            name: "my-tours",
            component: UserEvents,
            meta: {
              title: "Мои туры",
              needAuth: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Вход",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Регистрация",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = to.meta.title;
  if (to.matched.some((record) => record.meta.needAuth)) {
    if (!JSON.parse(localStorage.getItem("user"))) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
  if (to.matched.some((record) => record.meta.needSelfEmployedRegister)) {
    if (!JSON.parse(localStorage.getItem("user")).selfEmployedId) {
      next({
        path: "/self-employed",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
