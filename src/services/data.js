import axios from "axios";
import "./config.axios";

export default {
    show() {
        return axios.get("character");
    },
    showItem(id) {
        return axios.get(`character/${id}`);
    },
    all() {
        axios.get("episode");
    }
};
