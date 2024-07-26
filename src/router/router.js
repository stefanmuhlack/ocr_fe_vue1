import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import UploadPDF from '@/components/UploadPDF.vue';
import TemplateManagement from '@/components/TemplateManagement.vue';
import { useAuth } from '@/composables/useAuth';

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
    component: TemplateManagement,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.isAuthenticated()) {
    next('/');
  } else {
    next();
  }
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
