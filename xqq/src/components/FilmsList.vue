<template>
    <div class="filmslist">
      <ul>
        <!--<li v-for="(subject,index) in subjects" :key="index">-->
          <!--<img :src="subject.images.large" alt="">-->
          <!--<p>{{subject.original_title}}</p>-->
          <!--<p>-->
            <!--<span v-for="gener in subject.genres">-->
              <!--{{gener}}-->
            <!--</span>-->
          <!--</p>-->
        <!--</li>-->
        <router-link v-for="(subject,index) in subjects" :key="index" tag="li" :to="{name:'filmlink',params:{id:subject.id}}">
          <img :src="subject.images.large" alt="">
          <p>{{subject.original_title}}</p>
          <p>
            <span v-for="gener in subject.genres">
              {{gener}}
            </span>
          </p>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "FilmsList",
        data() {
            return {
              subjects:[]
            }
        },
      async created() {
        let {data:{subjects}} = await this.$axios.get('/api/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&&count=20&&start=0')
        this.subjects = subjects;
      },
      watch:{
          $route:{
            handler(){
              this.$axios.get('/api/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&&count=20&&start='+this.$route.query.page*20)
                .then(res=>{
                  this.subjects = res.data.subjects;
                })
            }
          }
      }
    }
</script>

<style scoped>
  .filmslist ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
  .filmslist ul li{
    width: 22%;
    margin: 10px auto;
    background-color: #222;
    cursor: pointer;
  }
  .filmslist ul li img{
    width: 100%;
  }
</style>
