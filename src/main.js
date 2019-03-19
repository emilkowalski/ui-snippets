import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './styles/borderLeftRight.css';
import './styles/donutSpinner.css';
import './styles/bouncingLoader.css';
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
import './styles/textZoom.css';

import App from './App.vue';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faArrowDown, faAngleRight);

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  render: h => h(App),
}).$mount('#app');
