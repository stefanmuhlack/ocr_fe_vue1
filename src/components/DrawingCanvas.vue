<script setup>
import { ref, onMounted } from 'vue';

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  if (canvas) {
    const context = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', () => {
      isDrawing = true;
      context.beginPath();
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
    });

    canvas.addEventListener('mouseout', () => {
      isDrawing = false;
      context.closePath();
    });
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
