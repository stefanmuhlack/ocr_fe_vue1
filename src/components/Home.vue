<template>
  <div class="home">
    <h1>Welcome to the OCR App</h1>
    <p>This app uses advanced OCR technology to process your documents.</p>
    <div>
      <h2>Recent Activities</h2>
      <ul>
        <li v-for="activity in recentActivities" :key="activity.id">
          {{ activity.description }} - {{ activity.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore();
    const recentActivities = store.state.recentActivities;

    onMounted(() => {
      store.dispatch('fetchRecentActivities');
    });

    return { recentActivities };
  }
});
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
</style>

