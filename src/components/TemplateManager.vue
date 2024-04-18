<template>
  <div class="template-manager">
    <h1>Template Management</h1>
    <input type="text" v-model="filter" placeholder="Filter templates..." @input="applyFilter" />
    <div v-for="template in paginatedTemplates" :key="template.id">
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
      actionStatus: '',
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  methods: {
    fetchTemplates() {
      // Fetch templates from an API and update 'templates'
    },
    applyFilter() {
      this.filteredTemplates = this.templates.filter(template => template.name.toLowerCase().includes(this.filter.toLowerCase()));
      this.handlePageChange(1);  // Reset to first page after filter
    },
    handlePageChange(page) {
      const startIndex = (page - 1) * this.itemsPerPage;
      this.paginatedTemplates = this.filteredTemplates.slice(startIndex, startIndex + this.itemsPerPage);
      this.currentPage = page;
    },
    editTemplate(id) {
      this.actionStatus = 'Editing...';
      // Implement edit logic
    },
    deleteTemplate(id) {
      this.actionStatus = 'Deleting...';
      // Implement delete logic
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

