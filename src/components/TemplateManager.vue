<template>
  <div class="template-manager">
    <h1>Template Management</h1>
    <input type="text" v-model="filter" placeholder="Filter templates..." @input="applyFilter" />
    <div v-for="template in filteredTemplates" :key="template.id">
      <p>{{ template.name }}</p>
      <button @click="editTemplate(template.id)">Edit</button>
      <button @click="deleteTemplate(template.id)">Delete</button>
    </div>
    <pagination :total-items="filteredTemplates.length" :items-per-page="itemsPerPage" @page-changed="handlePageChange" />
    <p v-if="actionStatus" class="status">{{ actionStatus }}</p>
  </div>
</template>

<script>
import Pagination from './Pagination.vue';

export default {
  components: {
    Pagination
  },
  data() {
    return {
      templates: [],
      filteredTemplates: [],
      paginatedTemplates: [],
      filter: '',
      actionStatus: ''
    };
  },
  methods: {
    fetchTemplates() {
      // Fetch templates dynamically from an API and update 'templates'
      // Consider using WebSocket for real-time updates
    },
    applyFilter() {
      this.filteredTemplates = this.templates.filter(template => template.name.toLowerCase().includes(this.filter.toLowerCase()));
      this.handlePageChange(1);  // Reset to first page after filter
    },
    handlePageChange(page) {
      const startIndex = (page - 1) * this.itemsPerPage;
      this.paginatedTemplates = this.filteredTemplates.slice(startIndex, startIndex + this.itemsPerPage);
    },
    editTemplate(id) {
      // Add smooth transition and confirm message on successful edit
      this.actionStatus = 'Editing...';
      setTimeout(() => {
        this.actionStatus = 'Edit completed successfully!';
      }, 1000);
    },
    deleteTemplate(id) {
      // Add animation on delete and confirmation dialog
      this.actionStatus = 'Deleting...';
      setTimeout(() => {
        this.templates = this.templates.filter(template => template.id !== id);
        this.filteredTemplates = this.filteredTemplates.filter(template => template.id !== id);
        this.actionStatus = 'Delete completed successfully!';
      }, 1000);
    }
  },
  created() {
    this.fetchTemplates();
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

</style>

