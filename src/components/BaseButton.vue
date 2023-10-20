import BaseButton from './components/BaseButton.vue'

Vue.component('BaseButton', BaseButton)

Vue.mixin({
methods: {
globalMethod() {
// some global method
}
}
})
