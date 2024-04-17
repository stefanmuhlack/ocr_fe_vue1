import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store'; // Import Vuex store

Vue.use(VueRouter);
Vue.config.productionTip = false;

// Enable Vue DevTools based on environment
Vue.config.devtools = process.env.NODE_ENV === 'development';

// Lazy load routes
const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./components/Home.vue') },
    { path: '/upload', component: () => import('./components/UploadForm.vue') },
    { path: '/templates', component: () => import('./components/TemplateManager.vue') }
  ]
});

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
