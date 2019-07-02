<template>
  <div class="userlist">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="_id"
          label="用户id">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'//辅助函数
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {
      //从数据库中拿取信息,触发actions中的函数,太长，使用mapActions
      // this.$store.dispatch('getUserList').then(()=>{
      //   // this.tableData = this.$store.state.userList//获取太长了，使用辅助函数mapState
      //   this.tableData = this.userList
      // })
      this.getUserList().then(()=>{
        // this.tableData = this.$store.state.userList//获取太长了，使用辅助函数mapState
        this.tableData = this.userList
      })
    },
    computed:{
      ...mapState(['userList'])//建立起映射关系，把仓库的userList直接变成自己的
    },
    methods:{
      ...mapActions(['getUserList'])
    }
  }
</script>

<style scoped>

</style>
