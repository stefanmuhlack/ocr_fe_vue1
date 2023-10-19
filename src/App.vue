<template>
  <div id="app">
    <header>
      <h1>OCR Frontend</h1>
    </header>
    <main>
      <!-- Add your components here -->
      <UploadPDF @uploadPDF="handleUpload" />
      <OCRResults :ocrText="ocrText" />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import UploadPDF from './components/UploadPDF.vue';
import OCRResults from './components/OCRResults.vue';

export default {
  components: {
    UploadPDF,
    OCRResults,
  },
  data() {
    return {
      ocrText: null,
    };
  },
  methods: {
    async handleUpload(pdfFile) {
      try {
        // Create a FormData object to send the file to the backend
        const formData = new FormData();
        formData.append('pdf', pdfFile);

        // Make a POST request to your backend API to upload the PDF
        const response = await axios.post('pdf/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Check if the upload was successful and the backend responded with OCR results
        if (response.status === 200 && response.data && response.data.ocrText) {
          this.ocrText = response.data.ocrText;
        } else {
          // Handle the case where the backend response is not as expected
          console.error('Unexpected response from the backend:', response);
          this.ocrText = null;
        }
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error uploading PDF:', error);
        this.ocrText = null;
      }
    },
  },
};
</script>

<style>
<!-- ... -->
</style>
I