<template>
  <div class="upload-form">
    <h1>Upload Your PDF</h1>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile">Upload File</button>
    <progress v-if="uploading" max="100" :value="uploadProgress"></progress>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      uploadStatus: '',
      uploading: false,
      uploadProgress: 0
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.uploadStatus = 'File ready for upload';
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
progress {
  width: 100%;
  margin-top: 10px;
}
</style>

