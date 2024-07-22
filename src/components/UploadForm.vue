<template>
  <div class="upload-form">
    <h2>Upload Document</h2>
    <input type="file" @change="onFileChange" />
    <button @click="uploadDocument">Upload</button>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useLogger } from '@/composables/logger';

export default {
  name: 'UploadForm',
  setup() {
    const store = useStore();
    const logger = useLogger();
    const error = ref('');
    const selectedFile = ref(null);

    const onFileChange = (event) => {
      selectedFile.value = event.target.files[0];
      logger.info(`File selected: ${selectedFile.value.name}`);
    };

    const uploadDocument = async () => {
      if (!selectedFile.value) {
        error.value = 'No file selected';
        logger.error('Upload failed: No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile.value);

      try {
        await store.dispatch('uploadDocument', formData);
        logger.info('Document uploaded successfully');
      } catch (e) {
        error.value = e.message;
        logger.error(`Upload failed: ${e.message}`);
      }
    };

    return { error, onFileChange, uploadDocument };
  }
};
</script>

<style scoped>
.upload-form {
  padding: 20px;
}

.error-message {
  color: red;
}
</style>

    uploading.value = false;
  }, 1500);
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

<template>
  <div class="upload-form">
    <h1>Upload Your Document</h1>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile" :disabled="uploading || !file">Upload File</button>
    <progress v-if="uploading" max="100" :value="uploadProgress"></progress>
    <p v-if="uploadStatus" class="status">{{ uploadStatus }}</p>
    <p v-if="uploadError" class="error">{{ uploadError }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const file = ref(null);
const uploadStatus = ref('');
const uploadError = ref('');
const uploading = ref(false);
const uploadProgress = ref(0);

const handleFileUpload = (event) => {
  const selectedFile = event.target.files[0];
  if (!validateFile(selectedFile)) {
    uploadError.value = 'Invalid file type or size. Only PDF, TIFF, and PNG files under 5MB are allowed.';
    return;
  }
  file.value = selectedFile;
  uploadStatus.value = 'File ready for upload';
  uploadError.value = '';
};

const validateFile = (file) => {
  return ['application/pdf', 'image/tiff', 'image/png'].includes(file.type) && file.size <= 5000000;
};

const submitFile = () => {
  uploading.value = true;
  uploadStatus.value = 'Uploading...';
  setTimeout(() => {
    uploadProgress.value = 100;
    uploadStatus.value = 'Upload Successful!';
    uploading.value = false;
  }, 1500);
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

</style>



