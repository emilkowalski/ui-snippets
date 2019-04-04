import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import App from './App.vue';
import store from './store';
import router from './router';

const cssRequire = require.context('./styles/', true, /.css$/);

cssRequire.keys().forEach((cssFilePath) => {
  cssRequire(cssFilePath);
});

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
