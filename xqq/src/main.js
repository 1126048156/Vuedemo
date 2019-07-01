// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//没有引入外联，在node_modules中
import App from './App'
import router from './router'
//实际引入router下的index.js
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//将App作为根组件
  template: '<App/>'
})
