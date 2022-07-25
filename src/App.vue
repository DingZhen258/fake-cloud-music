<template>

  
  <MainNav/>
  <router-view></router-view>
</template>

<script>
import MainNav from '@/components/content/topNav/TopNav.vue'
   export default {
        name:'app',
        components:{
          MainNav
        }
    }     
</script>
<style>
@import "./assets/css/base.css"

</style>
