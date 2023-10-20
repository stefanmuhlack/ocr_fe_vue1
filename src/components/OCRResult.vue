<template>
  <div>
    <h2>OCR Results</h2>
    <div v-if="ocrText">
      <pre>{{ ocrText }}</pre>
    </div>
    <div v-else>
      <p>No OCR results available.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ocrText: String,
  },
};
</script>

<style scoped>
/* Add styles for this component */
</style>
