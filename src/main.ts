import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import Vant from "vant";
import "vant/lib/index.css";
// flexible插件（响应式布局）
import "lib-flexible"; 

const app = createApp(App);
app.use(router);
app.use(Vant);
app.mount("#app");

// axios是一个库，并不是vue中的第三方插件，使用时不能通过Vue.use()安装插件，需要在原型上进行绑定
app.config.globalProperties.$api = axios