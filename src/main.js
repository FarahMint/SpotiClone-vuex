import Vue from 'vue';
import App from './App.vue';
import store from './store';

/**font awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner ,faSearch, faHeart, faMusic} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpinner, faSearch, faHeart, faMusic);
Vue.component('font-awesome-icon', FontAwesomeIcon);
/** import router */
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  router ,
  render: h => h(App)
}).$mount('#app')
