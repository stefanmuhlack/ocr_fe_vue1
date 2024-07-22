<template>
  <button :class="['base-button', buttonType]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import { useLogger } from '@/composables/logger';

export default {
  name: 'BaseButton',
  props: {
    buttonType: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    onClick(event) {
      const logger = useLogger();
      logger.info(`Button clicked: ${this.buttonType}`);
      this.$emit('click', event);
    }
  }
};
</script>

<style scoped>
.base-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.base-button.default {
  background-color: #007bff;
  color: white;
}
.base-button.primary {
  background-color: #0069d9;
  color: white;
}
</style>

  border: none;
  cursor: pointer;
}
.base-button.default {
  background-color: #007bff;
  color: white;
}
.base-button.primary {
  background-color: #0069d9;
  color: white;
}
</style>
