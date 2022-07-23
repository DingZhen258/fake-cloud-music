<template>
    <div id="find">
       <TopSwiper :items="[1,1,1,2,2,3]"></TopSwiper>
    </div>
</template>

<script>
import TopSwiper from '@/views/find/childComps/TopSwiper.vue'
    export default {
        name:'Find',
        components:{
            TopSwiper
        }
    }
</script>

<style scoped>
#find{
    display: flex;
    text-align: center;
}

</style>