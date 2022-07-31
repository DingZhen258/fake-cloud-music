<template>
  <MainNav/>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component"  v-if="!$route.meta.keepAlive"/>
  </router-view> 
<MusicPlayer/>
</template>

<script>
import MainNav from '@/components/content/topNav/TopNav.vue'
import MusicPlayer from '@/components/content/musicPlayer/MusicPlayer.vue'
   export default {
        name:'app',
        components:{
          MainNav,
          MusicPlayer
        }
    }     
</script>
<style>
@import "./assets/css/base.css"

</style>
