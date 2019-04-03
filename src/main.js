import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created () {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
