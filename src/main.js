import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局样式表
import './assets/css/global.css'
import './assets/bilibili-icon/vanfont.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

import { Field, Button, Toast, Icon, Image as VanImage, Popup } from 'vant';
Vue.use(Button);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Popup);


//配置请求的根路径
import axios from 'axios'
axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
