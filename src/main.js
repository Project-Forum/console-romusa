import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from './store/store'; // Import your Vuex store

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";

//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// router setup
import routes from "./routes/routes";

import "./registerServiceWorker";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

// plugin setup
Vue.use(VueRouter);
Vue.use(LightBootstrap);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue.use(BootstrapIconsPlugin);


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
