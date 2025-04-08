import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/15-GlobalComponent/GlobalComponent.vue'
import FormatCurrency from './components/21-Plugin/currency'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.component('ComponentA', GlobalComponent)

app.use(pinia)
app.use(FormatCurrency, { someOption: true })
app.use(router)

app.mount('#app')
