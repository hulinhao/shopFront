<template>
<div>
<!--mescroll滚动区域的基本结构-->
 <mescroll-vue id= "mescroll" ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
  <!--内容...-->
    <div >
        <div class="goods" v-for = '(goods,idx) in dataList' :key='idx'>
             <!-- 图片 -->
            <div class="pic">
               <a href="#" class="thumbnail">
                 <img v-if="goods.img != null && goods.img!='' && goods.img != 'undefind'" :src='goods.img' />
                 <img v-if="goods.img == null || goods.img == '' || goods.img =='undefind'"
                           src='static/pic/defimg.jpg' />
               </a>
            </div>
            <div class="bookInfo">
                <!-- 基本信息 -->
                <h4>{{goods.name}}</h4>
                <h5>{{goods.author}}</h5>
                <h5 style="color:#87A883">豆瓣评分:{{goods.grade}}</h5>
                <h6 class="bookmark">
                  <span v-for="(key,idx) in goods.keys" :key='idx'> {{key}} </span>
                </h6>
                <h5><span class="discountPrice">￥{{goods.discountPrice}}</span>
                     <span class="prices">￥{{goods.prices}}</span></h5>
            </div>
        </div>
    </div>
  </mescroll-vue>
</div>
</template>
<script>
import $ from 'jquery';
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue';
    export default{
         name: 'sell',
         components: {
            MescrollVue // 注册mescroll组件
          },
         data () {
            return {
              mescroll: null, // mescroll实例对象
              mescrollDown:{
                htmlContent:'<p>客官稍等哦....</p>'
              }, // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
              mescrollUp: { // 上拉加载的配置.
                callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
                // 以下是一些常用的配置,当然不写也可以的.
                page: {
                    num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                    size: 10 //每页数据条数,默认10
                },
                htmlNodata: '<p class="upwarp-nodata">-- 我是有底线的 --</p>',
                noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
                               // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
                               // 这就是为什么无更多数据有时候不显示的原因
                toTop: {
                    //回到顶部按钮
                    src: "./static/pic/rebackTop.jpg", //图片路径,默认null,支持网络图
                    offset: 1000, //列表滚动1000px才显示回到顶部按钮
                },
                empty: {
                    //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
                    warpId: "goodss", //父布局的id (1.3.5版本支持传入dom元素)
                    icon: "./static/pic/nodata.jpg", //图标,默认null,支持网络图
                    tip: "暂无相关数据~" //提示
                }
              },
              dataList: [] // 列表数据
            }
          },
          beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
            next(vm => {
               // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
              vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
            })
          },
          beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
             // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
            this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
            next()
          },
          methods: {
            // mescroll组件初始化的回调,可获取到mescroll对象
            mescrollInit (mescroll) {
              this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
            },
            // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
            upCallback (page, mescroll) {
              // 联网请求
              this.$http.post(this.$store.state.api.goods,{ params:{ pageNum : page.num,pageSize:page.size } }).then((response) => {
                // 请求的列表数据
                let arr = eval('(' + response.bodyText + ')')
                // 如果是第一页需手动置空列表
                if (page.num === 1) this.dataList = []
                // 把请求到的数据添加到列表
                 this.dataList = this.dataList.concat(arr)
                // this.dataList = []
                // 数据渲染成功后,隐藏下拉刷新的状态
                this.$nextTick(() => {
                  mescroll.endSuccess(arr.length)
                })
              }).catch((e) => {
                // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                mescroll.endErr()
              })
            }
          }
    };
</script>

<style>
 .goods{
    display:flex;
 }
 .goods .pic{
    width:110px;
 }

 .bookInfo{
    margin-left:10px;
 }
 .bookInfo .bookmark span{
    border:#ccc solid 0.5px;
    margin-left:5px;
    padding:2px 2px;
 }
 .bookInfo .discountPrice{
    font-size:18px;
    color:red;
 }
 .bookInfo .prices{
    font-size:10px;
    /** 贯穿线 */
    text-decoration:line-through;
    margin-left:10px;
 }
</style>
<style scoped>
  /*通过fixed固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 188px;
    bottom: 0;
    height: auto;
  }
</style>
