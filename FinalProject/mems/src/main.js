import { createApp } from 'vue'
import App from "./App"
import "@/assets/css/app.scss"
import router from './router'

createApp(App).mount('#app').use(router)

