import Vue from 'vue';
import Router from 'vue-router';

// Lazy-loaded components
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const UploadPDF = () => import(/* webpackChunkName: "upload-pdf" */ '../components/UploadPDF.vue');
const OCRResult = () => import(/* webpackChunkName: "ocr-result" */ '../components/OCRResult.vue');
const PDFPreview = () => import(/* webpackChunkName: "pdf-preview" */ '../components/PDFPreview.vue');
const TemplateCreator = () => import(/* webpackChunkName: "template-creator" */ '../components/TemplateCreator.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
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
