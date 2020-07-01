import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueProgressBar, {
    color: "#42b983",
    failedColor: "red",
    height: "2px"
});

Vue.config.productionTip = false;
axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
