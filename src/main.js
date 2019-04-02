import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import './styles/borderLeftRight.css';
import './styles/donutSpinner.css';
import './styles/borderFade.css';
import './styles/depthButton.css';
import './styles/gradientBorder.css';
import './styles/arrowBounce.css';
import './styles/buttonLeft.css';
import './styles/siblingFade.css';
import './styles/radiusButton.css';
import './styles/glowButton.css';
import './styles/borderCenter.css';
import './styles/borderMarker.css';
import './styles/textAnimationLeft.css';
import './styles/gradientText.css';
import './styles/lineThrough.css';
import './styles/slideRight.css';
import './styles/borderRightLeft.css';
import './styles/textRightLeft.css';
import './styles/iconRadius.css';
import './styles/lineThroughBox.css';
import './styles/textZoom.css';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
