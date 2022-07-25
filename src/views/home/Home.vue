<template>
    <div id="home">
       <TopSwiper></TopSwiper>
       <IconList></IconList>
       <MusicList/>
    </div>
</template>

<script>


import TopSwiper from '@/views/home/childComps/TopSwiper.vue'
import IconList from '@/views/home/childComps/IconList.vue'
import MusicList from '@/components/content/musicList/MusicList'
    export default {
        name:'Home',
        data(){
            return {
            }
        },
        components:{
            TopSwiper,
            IconList,
            MusicList
        },
        methods:{
           
        },
       
    }
</script>

<style scoped>

</style>