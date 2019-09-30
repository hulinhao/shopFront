<template>
<div class="catalog" id = 'catalog'>
    <div v-for="value in catalog" :key="value" :style='getCatalogWidth'>
    <!-- 通过判断指定路由 -->
       <router-link :to = "{path:'/sell/sellList',query:{type:value}}" push>{{value}}</router-link>
    </div>
</div>
</template>
<script>
import $ from 'jquery';
    export default{
        data(){
            return {
                // 第一次加载时路由到第一个子路由
                redirect:true,
                catalog:['目录1', '目录2', '目录3']
            };
        },
       created() {
            this.$http.post(this.$store.state.api.catalog).then((response) => {
                this.catalog = $.parseJSON(response.bodyText).catalog;
              });
        },
       computed : {
            // 根据目录的个数 设置目录的宽度
            getCatalogWidth :function(){
                return 'width:' + $('#catalog').width() / this.catalog.length + 'px';
            }
        },
        watch: {
            // 监听相同路由下参数变化的时候，从而实现异步刷新
            // to 当前路由信息   from上一个路由信息
            '$route'(to, from) {
                // 做一些路由变化的响应
                // 打开加载动画
                this.loading = true;
            }
        }
    };
</script>

<style>
    .catalog{
        width:100%;
        display:flex;
        margin-top:13px;
        border-top:solid 0.5px #ccc;
        border-bottom:solid 0.5px #ccc;
        padding-top: 6px;
        padding-bottom:6px;
        text-align:center;
    }
    .catalog div{
        font-weight:900;
        font-size:15px;
/*         border-bottom: solid #000 2px; */

    }
</style>