import Vue from 'vue';
import App from './App';
import routes from './router';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from '../store';
import 'bootstrap3/dist/css/bootstrap.css';
import 'bootstrap3/dist/js/bootstrap.js';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.emulateJSON = true; // 解决vue-resource 跨域问题
Vue.use(VueRouter);

// 只能使用router这个名字
var router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  template:'<app/>',
  components: { App }
});
app.$mount('#app');

// router.go('sell');
console.log('APP started...');
