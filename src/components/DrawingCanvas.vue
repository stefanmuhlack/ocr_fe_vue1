<script setup>
import { ref, onMounted } from 'vue';
import { useLogger } from '@/composables/logger';

const canvasRef = ref(null);
const logger = useLogger();

onMounted(() => {
  const canvas = canvasRef.value;
  if (canvas) {
    const context = canvas.getContext('2d');
    let isDrawing = false;

    logger.info('Canvas mounted and context initialized.');

    canvas.addEventListener('mousedown', () => {
      isDrawing = true;
      context.beginPath();
      logger.info('Mouse down event: Drawing started.');
    });

    canvas.addEventListener('mousemove', (event) => {
      if (isDrawing) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
      context.closePath();
      logger.info('Mouse up event: Drawing ended.');
    });

    canvas.addEventListener('mouseout', () => {
      isDrawing = false;
      context.closePath();
      logger.info('Mouse out event: Drawing ended.');
    });
  } else {
    logger.error('Canvas element not found.');
  }
});
</script>

<template>
  <div>
    <canvas ref="canvasRef" width="800" height="600" style="border:1px solid #000;"></canvas>
  </div>
</template>

<style scoped>
canvas {
  display: block;
  margin: 20px auto;
}
</style>

