<!-- src/views/Home.vue -->

<template>
  <Layout>
    <div>
      <h1>OCR Frontend</h1>
      <PdfUpload />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import PdfUpload from '@/components/PdfUpload.vue';

export default {
  components: {
    Layout,
    PdfUpload,
  },
};
</script>
