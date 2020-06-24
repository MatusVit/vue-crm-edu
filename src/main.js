import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

const firebaseConfig = {
  apiKey: 'AIzaSyD5rfZp9TlTUlpxHJRxCrBAj-kKJzABN78',
  authDomain: 'vue-crm-educ.firebaseapp.com',
  databaseURL: 'https://vue-crm-educ.firebaseio.com',
  projectId: 'vue-crm-educ',
  storageBucket: 'vue-crm-educ.appspot.com',
  messagingSenderId: '128888099993',
  appId: '1:128888099993:web:9cf0aa4d36d7dd76b41408',
  measurementId: 'G-HT2KWWSHHH',
};

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
