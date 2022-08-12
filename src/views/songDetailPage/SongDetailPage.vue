<template>
    <div class="song-deatil-page">
        <img :src="songList.al.picUrl" alt="" class="bgimg" />
        
        <PageTopVue :songList="songList"/>
        <PageContent :songList="songList"></PageContent>
        <PageBottom :play="play"/>
    </div>
</template>

<script>
import PageTopVue from './childComps/PageTop.vue'
import PageContent from './childComps/PageContent.vue'
import PageBottom from './childComps/PageBottom.vue'
export default {
      props: ["songList", "play"],
      components:{
        PageTopVue,
        PageContent,
        PageBottom
      }
}
</script>

<style lang="less" scoped>
.song-deatil-page{
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(40px) brightness(60%);
}


</style>