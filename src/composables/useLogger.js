import { ref } from 'vue';

export function useLogger() {
  const logs = ref([]);

  const log = (level, message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    logs.value.push(logMessage);
    console[level](logMessage);
  };

  const info = (message) => log('info', message);
  const error = (message) => log('error', message);
  const warn = (message) => log('warn', message);
  const debug = (message) => log('debug', message);

  return {
    logs,
    info,
    error,
    warn,
    debug
  };
}
