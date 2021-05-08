import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import YandexMaps from "vue-yandex-maps";

const settings = {
  apiKey: "1663fba3-2889-4f83-ad0a-974c34d39d9b",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};

Vue.use(YandexMaps, settings);

import Skeleton from "vue-loading-skeleton";
Vue.use(Skeleton);

import vuescroll from "vuescroll/dist/vuescroll-native";
Vue.use(vuescroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
