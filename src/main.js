import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./assets/tailwind.scss";
import "./assets/tailwind/reset/list.scss";
import "./assets/tailwind/reset/input.scss";
import "./assets/tailwind/btn.scss";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
