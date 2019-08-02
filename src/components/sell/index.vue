<template>
    <div class="sell">
        <v-search></v-search>
        <v-hander></v-hander>
        <v-catalogue></v-catalogue>
        <router-view></router-view>
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
</style>