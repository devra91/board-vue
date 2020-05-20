// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import axios from "axios";

require("@/store/subscriber");
Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  router.beforeEach((to, from, next) => {
    console.log(to.matched[0]);
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!store.getters["auth/authenticated"]) {
        next({
          name: "login",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
      if (store.getters["auth/authenticated"]) {
        next({
          name: "board-list",
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
