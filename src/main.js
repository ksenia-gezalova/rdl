import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = true;

Array.prototype.remove = function () {
  var what, a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')