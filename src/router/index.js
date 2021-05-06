import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import defaultLayout from "@/components/layouts/default-layout.vue";
import headerLayout from "@/components/layouts/header-layout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Events from "@/views/Events.vue";
import UserEvents from "@/views/UserEvents.vue";
import SelfEmployed from "@/views/SelfEmployed.vue";
import AddEvent from "@/views/AddEvent.vue";

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
            path: "/events",
            name: "events",
            component: Events,
            meta: {
              title: "Мероприятия",
            },
          },
          {
            path: "/my-events",
            name: "my-events",
            component: UserEvents,
            meta: {
              title: "Мои мероприятия",
              needAuth: true,
            },
          },
          {
            path: "/self-employed",
            name: "self-employed",
            component: SelfEmployed,
            meta: {
              title: "Регистрация самозанятого",
              needAuth: true,
            },
          },
          {
            path: "/events/add",
            name: "add-event",
            component: AddEvent,
            meta: {
              title: "Создать мероприятие",
              needAuth: true,
              needSelfEmployedRegister: true,
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
