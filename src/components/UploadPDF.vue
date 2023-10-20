<template>
  <div>
    <h2>Upload PDF</h2>
    <input type="file" @change="handleFileUpload" accept=".pdf">
    <button @click="uploadPDF">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadPDF() {
      // Implement the code to upload the selected PDF file to your backend here
      // You can use Axios or another HTTP library for this purpose
    },
  },
};
</script>

<style scoped>
/* Add styles for this component */
</style>
