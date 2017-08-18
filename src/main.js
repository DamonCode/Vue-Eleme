import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: 'body', // body 为挂载点
  components: { App }
});

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active' /** 配置 v-link-active 为 active */
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  'seller': {
    component: seller
  }
});

router.start(app, '#app'); // 启动路由

router.go('/goods'); // 路由默认页面
