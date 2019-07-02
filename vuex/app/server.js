const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = new express();
const Users = require('./schema/users')
app.use(bodyParser.urlencoded({
  extented:true
}))
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//   else  next();
// });
app.use(bodyParser.json())
app.use('/login',(req,res)=>{
  let {username,password} = req.body;
  Users.findOne({//从users集合中查找用户
    username:username,
    password:password
  }).then(user=>{
    console.log(user)
    if(user){//如果找到该用户，则登录成功,返回0
      res.send({
        errno:0
      })
    }else{
      res.send({//没有找到返回1
        errno:1
      })
    }
  })
})

app.use('/register',(req,res)=>{
  let {username,password} = req.body;
  console.log(req.body)
  Users.findOne({//从users集合中查找用户
    username:username,
  }).then(user=>{
    if(user){//如果找到该用户，则说明注册过了，返回1
      res.send({
        errno:1
      })
    }else{
      res.send({//没有找到返回1
        errno:0
      })
      new Users({//保存数据
        username,
        password,
        age:Math.floor(Math.random()*20+20)
      }).save()
    }
  })
})
app.get('/userlist',(req,res)=>{
  Users.find().then(users=>{
    res.send(users)
  })
})

mongoose.connect("mongodb://localhost:27017/vuex",{useNewUrlParser:true},err=>{
  if(err){
    console.log("数据库连接失败");
    return;
  }
  app.listen(3000,()=>{
    console.log('3000端口成功监听')
  })
  console.log("数据库连接成功");
});


