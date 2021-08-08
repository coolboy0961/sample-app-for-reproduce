import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

const licenses = require("~/licenses.json");
console.log(licenses);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
