import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import router from "./router"
import axios from 'axios'


Vue.use(router,axios);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  	router, 
	mood:'history'
}).$mount("#app");
