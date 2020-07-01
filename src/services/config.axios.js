import axios from "axios";
import Vue from "vue";
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {});
let newVue = new Vue({});

axios.interceptors.request.use(config => {
    newVue.$Progress.start(); // for every request start the progress
    return config;
});

axios.interceptors.response.use(response => {
    newVue.$Progress.finish(); // finish when a response is received
    return response;
});
