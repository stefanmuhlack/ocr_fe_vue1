<template>
  <div class="upload-form">
    <h1>Upload Your PDF</h1>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile">Upload File</button>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      uploadStatus: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.uploadStatus = 'File ready for upload';
    },
    submitFile() {
      this.$emit('uploadPDF', this.file);
      this.uploadStatus = 'Uploading...';
      // Add more logic here for real-time feedback using WebSockets
    }
  }
};
</script>

    }
  }
};
</script>
