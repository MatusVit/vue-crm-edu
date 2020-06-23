import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/router';
import store from './store';
import MessagePlugin from './utils/message.plugin';
import dateFilter from './filters/date.filters';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(MessagePlugin);
Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
