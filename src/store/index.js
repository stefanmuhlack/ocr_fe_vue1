import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const errorHandler = (error, commit) => {
  console.error('Error caught in Vuex:', error);
  commit('setError', error.message);
};

export default new Vuex.Store({
  state: {
    templates: [],
    currentTemplate: null,
    uploadStatus: '',
    error: null
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
      state.error = error;
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
    }
  }
});
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
