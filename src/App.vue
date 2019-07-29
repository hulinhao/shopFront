<template>
  <div id="app">
     <v-hander></v-hander>
     <v-catalogue></v-catalogue>
     <v-main></v-main>
     <div>
       {{seller}}<br>
     </div>
     <router-view></router-view>
  </div>
</template>
<script>
import Hander from 'components/hander/hander';
import Catalogue from 'components/catalogue/catalogue';
import Main from 'components/main/main';
export default {
    data(){
        return {
            seller:''
        };
    },
    created() {
            this.$http.get(this.$store.state.api.index, { params : { type : 2 } }).then((response) => {
            this.seller = response.bodyText;
        });
    },
    components:{
       'v-hander' : Hander,
       'v-catalogue' : Catalogue,
       'v-main' : Main
    }
};
</script>
<style>
</style>
