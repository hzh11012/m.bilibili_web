import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入icon js
import './assets/iconfont/iconfont.js'
//导入全局样式表
import './assets/css/global.css'
import './assets/bilibili-icon/vanfont.css'
import './assets/iconfont/iconfont.css'
//导入全局过滤器
import * as filters from './assets/js/filters.js'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})

Vue.config.productionTip = false

import {
  Field, Button, Toast, Icon, Image as VanImage, Popup
  , Swipe, SwipeItem, List, Slider, Tab, Tabs
} from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Popup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(List);
Vue.use(Slider);
Vue.use(Tab);
Vue.use(Tabs);

//配置请求的根路径
import axios from 'axios'
axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
