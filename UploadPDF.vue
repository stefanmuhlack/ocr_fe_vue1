<!-- src/components/PdfUpload.vue -->

<template>
  <div>
    <input type="file" @change="uploadPdf" />
  </div>
</template>

<script>
import api from '@/api';

export default {
  methods: {
    async uploadPdf(event) {
      const file = event.target.files[0];
      if (file) {
        try {
          const formData = new FormData();
          formData.append('pdf', file);
          await api.post('/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          // Handle success or show a success message
        } catch (error) {
          // Handle error or show an error message
        }
      }
    },
  },
};
</script>
