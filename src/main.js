import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';

import './styles/borderLeftRight.css';

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  render: h => h(App),
}).$mount('#app');
