import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "@/App.vue";
import router from "@/router";
import store from "./store";

import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
// Ikonok, beállítások: https://bootstrap-vue.js.org/docs/icons/
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
