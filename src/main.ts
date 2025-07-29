import { createApp } from 'vue'
import './style.css'
import App from './app/App.vue'
import router from './shared/app.routes'



createApp(App)
    .use(router)
    .mount('#app')
