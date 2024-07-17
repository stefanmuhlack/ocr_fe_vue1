<!-- src/components/TemplateManagement.vue -->
<script setup>
import { ref } from 'vue';
import TemplateManager from './TemplateManager.vue';

const templates = ref([]);
const error = ref('');
const selectedTemplate = ref(null);

const fetchTemplates = async () => {
  try {
    // Call the API to fetch templates
    const response = await fetch('/api/templates');
    templates.value = await response.json();
  } catch (e) {
    error.value = e.message;
  }
};

fetchTemplates();

const selectTemplate = (template) => {
  selectedTemplate.value = template;
};
</script>

<template>
  <div>
    <h1>Template Management</h1>
    <div v-if="error">{{ error }}</div>
    <TemplateManager :templates="templates" @select="selectTemplate" />
    <DrawingCanvas v-if="selectedTemplate" :template="selectedTemplate" />
  </div>
</template>

<style scoped>
/* Add relevant styles here */
</style>
