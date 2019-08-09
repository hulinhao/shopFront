<template>
  <div>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Footer from 'components/footer';
export default {
    data(){
        return {
        };
    },
    computed: {
      username () {
        // 我们很快就会看到 `params` 是什么
        return this.$route.params.username;
      }
    },
    created() {
            this.$http.get(this.$store.state.api.index, { params : { type : 2 } }).then((response) => {
            this.seller = response.bodyText;
        });
    },
    components:{
       'v-footer' : Footer
    }
};
</script>
<style>
*{
  font-family: cursive;
}
#app{
  background-color:#FFFFFF;
}
</style>
