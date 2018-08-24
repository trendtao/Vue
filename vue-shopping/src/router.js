import VueRouter from "vue-router"
import home from "./template/home.vue"
import member from "./template/member.vue"
import search from "./template/search.vue"
import shopping from "./template/shopping.vue"

var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/member",component:member},
        {path:"/search",component:search},
        {path:"/shopping",component:shopping},
    ],
    linkActiveClass:"mui-active"
})

export default router