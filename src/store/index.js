import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: [],
    currentTemplate: null
  },
  mutations: {
    setTemplates(state, templates) {
      state.templates = templates;
    },
    setCurrentTemplate(state, template) {
      state.currentTemplate = template;
    }
  },
  actions: {
    fetchTemplates({ commit }) {
      // Simulate fetching templates from an API
      commit('setTemplates', [{ id: 1, name: 'Template 1' }, { id: 2, name: 'Template 2' }]);
    },
    selectTemplate({ commit }, templateId) {
      // Simulate selecting a template
      const template = this.state.templates.find(t => t.id === templateId);
      commit('setCurrentTemplate', template);
    }
  }
});
