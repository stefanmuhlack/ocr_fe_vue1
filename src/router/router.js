import Vue from 'vue';
import VueRouter from 'vue-router';
import UploadPDF from './components/UploadPDF.vue';
import OCRResults from './components/OCRResults.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: UploadPDF, // Component for uploading PDF
    },
    {
        path: '/results',
        component: OCRResults, // Component for displaying OCR results
    },
];

const router = new VueRouter({
    routes,
});

export default router;
