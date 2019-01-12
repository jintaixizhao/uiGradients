import Vue from 'vue';
import VueClipboards from 'vue-clipboards';

import App from './App';

require('./stylesheets/app.scss');

Vue.use(VueClipboards);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

