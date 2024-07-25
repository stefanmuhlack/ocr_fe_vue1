import { ref } from 'vue';

export function useFormValidation() {
  const errors = ref({});

  const validateRequired = (value, fieldName) => {
    if (!value || value.trim() === '') {
      errors.value[fieldName] = 'This field is required';
      return false;
    }
    errors.value[fieldName] = '';
    return true;
  };

  const validateEmail = (value, fieldName) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errors.value[fieldName] = 'Invalid email address';
      return false;
    }
    errors.value[fieldName] = '';
    return true;
  };

  return {
    errors,
    validateRequired,
    validateEmail
  };
}
