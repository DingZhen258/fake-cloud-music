<template>
    <div class="icon-list">
       <div class="iconItem">
          <img src="@/assets/img/rabbit.svg" alt="">
          <span>每日推荐</span>
       </div>
       <div class="iconItem">
          <img src="@/assets/img/tv.svg" alt="">
          <span>私人FM</span>
       </div>
       <div class="iconItem">
          <img src="@/assets/img/music.svg" alt="">
          <span>歌单</span>
       </div>
       <div class="iconItem">
          <img src="@/assets/img/rank.svg" alt="">
          <span>排行榜</span>
       </div>
       <Loading/>
    </div>
</template>

<script>
import Loading  from '@/components/common/loading/Loading.vue'
    export default {
      setup() {
         const icon = {
         };
         return {
           icon,
         };
       },   
       components:{
    Loading,
    Loading
}           
    }
</script>

<style scoped>
.icon-list{
   width: 100%;
   margin: .15rem 0;
   display: flex;
   justify-content: space-around;
   align-items: center;
}

.iconItem{
   width: 25%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: .25rem;
}
.iconItem img{
   width: .6rem;
   height: .6rem;
   margin-bottom: .2rem;
}
</style>