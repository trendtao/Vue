import Vue from "vue"

import "./css/index.css"
import "./css/mui.min.css"
import "./css/icons-extra.css"

import { Header , Swipe, SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

import VueRouter from "vue-router"
import router from "./router.js"
import app from "./App.vue"

Vue.use(Header)

Vue.use(VueRouter)

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})
