import Vue from 'vue'
import App from './App.vue'
import Router from './routes/index'
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false
Vue.use(Router)

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
