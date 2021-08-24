import Vue from 'vue'
import remoteComponentLoader from '../../components/remote-component-loader.vue';
import luckyDraw from './index.vue';
import '@assets/js/import';
Vue.component('remoteComponentLoader',remoteComponentLoader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(luckyDraw)
}).$mount('#app')

