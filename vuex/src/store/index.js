import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
//暴露一个仓库
export default new Vuex.Store({
  state:{//存放所有组件都可以使用的数据
    loginUser:localStorage.getItem('user'),
    userList:JSON.parse(localStorage.getItem('heaven'))
  },
  mutations:{//存放方法，纺织一些同步修改state数据的方法
    saveLoginUser(state,value){//value为传过来的值
      state.loginUser = value;
      localStorage.setItem('user',value)//本地存储，避免刷新仓库没了
    },
    saveUserList(state,value){
      state.userList = value
    }
  },
  actions:{//纺织异步修改state数据的方法
    getUserList(cxt){//cxt和state类似，但不是
     return new Promise((reslove,rej)=>{
       axios.get('/api/userlist').then(users=>{
         cxt.commit('saveUserList',users.data)//先提交到mucation，再提交到state
         localStorage.setItem('heaven',JSON.stringify(users.data))
         reslove()
       })
     })
    }
  },
  getters:{//对states数据进行过滤，相当于computed
    oldUser:(state => {
      return state.userList.filter(user=>user.age>=30)
    }),
    newUser:(state => {
      return state.userList.filter(user=>user.age<30)
    }),
  }
})
