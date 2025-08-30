import {createApp} from "vue";
import "./shared/styles/main.css";
import App from "./app/App.vue";
import router from "./shared/app.routes";
import {createPinia} from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");
