import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');

// Error handling for Vue application
app.config.errorHandler = (err, vm, info) => {
  console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

// Global mixin to handle common functionalities
app.mixin({
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
