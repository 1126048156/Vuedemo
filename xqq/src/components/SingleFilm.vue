<template>
    <div class="singlefilm">
      <home-title :title="title"></home-title>
      <img :src="film.images.medium" alt="">
      <div class="right">
        <h2>{{film.title}}</h2>
        <p>{{film.original_title}}</p>
        <p>
          分类：
          <span v-for="genre in film.genres">
            {{genre}}/
          </span>
        </p>
        <p>主演：
          <span v-for="cast in film.casts">
            {{cast.name}}/
          </span>
        </p>
        <p style="">
          喜欢：<span>{{film.wish_count}}</span>
          人气：<span>{{film.ratings_count}}</span>
        </p>
        <div class="description">
          {{film.summary}}
        </div>
        <a :href="film.alt" target="_blank" class="play">
          立即播放
        </a>
      </div>
    </div>
</template>

<script>
  import HomeTitle from '@/components/HomeTitle'
    export default {
        name: "SingleFilm",
        data() {
            return {
              title:'电影详情',
              film:[]
            }
        },
      created(){
        this.$root.$children[0].show = false
        this.$axios.get('/api/v2/movie/subject/'+this.$route.params.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a')
          .then(res=>{
            this.film = res.data;
            console.log(res)
          })
      },
      components:{
          HomeTitle
      }
    }
</script>

<style scoped>
 .singlefilm{
   overflow: hidden;
   width: 1200px;
   margin: auto;
 }
  .singlefilm img{
    float: left;
  }
  .right{
    float: right;
    width: 800px;
    color: #fff;
  }
  .right p{
    color: #ccc;
    line-height: 36px;
  }
  .description{
    height: 140px;
    overflow: auto;
    color: #ccc;
  }
  .play{
    display: block;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: #009451;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
  }
</style>
