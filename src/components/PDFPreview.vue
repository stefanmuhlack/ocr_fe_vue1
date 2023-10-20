<template>
  <div>
    <!-- Display the thumbnail preview of the uploaded PDF -->
    <img :src="thumbnailSrc" alt="PDF Thumbnail" @click="onThumbnailClick" />
  </div>
</template>

<script>
export default {
  props: {
    thumbnailSrc: String,
  },
  methods: {
    onThumbnailClick() {
      // Handle the thumbnail click event
      this.$emit('thumbnailClicked');
    },
  },
};
</script>

<style>
/* Add styles for the thumbnail preview */
</style>
