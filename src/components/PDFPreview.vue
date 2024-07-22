<template>
  <div class="pdf-preview">
    <img :src="imageSrc" @error="onError" @load="onLoad" alt="PDF preview" />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useLogger } from '@/composables/logger';

export default {
  name: 'PDFPreview',
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  },
  setup() {
    const logger = useLogger();
    const error = ref('');

    const onError = () => {
      error.value = 'Failed to load image';
      logger.error('Error loading PDF preview image');
    };

    const onLoad = () => {
      logger.info('PDF preview image loaded successfully');
    };

    return { error, onError, onLoad };
  }
};
</script>

<style scoped>
.pdf-preview {
  text-align: center;
}

.error-message {
  color: red;
}
</style>

