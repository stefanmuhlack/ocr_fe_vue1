<template>
  <div class="template-management">
    <h2>Template Management</h2>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="template in templates" :key="template.id">
          {{ template.name }}
          <button @click="selectTemplate(template.id)">Select</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useLogger } from '@/composables/logger';

export default {
  name: 'TemplateManagement',
  setup() {
    const store = useStore();
    const logger = useLogger();
    const error = ref('');
    const templates = ref([]);

    const fetchTemplates = async () => {
      try {
        await store.dispatch('fetchTemplates');
        templates.value = store.state.templates;
        logger.info('Templates fetched successfully');
      } catch (e) {
        error.value = e.message;
        logger.error(`Failed to fetch templates: ${e.message}`);
      }
    };

    const selectTemplate = (id) => {
      store.commit('setSelectedTemplate', id);
      logger.info(`Template selected: ${id}`);
    };

    onMounted(() => {
      fetchTemplates();
    });

    return { error, templates, selectTemplate };
  }
};
</script>

<style scoped>
.template-management {
  padding: 20px;
}

.error-message {
  color: red;
}
</style>

