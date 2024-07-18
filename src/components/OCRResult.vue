<template>
  <div>
    <h2>OCR Results</h2>
    <div v-if="ocrText">
      <div v-html="highlightedText"></div>
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
    fields: Array, // List of fields with their positions
  },
  computed: {
    highlightedText() {
      let text = this.ocrText;
      this.fields.forEach(field => {
        const regex = new RegExp(`(${field.name})`, 'gi');
        text = text.replace(regex, '<span class="highlight">$1</span>');
      });
      return text;
    },

    highlightedText() {
      let text = this.ocrText;
      this.fields.forEach(field => {
        const regex = new RegExp(`(${field.name})`, 'gi');
        text = text.replace(regex, '<span class="highlight">$1</span>');
      });
      return text;
    },
  },
};
</script>

<style scoped>
.highlight {
  background-color: yellow;
}
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
