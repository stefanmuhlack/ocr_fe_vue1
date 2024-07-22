<template>
  <div class="modal" v-if="isVisible" role="dialog" aria-modal="true">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  max-width: 600px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>

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

