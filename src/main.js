// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false
Vue.use(VueLodash)

export const bus = new Vue();
export let routeDataStorage = new Array();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
