<template>
  <div class="upload-form">
    <h1>Upload Your Document</h1>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile" :disabled="uploading">Upload File</button>
    <progress v-if="uploading" max="100" :value="uploadProgress"></progress>
    <p v-if="uploadStatus" class="status">{{ uploadStatus }}</p>
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
      const selectedFile = event.target.files[0];
      if (!this.validateFile(selectedFile)) {
        this.uploadError = 'Invalid file type. Only PDFs are allowed.';
        return;
      }
      this.file = selectedFile;
      this.uploadStatus = 'File ready for upload';
      this.uploadError = '';
    },
    validateFile(file) {
      return file.type === 'application/pdf';
    },
    submitFile() {
      this.uploading = true;
      this.uploadStatus = 'Uploading...';
      setTimeout(() => {
        this.uploadProgress = 100;
        this.uploadStatus = 'Upload Successful!';
        this.uploading = false;
      }, 1500);
    }
  }
};
</script>

<style scoped>
.upload-form {
  text-align: center;
  margin-top: 20px;
}
.progress {
  width: 100%;
  margin-top: 10px;
}
.error {
  color: red;
}
.status {
  color: green;
}
</style>



