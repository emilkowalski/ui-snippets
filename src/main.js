import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './styles/borderLeftRight.css';
import './styles/donutSpinner.css';
import './styles/bouncingLoader.css';
import './styles/borderFade.css';
import './styles/depthButton.css';
import './styles/gradientBorder.css';
import './styles/arrowBounce.css';
import './styles/buttonLeft.css';

import App from './App.vue';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faArrowDown);

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  render: h => h(App),
}).$mount('#app');
