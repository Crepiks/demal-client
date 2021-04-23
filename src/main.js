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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
