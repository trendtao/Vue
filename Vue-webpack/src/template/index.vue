<template>
    <div>
       你好，这是一个组件----->{{msg}}

        <router-link to="/account">进入账户</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                msg:"你好，Vue"
            }
        }
    }
</script>

<style scoped>
    div{
        color:darkorange
    }
</style>

