'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import shop from './shop';

Vue.use(Vuex);

const state = { // 要设置的全局访问的state对象
    shop,
    api
};

// 初始化vuex
const store = new Vuex.Store({ // 全局对象  项目任何组件调用： this.$store
      state,
})
export default store