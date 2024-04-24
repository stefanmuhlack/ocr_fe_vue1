<template>
  <div class="template-manager">
    <h1>Template Manager</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div>
      <button @click="fetchTemplates">Refresh Templates</button>
      <ul>
        <li v-for="template in templates" :key="template.id">
          <span>{{ template.name }}</span> - <span>{{ template.description }}</span>
          <button @click="selectTemplate(template.id)">Edit</button>
          <button @click="deleteTemplate(template.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'TemplateManager',
  setup() {
    const store = useStore();
    const error = ref('');
    const templates = ref([]);

    onMounted(() => {
      store.dispatch('fetchTemplates').catch(e => {
        error.value = e.message;
      });
    });

    const selectTemplate = (id) => {
      store.commit('setCurrentTemplate', store.state.templates.find(t => t.id === id));
    };

    const deleteTemplate = (id) => {
      store.dispatch('deleteTemplate', id).then(() => {
        store.dispatch('fetchTemplates');
      }).catch(e => {
        error.value = e.message;
      });
    };

    return { error, templates, selectTemplate, deleteTemplate };
  }
});
</script>

<style scoped>
.template-manager {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>

