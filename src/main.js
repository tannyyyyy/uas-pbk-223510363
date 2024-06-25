import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "../router"; // Corrected import path

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Create the Vue application
const app = createApp(App);

// Use Quasar
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here if needed
});

// Use Vue Router
app.use(router);

// Mount the app
app.mount("#app");
