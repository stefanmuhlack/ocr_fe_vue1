import { ref } from 'vue';

export function useAuth() {
  const token = ref(localStorage.getItem('token') || '');

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  };

  const clearToken = () => {
    token.value = '';
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => !!token.value;

  return {
    token,
    setToken,
    clearToken,
    isAuthenticated
  };
}
