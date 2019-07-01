<template>
    <div class="filmspage">
      <ul>
        <li v-for="(page,index) in maxPage">
          <!-- /?page=1  -->
          <router-link :to="{path:'/',query:{page:index}}"> {{page}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Page",
        data() {
            return {}
        },
      props:['maxPage']
    }
</script>

<style scoped>
  .filmspage ul{
    margin: 20px;
    text-align: center;
    list-style-type: none;
  }
  .filmspage ul li{
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 5px;
    line-height: 30px;
    background-color: #333;
    border: 1px solid #666;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  a{
    display: block;
    height: 100%;
    color: #fff;
  }
  a.router-link-exact-active{
    background: #2ad487;
  }
</style>
