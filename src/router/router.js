const UploadPDF = () => import(/* webpackChunkName: "upload-pdf" */ '../components/UploadPDF.vue')
const OCRResult = () => import(/* webpackChunkName: "ocr-result" */ '../components/OCRResult.vue')

const routes = [
    {
        path: '/',
        name: 'UploadPDF',
        component: UploadPDF
    },
    {
        path: '/ocr-result',
        name: 'OCRResult',
        component: OCRResult
    }
]
const OCRDetail = () => import(/* webpackChunkName: "ocr-detail" */ '../components/OCRDetail.vue')

const routes = [
    // ... other routes
    {
        path: '/ocr-result',
        name: 'OCRResult',
        component: OCRResult,
        children: [
            {
                path: 'detail',
                component: OCRDetail
            }
        ]
    }
]
router.beforeEach((to, from, next) => {
    if (to.name !== 'UploadPDF' && !isAuthenticated) next({ name: 'UploadPDF' })
    else next()
})
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../components/NotFound.vue')

const routes = [
    // ... other routes
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]
const router = new VueRouter({

}
const routes = [
    {
        path: '/',
        name: 'UploadPDF',
        component: UploadPDF,
        meta: { title: 'Upload PDF' }
    },
    {
        path: '/ocr-result',
        name: 'OCRResult',
        component: OCRResult,
        meta: { title: 'OCR Result' }
    }
]
const PDFPreview = () => import(/* webpackChunkName: "pdf-preview" */ '../components/PDFPreview.vue');

const routes = [
    // ... other routes
    {
        path: '/pdf-preview',
        name: 'PDFPreview',
        component: PDFPreview,
    },
];
