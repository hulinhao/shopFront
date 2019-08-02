<template>
    <div class="search">
      <section>
        <search-hander></search-hander>
        <search-content></search-content>
      </section>
    </div>
</template>

<script>
  export default{
    data(){
        return {
            attr : {
                'height': 20 + 'px',
                'background-color': 'red'
            }
        };
    },
    components:{
        'search-hander' : resolve => { require(['./searchHander'], resolve); },
        'search-content' : resolve => { require(['./searchContent'], resolve); }
    },
    computed: {
    }
  };
</script>

<style>
.search{
    width:100%;
    background-color:#fff;
    text-align:center;
    position:fixed;
    z-index:999;
}
</style>