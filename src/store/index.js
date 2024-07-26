import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { useLogger } from '@/composables/logger';

Vue.use(Vuex);

const logger = useLogger();

const errorHandler = (error, commit) => {
  logger.error('Error caught in Vuex:', error);
  commit('setError', error.message);
};

export default new Vuex.Store({
  state: {
    templates: [],
    currentTemplate: null,
    uploadStatus: '',
    error: null,
    recentActivities: []
  },
  mutations: {
    setTemplates(state, templates) {
      state.templates = templates;
      logger.info('Templates state updated:', templates);
    },
    setCurrentTemplate(state, template) {
      state.currentTemplate = template;
      logger.info('Current template state updated:', template);
    },
    setUploadStatus(state, status) {
      state.uploadStatus = status;
      logger.info('Upload status updated:', status);
    },
    setError(state, error) {
      state.error = `Error: ${error}`;
      logger.error('Vuex Error:', error);
    },
    setRecentActivities(state, activities) {
      state.recentActivities = activities;
      logger.info('Recent activities state updated:', activities);
    }
  },
  actions: {
    async fetchTemplates({ commit }) {
      try {
        const response = await axios.get('/api/templates');
        commit('setTemplates', response.data);
        logger.info('Fetched templates:', response.data);
      } catch (error) {
        errorHandler(error, commit);
      }
    },
    async updateTemplate({ commit }, template) {
      try {
        await axios.put(`/api/template/${template.id}`, template);
        commit('setCurrentTemplate', template);
        logger.info('Updated template:', template);
      } catch (error) {
        errorHandler(error, commit);
      }
    },
    async deleteTemplate({ commit }, templateId) {
      try {
        await axios.delete(`/api/template/${templateId}`);
        commit('setTemplates', this.state.templates.filter(t => t.id !== templateId));
        logger.info('Deleted template with ID:', templateId);
      } catch (error) {
        errorHandler(error, commit);
      }
    },
    async fetchRecentActivities({ commit }) {
      try {
        const response = await axios.get('/api/recent-activities');
        commit('setRecentActivities', response.data);
        logger.info('Fetched recent activities:', response.data);
      } catch (error) {
        errorHandler(error, commit);
      }
    },
    selectTemplate({ commit }, templateId) {
      const template = this.state.templates.find(t => t.id === templateId);
      commit('setCurrentTemplate', template);
      logger.info('Selected template with ID:', templateId);
    },
    updateUploadStatus({ commit }, status) {
      commit('setUploadStatus', status);
      logger.info('Updated upload status:', status);
    }
  }
});


    updateUploadStatus({ commit }, status) {
      commit('setUploadStatus', status);
      logger.info('Updated upload status:', status);
    }
  }
});


export default new Vuex.Store({
  state: {
    templates: [],
    currentTemplate: null,
    uploadStatus: '',
    error: null,
    recentActivities: []
  },
  mutations: {
    setTemplates(state, templates) {
      state.templates = templates;
    },
    setCurrentTemplate(state, template) {
      state.currentTemplate = template;
    },
    setUploadStatus(state, status) {
      state.uploadStatus = status;
    },
    setError(state, error) {
      state.error = `Error: ${error}`;
      console.error('Vuex Error:', error);
    },
    setRecentActivities(state, activities) {
      state.recentActivities = activities;
    }
  },
  actions: {
    async fetchTemplates({ commit }) {
      try {
        const response = await axios.get('/api/templates');
        commit('setTemplates', response.data);
      } catch (error) {
        errorHandler(error, commit);
      }
    },
    selectTemplate({ commit }, templateId) {
      const template = this.state.templates.find(t => t.id === templateId);
      commit('setCurrentTemplate', template);
    },
    updateUploadStatus({ commit }, status) {
      commit('setUploadStatus', status);
    },
    async fetchRecentActivities({ commit }) {
      try {
        const response = await axios.get('/api/recent-activities');
        commit('setRecentActivities', response.data);
      } catch (error) {
        errorHandler(error, commit);
      }
    }
  }
});
    updateUploadStatus({ commit }, status) {
      commit('setUploadStatus', status);
    }
  }
});
