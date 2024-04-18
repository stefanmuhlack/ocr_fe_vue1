<template>
  <div class="template-manager">
    <h1>Template Management</h1>
    <input type="text" v-model="filter" placeholder="Filter templates..." @input="applyFilter" />
    <div v-for="template in filteredTemplates" :key="template.id">
      <p>{{ template.name }}</p>
      <button @click="editTemplate(template.id)">Edit</button>
      <button @click="deleteTemplate(template.id)">Delete</button>
    </div>
    <p v-if="actionStatus" class="status">{{ actionStatus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templates: [{ id: 1, name: 'Template 1' }, { id: 2, name: 'Template 2' }],
      filteredTemplates: [],
      filter: '',
      actionStatus: ''
    };
  },
  methods: {
    applyFilter() {
      this.filteredTemplates = this.templates.filter(template => template.name.toLowerCase().includes(this.filter.toLowerCase()));
    },
    editTemplate(id) {
      this.actionStatus = 'Editing...';
      setTimeout(() => {
        this.actionStatus = 'Edit completed successfully!';
      }, 1000);
    },
    deleteTemplate(id) {
      this.actionStatus = 'Deleting...';
      setTimeout(() => {
        this.templates = this.templates.filter(template => template.id !== id);
        this.filteredTemplates = this.filteredTemplates.filter(template => template.id !== id);
        this.actionStatus = 'Delete completed successfully!';
      }, 1000);
    }
  },
  created() {
    this.applyFilter(); // Initialize filtered templates
  }
};
</script>

<style scoped>
.template-manager {
  text-align: center;
  margin-top: 20px;
}
button {
  margin: 5px;
}
.status {
  margin-top: 10px;
  font-weight: bold;
}
</style>

