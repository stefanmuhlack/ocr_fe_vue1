<template>
  <div class="upload-form">
    <h1>Upload Your PDF</h1>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile">Upload File</button>
    <progress v-if="uploading" max="100" :value="uploadProgress"></progress>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
    <p v-if="uploadError" class="error">{{ uploadError }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      uploadStatus: '',
      uploadError: '',
      uploading: false,
      uploadProgress: 0
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.uploadStatus = 'File ready for upload';
      this.uploadError = ''; // Reset error on new upload
    },
    submitFile() {
      this.uploading = true;
      this.uploadStatus = 'Uploading...';
      // Simulate upload progress
      const interval = setInterval(() => {
        if (this.uploadProgress < 100) {
          this.uploadProgress += 10;
        } else {
          clearInterval(interval);
          this.uploadStatus = 'Upload Complete';
          this.uploading = false;
          // Simulate error handling
          if (this.file.size > 5000000) { // 5MB for example
            this.uploadError = 'File is too large. Please upload a smaller file.';
            this.uploadStatus = '';
          }
        }
      }, 300);
    }
  }
};
</script>

<style scoped>
.upload-form {
  text-align: center;
  margin-top: 20px;
}
.error {
  color: red;
}
</style>


