<template>
  <div class="template-manager">
    <h1>Template Management</h1>
    <div v-for="template in templates" :key="template.id">
      <p>{{ template.name }}</p>
      <button @click="editTemplate(template.id)">Edit</button>
      <button @click="deleteTemplate(template.id)">Delete</button>
    </div>
    <p v-if="actionStatus">{{ actionStatus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templates: [{ id: 1, name: 'Template 1' }, { id: 2, name: 'Template 2' }],
      actionStatus: ''
    };
  },
  methods: {
    editTemplate(id) {
      this.actionStatus = 'Editing...';
      // Simulate editing logic
      setTimeout(() => {
        this.actionStatus = 'Edit completed';
      }, 1000);
    },
    deleteTemplate(id) {
      this.actionStatus = 'Deleting...';
      setTimeout(() => {
        this.templates = this.templates.filter(template => template.id !== id);
        this.actionStatus = 'Delete completed';
      }, 1000);
    }
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
</style>

</script>
