<script setup>
import { ref, onMounted } from 'vue';

const thumbnails = ref([]);

onMounted(() => {
  // Logic to fetch and display thumbnails
});
</script>

<template>
  <div class="thumbnail-preview">
    <div v-for="(thumbnail, index) in thumbnails" :key="index">
      <img :src="thumbnail.src" :alt="thumbnail.alt" />
    </div>
  </div>
</template>

<style scoped>
.thumbnail-preview {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail-preview img {
  margin: 5px;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>

