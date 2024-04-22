<template>
  <div class="template-manager">
    <h1>Template Manager</h1>
    <div v-for="template in templates" :key="template.id">
      <p>{{ template.name }}</p>
      <button @click="editTemplate(template.id)">Edit</button>
      <button @click="deleteTemplate(template.id)">Delete</button>
    </div>
    <pagination :total-pages="totalPages" :current-page="currentPage" @change-page="handlePageChange"></pagination>
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
      currentPage: 1,
      totalPages: 5  // Assume 5 pages for demo purposes
    };
  },
  methods: {
    fetchTemplates() {
      this.templates = [{ id: 1, name: 'Template 1' }, { id: 2, name: 'Template 2' }, { id: 3, name: 'Template 3' }]; // Static data for demonstration
      this.applyFilter();
    },
    applyFilter() {
      this.filteredTemplates = this.templates.filter(template => template.name.toLowerCase().includes(this.filter.toLowerCase()));
      this.handlePageChange(this.currentPage);
    },
    handlePageChange(page) {
      const startIndex = (page - 1) * 10; // Assuming 10 items per page
      this.paginatedTemplates = this.filteredTemplates.slice(startIndex, startIndex + 10);
    },
    editTemplate(id) {
      this.$emit('edit-template', id);
    },
    deleteTemplate(id) {
      this.templates = this.templates.filter(template => template.id !== id);
      this.filteredTemplates = this.filteredTemplates.filter(template => template.id !== id);
      this.applyFilter();  // Reapply filter to update pagination
    }
  },
  created() {
    this.fetchTemplates();
  }
};
</script>

<style scoped>
.template-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
button {
  margin: 5px;
}
.status {
  margin-top: 10px;
  font-weight: bold;
}
</style>
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

// Path: src/components/Pagination.vue
<template>
  <div class="pagination
    <button @click="changePage('prev')" :disabled="currentPage === 1">Previous</button>
    <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
    <button @click="changePage('next')" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>


