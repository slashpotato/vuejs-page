import './assets/main.css'
import { createApp } from 'vue'

import AppHeader from './AppHeader.vue'
createApp(AppHeader).mount('#header')

import App from './App.vue'
createApp(App).mount('#app')

import AppFooter from './AppFooter.vue'
createApp(AppFooter).mount('#footer')