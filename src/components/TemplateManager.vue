<template>
  <div class="template-manager">
    <h1>Template Management</h1>
    <div v-for="template in templates" :key="template.id">
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
      actionStatus: ''
    };
  },
  methods: {
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
        this.actionStatus = 'Delete completed successfully!';
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
.status {
  margin-top: 10px;
  font-weight: bold;
}
</style>

