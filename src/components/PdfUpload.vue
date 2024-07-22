<template>
  <div class="pdf-upload">
    <h2>Upload PDF</h2>
    <input type="file" @change="onFileChange" />
    <button @click="uploadPDF">Upload</button>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useLogger } from '@/composables/logger';

export default {
  name: 'PdfUpload',
  setup() {
    const store = useStore();
    const logger = useLogger();
    const error = ref('');
    const selectedFile = ref(null);

    const onFileChange = (event) => {
      selectedFile.value = event.target.files[0];
      logger.info(`File selected: ${selectedFile.value.name}`);
    };

    const uploadPDF = async () => {
      if (!selectedFile.value) {
        error.value = 'No file selected';
        logger.error('Upload failed: No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile.value);

      try {
        await store.dispatch('uploadPDF', formData);
        logger.info('PDF uploaded successfully');
      } catch (e) {
        error.value = e.message;
        logger.error(`Upload failed: ${e.message}`);
      }
    };

    return { error, onFileChange, uploadPDF };
  }
};
</script>

<style scoped>
.pdf-upload {
  padding: 20px;
}

.error-message {
  color: red;
}
</style>

