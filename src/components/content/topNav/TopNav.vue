<template>
    <div>
         <Navbar class="main-nav">
          <template v-slot:leftIcon><img src="@/assets/img/list.svg" alt=""></template>
          <template v-slot:title>
          <div class="nav-item" v-for="(item,index) in titles" :key="item" 
               @click="navClick(index)"
               :class="{isAcitve:currentIndex==index}"
               >{{item}}
          </div>
        </template>
        <template v-slot:rightIcon><img src="@/assets/img/Search-20.svg" alt=""></template>
      </Navbar>
    </div>
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
             case 0 : this.$router.replace('/home'); break;
             case 1 : this.$router.replace('/find'); break;
             case 2 : this.$router.replace('/yuncun'); break;
             case 3 : this.$router.replace('/video'); break;
        }
    }
  }
    }
</script>

<style scoped>
.main-nav img{
  width: .5rem;
  height: .5rem;
  vertical-align: middle;
}
.isAcitve{
  font-size: .4rem;
}
</style>