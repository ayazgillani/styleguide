import "@/styles/tailwind.css";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { registerBaseComponents, loadPlugins } from "@/helpers";

loadPlugins([]);
registerBaseComponents(Vue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
