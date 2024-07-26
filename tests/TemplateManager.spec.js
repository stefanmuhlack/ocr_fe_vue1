import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TemplateManager from '@/components/TemplateManager.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TemplateManager.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      fetchTemplates: jest.fn(),
      updateTemplate: jest.fn(),
      deleteTemplate: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('fetches templates on mount', () => {
    shallowMount(TemplateManager, { store, localVue })
    expect(actions.fetchTemplates).toHaveBeenCalled()
  })

  it('updates template on button click', async () => {
    const wrapper = shallowMount(TemplateManager, { store, localVue })
    const button = wrapper.find('button.update-template')
    await button.trigger('click')
    expect(actions.updateTemplate).toHaveBeenCalled()
  })

  it('deletes template on button click', async () => {
    const wrapper = shallowMount(TemplateManager, { store, localVue })
    const button = wrapper.find('button.delete-template')
    await button.trigger('click')
    expect(actions.deleteTemplate).toHaveBeenCalled()
  })
})
