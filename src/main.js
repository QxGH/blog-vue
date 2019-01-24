// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import ElementUI from 'element-ui'
// import "babel-polyfill";
// import 'element-ui/lib/theme-chalk/index.css'
// import marked from 'marked'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// Vue.use(mavonEditor)


import './assets/css/style.css'

// 组件
import AppNav from './components/nav'
Vue.component('app-nav', AppNav)

Vue.config.productionTip = false

// Vue.use(ElementUI);

// 过滤器
Vue.filter('getDate', function (value) {
    if (!value) return '';
    var Y, M, D;
    var date = new Date(value*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    return Y+M+D;
})
Vue.filter('getTime', function (value) {
    if (!value) return '';
    var Y, M, D, h, m, s;
    var date = new Date(value*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) +':';
    m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) +':';
    s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
    return Y+M+D+h+m+s;
})

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
	watch:{   //监听路由变化
    $route( to , from ){
      // console.log( to , from )
    }
	}
})
