//import '@babel/polyfill'
import Vue from 'vue/dist/vue.js';
//import Vue from 'vue'
import App from './App.vue'
import {TweenMax, TimelineMax, EasePack} from 'gsap';
import './scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')