import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/store";

import VueProgressBar from "vue-progressbar";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);

const options = {
  color: "#eb2f06",
  failedColor: "#44bd32",
  thickness: "2px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  inverse: false
};

Vue.config.productionTip = false;
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(Antd);
Vue.use(VueProgressBar, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
