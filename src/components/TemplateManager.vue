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
      <DrawingCanvas v-if="selectedTemplate" />
      <button @click="saveTemplateFields">Save Fields</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import DrawingCanvas from './DrawingCanvas.vue';

export default defineComponent({
  name: 'TemplateManager',
  components: { DrawingCanvas },
  setup() {
    const store = useStore();
    const error = ref('');
    const templates = ref([]);
    const selectedTemplate = ref(null);

    const fetchTemplates = async () => {
      try {
        await store.dispatch('fetchTemplates');
        templates.value = store.state.templates;
      } catch (e) {
        error.value = e.message;
      }
    };

    onMounted(() => {
      fetchTemplates();
    });

    const selectTemplate = (id) => {
      selectedTemplate.value = store.state.templates.find(t => t.id === id);
    };

    const deleteTemplate = async (id) => {
      try {
        await store.dispatch('deleteTemplate', id);
        fetchTemplates();
      } catch (e) {
        error.value = e.message;
      }
    };

    const saveTemplateFields = async () => {
      try {
        const fields = getRectangles(); // Function from DrawingCanvas to get drawn rectangles
        await store.dispatch('updateTemplate', {
          ...selectedTemplate.value,
          fields,
        });
      } catch (e) {
        error.value = e.message;
      }
    };

    return { error, templates, selectedTemplate, selectTemplate, deleteTemplate, saveTemplateFields };
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

    const fetchTemplates = async () => {
      try {
        await store.dispatch('fetchTemplates');
        templates.value = store.state.templates;
      } catch (e) {
        error.value = e.message;
      }
    };

    onMounted(() => {
      fetchTemplates();
    });

    const selectTemplate = (id) => {
      store.commit('setCurrentTemplate', store.state.templates.find(t => t.id === id));
    };

    const deleteTemplate = async (id) => {
      try {
        await store.dispatch('deleteTemplate', id);
        fetchTemplates();
      } catch (e) {
        error.value = e.message;
      }
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

