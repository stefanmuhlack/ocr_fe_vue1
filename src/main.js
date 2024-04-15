import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store'; // Import Vuex store

Vue.config.productionTip = false;

// Initialize the main Vue instance
new Vue({
    render: h => h(App),
    router, // Use the router
    store,  // Integrate Vuex for state management
}).$mount('#app');
