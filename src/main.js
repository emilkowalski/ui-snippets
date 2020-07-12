import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";

Vue.config.productionTip = false;

const cssRequire = require.context("./styles/", true, /.css$/);

cssRequire.keys().forEach(cssFilePath => {
  cssRequire(cssFilePath);
});

new Vue({
  render: h => h(App)
}).$mount("#app");
