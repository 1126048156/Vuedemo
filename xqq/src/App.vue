<template>
  <div id="app">
    <home-title :title="title" v-if="show"></home-title>
    <!--<home-content></home-content>-->
    <router-view></router-view>
  </div>
</template>

<script>
  //导入HomeTitle组件 @表示src所在的目录
  import HomeTitle from '@/components/HomeTitle'
export default {
  name: 'App',
  data(){
    return{
      title:'',
      show:true
    }
  },
  components:{
    HomeTitle
  },
  created() {
    this.$axios.get('/api/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&&count=20&&start=0')
      .then(res=>{
        this.title = res.data.title
      })
  }
}
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }
  body{
    background-color: #222;
  }
</style>
