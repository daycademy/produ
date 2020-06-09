import Vue from 'vue';
import VueCirrus from 'vue-cirrus';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-cirrus/dist/vue-cirrus.css';

Vue.use(VueCirrus);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
