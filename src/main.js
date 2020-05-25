import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局样式表
import './assets/css/global.css'
import './assets/bilibili-icon/vanfont.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

import { Field, DropdownMenu, DropdownItem, Button, CellGroup, Toast, Icon, Image as VanImage } from 'vant';
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(VanImage);


//配置请求的根路径
import axios from 'axios'
axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
