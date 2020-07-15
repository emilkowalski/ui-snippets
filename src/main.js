import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import "./assets/css/index.css";
import store from "./store";

Vue.use(VueClipboard);

Vue.config.productionTip = false;

const cssRequire = require.context("./styles/", true, /.css$/);

cssRequire.keys().forEach(cssFilePath => {
  cssRequire(cssFilePath);
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
