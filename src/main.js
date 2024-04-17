import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store'; // Import Vuex store

Vue.config.productionTip = false;

// Enable Vue DevTools
Vue.config.devtools = process.env.NODE_ENV === 'development';

// Initialize the main Vue instance
new Vue({
    render: h => h(App),
    router, // Use the router
    store,  // Integrate Vuex for state management
    created() {
        // Global error handler
        this.$root.$on('error', (error) => {
            console.error('Global error handler:', error);
            // Optionally display a user-friendly error message
        });
    }
}).$mount('#app');
