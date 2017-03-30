// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#myvue',
  router,
  template: '<App/>',
  components: { App }
})

let myvue = document.getElementById("appContainer");
let isId = vm.$el === myvue;
console.log("??? ", isId);
console.log("??? ", myvue);
console.log("??? ", vm.$el);
console.log("vm: ", vm);


var data = { a: 1 };
var vInstance = new Vue({
    data: data
})

const log = console.log.bind(null);

log( "??? ", vInstance.a === data.a )
