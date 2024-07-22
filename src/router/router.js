import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import UploadPDF from '@/components/UploadPDF.vue';
import TemplateManagement from '@/components/TemplateManagement.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'UploadPDF',
    component: UploadPDF
  },
  {
    path: '/templates',
    name: 'TemplateManagement',
    component: TemplateManagement
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log(`Navigating to ${to.name} from ${from.name}`);
  next();
});

export default router;

            path: '/upload',
            name: 'upload-pdf',
            component: UploadPDF
        },
        {
            path: '/ocr-result',
            name: 'ocr-result',
            component: OCRResult
        },
        {
            path: '/pdf-preview',
            name: 'pdf-preview',
            component: PDFPreview
        },
        {
            path: '/template-creator',
            name: 'template-creator',
            component: TemplateCreator
        }
    ]
});
