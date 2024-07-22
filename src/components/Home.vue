<template>
  <div class="home">
    <h1>Welcome to the OCR System</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-if="activities.length">
      <h2>Recent Activities</h2>
      <ul>
        <li v-for="activity in activities" :key="activity.id">{{ activity.description }}</li>
      </ul>
    </div>
    <div v-else>
      <p>No recent activities found.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useLogger } from '@/composables/logger';

export default {
  name: 'Home',
  setup() {
    const store = useStore();
    const logger = useLogger();
    const error = ref('');
    const activities = ref([]);

    const fetchRecentActivities = async () => {
      try {
        await store.dispatch('fetchRecentActivities');
        activities.value = store.state.activities;
        logger.info('Recent activities fetched successfully');
      } catch (e) {
        error.value = e.message;
        logger.error(`Failed to fetch recent activities: ${e.message}`);
      }
    };

    onMounted(() => {
      fetchRecentActivities();
    });

    return { error, activities };
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.error-message {
  color: red;
}
</style>

});
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
</style>

