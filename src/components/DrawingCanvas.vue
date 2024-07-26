<script setup>
import { ref, onMounted, reactive, toRefs } from 'vue';
import { useLogger } from '@/composables/useLogger';
import { useStore } from 'vuex';

const canvasRef = ref(null);
const logger = useLogger();
const store = useStore();
const state = reactive({
  rectangles: [],
  currentRect: null
});

onMounted(() => {
  const canvas = canvasRef.value;
  if (canvas) {
    const context = canvas.getContext('2d');
    let isDrawing = false;

    logger.info('Canvas mounted and context initialized.');

    canvas.addEventListener('mousedown', (event) => {
      isDrawing = true;
      const rect = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
        width: 0,
        height: 0
      };
      state.currentRect = rect;
      state.rectangles.push(rect);
      context.beginPath();
      logger.info('Mouse down event: Drawing started.');
    });

    canvas.addEventListener('mousemove', (event) => {
      if (isDrawing && state.currentRect) {
        const rect = state.currentRect;
        rect.width = event.clientX - canvas.offsetLeft - rect.x;
        rect.height = event.clientY - canvas.offsetTop - rect.y;
        context.clearRect(0, 0, canvas.width, canvas.height);
        state.rectangles.forEach(r => context.strokeRect(r.x, r.y, r.width, r.height));
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
      state.currentRect = null;
      context.closePath();
      logger.info('Mouse up event: Drawing ended.');
    });

    canvas.addEventListener('mouseout', () => {
      isDrawing = false;
      state.currentRect = null;
      context.closePath();
      logger.info('Mouse out event: Drawing ended.');
    });
  } else {
    logger.error('Canvas element not found.');
  }
});

const getRectangles = () => state.rectangles;

const saveRectangles = async () => {
  try {
    await store.dispatch('saveTemplateFields', { rectangles: getRectangles() });
    logger.info('Rectangles saved successfully.');
  } catch (error) {
    logger.error('Failed to save rectangles:', error.message);
  }
};

</script>

<template>
  <div>
    <canvas ref="canvasRef" width="800" height="600" style="border:1px solid #000;"></canvas>
    <button @click="saveRectangles">Save Rectangles</button>
  </div>
</template>

<style scoped>
canvas {
  display: block;
  margin: 20px auto;
}
</style>


