// tests/unit/UploadForm.spec.js
import { shallowMount } from '@vue/test-utils';
import UploadForm from '@/components/UploadForm.vue';

describe('UploadForm.vue', () => {
  it('renders upload form component', () => {
    const wrapper = shallowMount(UploadForm);
    expect(wrapper.find('h1').text()).toMatch('Upload Your Document');
  });

  it('validates file type and size', async () => {
    const wrapper = shallowMount(UploadForm);
    const input = wrapper.find('input[type="file"]');
    const file = new File([''], 'test.pdf', { type: 'application/pdf', size: 4000000 });
    await input.trigger('change', { target: { files: [file] } });
    expect(wrapper.vm.uploadError).toBe('');
    expect(wrapper.vm.uploadStatus).toBe('File ready for upload');
  });

  it('shows error for invalid file type or size', async () => {
    const wrapper = shallowMount(UploadForm);
    const input = wrapper.find('input[type="file"]');
    const file = new File([''], 'test.txt', { type: 'text/plain', size: 6000000 });
    await input.trigger('change', { target: { files: [file] } });
    expect(wrapper.vm.uploadError).toBe('Invalid file type or size. Only PDF, TIFF, and PNG files under 5MB are allowed.');
  });
});
