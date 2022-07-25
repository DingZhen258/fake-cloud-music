<template>
      <!-- 通过vuex来全局控制啥时候显示导航栏 -->
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
          <svg class="iconpark-icon"><use href="#search"></use></svg>
        </template>
      </Navbar>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue'
    export default {
        data(){
            return{
                titles:['我的','发现','云村','视频'],
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
             case 0 : this.$router.replace('/profile'); break;
             case 1 : this.$router.replace('/home'); break;
             case 2 : this.$router.replace('/yuncun'); break;
             case 3 : this.$router.replace('/video'); break;
        }
    }
  }
    }
</script>

<style scoped>
.main-nav{
}
.iconpark-icon{
  color: black;
  width: .5rem;
  height: .5rem;
}
.isAcitve{
  font-size: .4rem;
}
</style>