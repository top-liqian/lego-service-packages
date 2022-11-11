import Vue from "vue";
import App from "./App.vue";

import GSMapTimeScroll from '@gs/map-time-scroll'

import Element from 'element-ui'

import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element)

Vue.use(GSMapTimeScroll);

new Vue({
  render: h => h(App)
}).$mount("#app");
