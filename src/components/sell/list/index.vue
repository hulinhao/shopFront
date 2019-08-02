<template>
<div class="goods">
    <!-- 图片 -->
    <div class="col-sm-6 col-md-3 pic">
       <a href="#" class="thumbnail">
         <img src="static/pic/p1.jpg">
       </a>
    </div>
    <!-- 基本信息 -->
    <div>

    </div>
</div>
</template>
<script>
    export default{
        data() {
            return {
                type: '默认内容',
                goods:{}
            };
        },
        created(){
            // 获取路由带过来的参数
           console.log('type:' + this.type);
           this.$http.get(this.$store.state.api.goods).then((response) => {
               this.goods = response.bodyText;
           });
        },
        // 复用路由 参数不同需要监听数据的变化  刷新模板
        watch: {
            // 监听相同路由下参数变化的时候，从而实现异步刷新
            // to 当前路由信息   from上一个路由信息
            '$route'(to, from) {
                // 做一些路由变化的响应
                // 打开加载动画
                this.loading = true;
                /** 初始化其他数据 */
                this.type = this.$route.query.type;
            }
        }
    };
</script>

<style>
 .goods{

 }
 .goods .pic{
    width:200px;
    height:200px;
 }
 .goods .pic a img{
    margin-left:0;
 }
</style>