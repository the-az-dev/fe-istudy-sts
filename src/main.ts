import {createApp} from "vue";
import "./shared/styles/main.css";
import App from "./app/App.vue";
import router from "./shared/app.routes";

createApp(App).use(router).mount("#app");
