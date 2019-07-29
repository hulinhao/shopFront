// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from '../store';

/* eslint-disable no-new */
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true; // 解决vue-resource 跨域问题

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
