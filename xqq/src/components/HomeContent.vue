<template>
    <div class="content">
      <films-list></films-list>
      <page :maxPage="maxPage"></page>
    </div>
</template>

<script>
  import FilmsList from '@/components/FilmsList'
  import Page from '@/components/Page'
    export default {
        name: "HomeContent",
        data() {
            return {
              maxPage:''
            }
        },
      components:{
        FilmsList,
        Page
      },
      async created() {
        this.$router.push({
          path:'/',
          query:{
            page:0
          }
        })
        this.$root.$children[0].show = true
        //https://api.douban.com/v2/movie/imdb/tt0111161?apikey=0df993c66c0c636e29ecbb5344252a4a
        //进行了跨域
        let {data:{count},data:{total}} = await this.$axios.get('/api/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&&count=20&&start=0')
        this.maxPage = Math.ceil(total/count)
      }
    }
</script>

<style scoped>
  .content{
    width: 1200px;
    margin: auto;
    background-color: lightblue;
  }
</style>
