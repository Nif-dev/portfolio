import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import router from './router'

import i18next from './lib/i18n'
import I18NextVue from 'i18next-vue'

import { useLightbox } from './lib/lightbox'


const app = createApp(App)
const lightbox = useLightbox()
app.provide('lightbox', lightbox)
app.use(I18NextVue, { i18next })
app.use(router)
app.mount('#app')
