<template>
  <div class="login">
    <h1>欢迎您~请先登录</h1>
    <div class="loginContent">
        <h3 class="title">用户登录</h3>
     <div class="info">
        <div class="icon"><svg class="iconpark-icon"><use href="#user"></use></svg></div>
        <input type="text" name="phone" class="phone" v-model="phone" placeholder="输入手机号/用户名" />
    </div>
     <div class="info">
        <div class="icon"><svg class="iconpark-icon"><use href="#lock"></use></svg></div>
        <input type="password" name="passworld" class="passworld"  v-model="password" placeholder="输入密码"/>
     </div>
    <button class="login_btn" @click="Login">登录</button>
    </div>
    <button class="back_btn" @click="$router.go(-1)">返回首页</button>

  </div>
</template>
<script>
export default {
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        async Login(){
            try{
                let res = await this.$store.dispatch('getLogin')
                console.log(res);
                if(res.data.code==200){
                    this.$store.commit('updateIsLogin',true)
                    this.$router.replace('/profile')
                }
                
            }catch(err){
                alert("登录失败，网络超时")
            }
        }
    }

}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
 background-image: linear-gradient(to left top, #cac3ec, #ce9fd9, #d976b2, #dd487b, #cf1737);
  .top_back{
    display: flex;
    align-items: center;
    color: #fff;
    font-size: .4rem;
  }
  .title{
    width: 80%;
    height: .6rem;
    border-bottom:1px solid rgb(161, 157, 157) ;
  }
  h1 {
    font-size: .7rem;
    color: #fff;
    margin-bottom: .9rem;
  }
  .loginContent {
    width: 100%;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 6px 7px 15px rgba(100,100,100,.6);
    border-radius: .3rem;
    .phone,
    .passworld,
    .check {
        width: 5rem;
        height: .7rem;
        border: .02rem solid #999;
        padding: 0 .1rem;
    }
    .info{
        display:flex;
        justify-content: space-around;
        align-items: center;
        .icon{
            height: .7rem;
            background-color: rgb(103, 94, 94);
            color: #fff;
            width: .7rem;
            line-height: 1rem;
            text-align: center;
        }
    }
    // .check{
    //     width: 3rem;
    // }
    .login_btn{
        width: 85%;
        height: .6rem;
        background-color: rgb(20, 120, 197);
        border-radius: .4rem;
        border: 1px solid #fff;
        color: #fff;
    }
    // .check_btn{
    //     width: 2rem;
    //     height: .7rem;
    //     border: none;
    //     background-color: rgb(20, 120, 197);
    //     color: #fff;
    // }
  }
  .back_btn{
        width:40%;
        height: .7rem;
        border-radius: .2rem;
        border: 1px solid #eee;
        margin-top: .8rem;
    }
}
</style>
