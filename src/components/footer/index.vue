<template>
 <div class="footer">
     <div>
        <router-link :to="{path:'/sell'}" >商城</router-link>
     </div>
     <div>
        <router-link :to="{path:'/mescrollTest'}" >购物袋</router-link>
     </div>
     <div>
        <router-link :to="{path:'/home'}" >我的</router-link>
     </div>
 </div>
</template>

<script>
    export default{
    };
</script>

<style>

.footer{
    width:100%;
    display:flex;
    position:fixed;
    bottom:0;
    text-align:center;
    z-index:999;
    background-color:#ccc;
}
.footer div{
    color:blue;
    font-size:18px;
    text-align:center;
    width:33.1%;
    background-color:#BADBFB;
}
.footer div:not(:first-child){
    margin-left:0.35%;
}
</style>