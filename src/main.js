// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { laptop } from './data/Laptop'
import {phone} from './data/Phone'

Vue.config.productionTip = false

localStorage.setItem('laptop', JSON.stringify(laptop))
localStorage.setItem('phone', JSON.stringify(phone))

Vue.filter('priceVn', (value) => `${value}đ`)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
