import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuex from 'vuex'

Vue.config.productionTip = false

// Use Vuex
Vue.use(Vuex)

// Create a new Vuex store
const store = new Vuex.Store({
state: {
// your state here
},
mutations: {
// your mutations here
}
})

new Vue({
router,
store,  // Add the store to the Vue instance
render: h => h(App)
}).$mount('#app')
