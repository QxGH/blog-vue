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


