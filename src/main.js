import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import "./globalComponents";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
