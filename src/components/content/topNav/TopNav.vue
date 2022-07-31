<template>
      <!-- 通过vuex来全局控制啥时候显示导航栏 -->
      <van-sticky>
      <Navbar class="main-nav" v-show="$route.meta.showTabbar">
          <template v-slot:leftIcon>
            <svg class="iconpark-icon"><use href="#hamburger-button"></use></svg>
          </template>
          <template v-slot:title>
          <div class="nav-item" v-for="(item,index) in titles" :key="item" 
               @click="navClick(index)"
               :class="{isAcitve:currentIndex==index}"
               >{{item}}
          </div>
        </template>
        <template v-slot:rightIcon>
          <svg class="iconpark-icon" @click="this.$router.push('/search')"><use href="#search"></use></svg>
        </template>
      </Navbar>
      </van-sticky>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue'
    export default {
        data(){
            return{
                titles:['我的','发现'],
                currentIndex:1
            }
        },
        components:{
            Navbar
        },
        methods:{
            navClick(index){
            this.currentIndex=index
            switch(index){
             case 0 : 
              if(this.$store.state.isLogin){
                 this.$router.replace('/profile'); 
              }else{
                this.$router.push('/login'); 
              } 
             break;
             case 1 : this.$router.replace('/home'); break;
            //  case 2 : this.$router.replace('/yuncun'); break;
            //  case 3 : this.$router.replace('/video'); break;
        }
    }
  }
    }
</script>

<style lang="less" scoped>
.main-nav{
  background-color: #fff;
  font-size: .37rem;
 
}
.nav-item{
  width: 2.5rem;
  height: 100%;
}
.isAcitve{
  font-size: .4rem;
  border-bottom:2px solid rgb(213, 61, 61) ;
}
</style>