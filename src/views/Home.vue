<!-- src/views/Home.vue -->

<template>
  <Layout>
    <div class="home">
      <h1>OCR Frontend</h1>
      <PdfUpload @uploadSuccess="handleUploadSuccess" @uploadError="handleUploadError" />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import PdfUpload from '@/components/PdfUpload.vue';
import { useLogger } from '@/composables/useLogger';

export default {
  components: {
    Layout,
    PdfUpload,
  },
  setup() {
    const logger = useLogger();

    const handleUploadSuccess = (data) => {
      logger.info('PDF uploaded successfully', data);
    };

    const handleUploadError = (error) => {
      logger.error('PDF upload failed', error);
    };

    return {
      handleUploadSuccess,
      handleUploadError,
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.home h1 {
  margin-bottom: 20px;
}
</style>

    PdfUpload,
  },
};
</script>
