import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toast, { timeout: 5000, position: POSITION.TOP_RIGHT });

app.mount('#app');

// Global error handler for Vue application
app.config.errorHandler = (err, vm, info) => {
  console.error(`Error: ${err.toString()}\nInfo: ${info}`);
  app.config.globalProperties.$toast.error(`An error occurred: ${err.message}`);
};

// Global error handler for Vue application
app.config.errorHandler = (err, vm, info) => {
  console.error(`Error: ${err.toString()}\nInfo: ${info}`);
  app.provide('toast').error(`An error occurred: ${err.message}`);
};

  methods: {
    notify(message, type) {
      // Implement notification logic here, could integrate with a UI framework's notification system
      console.log(`Notification: ${message} - Type: ${type}`);
    }
  }
});
      // Optionally display a user-friendly error message
    });
  }
}).$mount('#app');
