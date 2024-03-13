import VueComponentLoader from '../components/VueComponentLoader.vue'

export default {
    install: (app, option) => {
        app.component('VueComponentLoader', VueComponentLoader)
    }
};