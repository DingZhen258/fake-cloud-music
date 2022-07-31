<template>
    <div id="home">
       <TopSwiper></TopSwiper>
       <!-- <IconList></IconList> -->
       <DiscoverSongSheet/>
       <HighqualitySheet/>
    </div>
</template>

<script>


import TopSwiper from '@/views/home/childComps/TopSwiper.vue'
import IconList from '@/views/home/childComps/IconList.vue'
import DiscoverSongSheet from '@/components/content/songSheet/DiscoverSongSheet'
import HighqualitySheet from '@/components/content/songSheet/HighqualitySheet'

    export default {
        name:'Home',
        data(){
            return {
            }
        },
        components:{
            TopSwiper,
            IconList,
            DiscoverSongSheet,
            HighqualitySheet
        },
        methods:{
           
        },
       
    }
</script>

<style scoped>

</style>