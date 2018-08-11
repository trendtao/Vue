import Vue from "vue"

import "./css/index.css"

import com from "./template/index.vue"

import VueRouter from "vue-router"
import router from "./router.js"

Vue.use(VueRouter)

var vm = new Vue({
    el:"#app",
    data:{
        msg:"你好，Vue"
    },
    render:c=>c(com),
    router
})
