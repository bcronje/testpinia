import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { PiniaPlugin, createPinia } from "pinia";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(PiniaPlugin);

const pinia = createPinia();

new Vue({
  pinia,
  render: (h) => h(App),
}).$mount("#app");
