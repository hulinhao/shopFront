<template>
    <div class="sell" id = 'sell'>
       <!-- 这个div用于区分主题和上面 -->
       <div id = "separateDiv">
         <v-search></v-search>
         <v-hander></v-hander>
         <v-catalogue></v-catalogue>
       </div>
        <router-view></router-view>
        <div class="footHid"></div>
    </div>
</template>
<script>
import Search from '../../components/search';
import Hander from './hander';
import Catalogue from './catalogue';
import List from './list';
export default{
  components:{
     'v-search' : Search,
     'v-hander' : Hander,
     'v-catalogue' : Catalogue,
     'v-list': List
  }
};
</script>
<style>
.sell{
}
.footHid{
    height:25px;
}
#separateDiv{
  border:1px solid red;
}
</style>