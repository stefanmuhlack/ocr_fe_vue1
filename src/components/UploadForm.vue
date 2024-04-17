<template>
  <div class="upload-form">
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile">Upload File</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    submitFile() {
      this.$emit('uploadPDF', this.file);
    }
  }
};
</script>
