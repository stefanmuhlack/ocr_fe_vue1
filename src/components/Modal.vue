<template>
  <transition name="fade">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    visible: Boolean
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const close = () => {
      emit('update:visible', false);
    };

    return { close };
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
</style>

