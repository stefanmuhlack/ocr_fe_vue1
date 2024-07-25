import axios from 'axios';
import { useLogger } from './useLogger';

export function useApiClient() {
  const logger = useLogger();

  const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  apiClient.interceptors.request.use(request => {
    logger.info(`Requesting ${request.method.toUpperCase()} ${request.url}`);
    return request;
  }, error => {
    logger.error(`Request error: ${error.message}`);
    return Promise.reject(error);
  });

  apiClient.interceptors.response.use(response => {
    logger.info(`Response from ${response.config.url}: ${response.status}`);
    return response;
  }, error => {
    logger.error(`Response error: ${error.message}`);
    return Promise.reject(error);
  });

  return {
    apiClient
  };
}