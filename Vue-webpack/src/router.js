import VueRouter from "vue-router"

import account from "./template/account.vue"
import login from "./template/login.vue"
import register from "./template/register.vue"

var router = new VueRouter({
    routes:[
        {path:"/account",
        component:account,
        children:[
           {path:"login",component:login},
           {path:"register",component:register}
        ]
    }
    ]
})

export default router