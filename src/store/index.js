import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    templateModule: {
      state: {
        templates: [],
        currentTemplate: null,
      },
      mutations: {
        setTemplates(state, templates) {
          state.templates = templates;
        },
        setCurrentTemplate(state, template) {
          state.currentTemplate = template;
        },
      },
      actions: {
        async fetchTemplates({ commit }) {
          try {
            const response = await axios.get('/api/templates');
            commit('setTemplates', response.data);
          } catch (error) {
            commit('setError', 'Failed to fetch templates');
          }
        },
        selectTemplate({ commit }, templateId) {
          const template = this.state.templates.find(t => t.id === templateId);
          commit('setCurrentTemplate', template);
        },
      }
    },
    userInteraction: {
      state: {
        uploadStatus: '',
        error: null,
      },
      mutations: {
        setUploadStatus(state, status) {
          state.uploadStatus = status;
        },
        setError(state, error) {
          state.error = error;
        },
      },
      actions: {
        updateUploadStatus({ commit }, status) {
          commit('setUploadStatus', status);
        },
      }
    }
  }
});
