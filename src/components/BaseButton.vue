<template>
  <button :class="['base-button', buttonType]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
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
