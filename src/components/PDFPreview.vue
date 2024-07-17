<template>
  <div>
    <img :src="thumbnailSrc" alt="PDF Thumbnail" @click="onThumbnailClick" />
  </div>
</template>

<script setup>
const props = defineProps({
  thumbnailSrc: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['thumbnailClicked']);

const onThumbnailClick = () => {
  emit('thumbnailClicked');
};
</script>

<style scoped>
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
</style>

