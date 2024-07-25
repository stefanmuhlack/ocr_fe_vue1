<template>
  <div class="ocr-result">
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-else>
      <h2>OCR Results</h2>
      <div v-for="(result, index) in results" :key="index" class="result-item">
        <h3>{{ result.fieldName }}</h3>
        <p>{{ result.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useLogger } from '@/composables/logger';

export default {
  name: 'OCRResult',
  setup() {
    const store = useStore();
    const logger = useLogger();
    const error = ref('');
    const results = ref([]);

    const fetchOCRResults = async () => {
      try {
        await store.dispatch('fetchOCRResults');
        results.value = store.state.ocrResults;
        logger.info('OCR results fetched successfully');
      } catch (e) {
        error.value = e.message;
        logger.error(`Failed to fetch OCR results: ${e.message}`);
      }
    };

    onMounted(() => {
      fetchOCRResults();
    });

    return { error, results };
  }
};
</script>

<style scoped>
.ocr-result {
  padding: 20px;
}

.error-message {
  color: red;
}

.result-item {
  margin-bottom: 15px;
}
</style>

</style>

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
