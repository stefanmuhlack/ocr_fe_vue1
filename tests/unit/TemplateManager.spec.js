// tests/unit/TemplateManager.spec.js
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TemplateManager from '@/components/TemplateManager.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TemplateManager.vue', () => {
  let store;
  let actions;
  let state;

  beforeEach(() => {
    state = {
      templates: []
    };
    actions = {
      fetchTemplates: jest.fn(),
      deleteTemplate: jest.fn()
    };
    store = new Vuex.Store({
      state,
      actions
    });
  });

  it('renders template manager component', () => {
    const wrapper = shallowMount(TemplateManager, { store, localVue });
    expect(wrapper.find('h1').text()).toMatch('Template Manager');
  });

  it('calls fetchTemplates on mount', () => {
    shallowMount(TemplateManager, { store, localVue });
    expect(actions.fetchTemplates).toHaveBeenCalled();
  });

  it('displays error message when fetchTemplates fails', async () => {
    actions.fetchTemplates.mockRejectedValue(new Error('API error'));
    const wrapper = shallowMount(TemplateManager, { store, localVue });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.error-message').exists()).toBe(true);
  });

  it('calls deleteTemplate when delete button is clicked', async () => {
    state.templates = [{ id: 1, name: 'Test Template', description: 'Test Description' }];
    const wrapper = shallowMount(TemplateManager, { store, localVue });
    await wrapper.vm.$nextTick();
    const deleteButton = wrapper.find('button:contains("Delete")');
    await deleteButton.trigger('click');
    expect(actions.deleteTemplate).toHaveBeenCalledWith(expect.any(Object), 1);
  });
});
