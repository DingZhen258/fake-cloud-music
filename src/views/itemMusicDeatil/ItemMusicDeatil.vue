<template>
    <div class="item-music-deatil">
        <img :src="state.playlist.coverImgUrl" class="bgimg">
        <DetailNav/>
        <ItemIntroduce :playlist='state.playlist'/>
        <ItemMusicOption :playlist='state.playlist'/>
    </div>
</template>

<script>
import ItemIntroduce from '@/views/itemMusicDeatil/childComps/ItemIntroduce.vue'
import ItemMusicOption from '@/views/itemMusicDeatil/childComps/ItemMusicOption.vue'
import DetailNav from '@/views/itemMusicDeatil/childComps/DetailNav.vue'

import {getMusicItem} from '@/network/musicItem'

import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
    export default {
        setup(){
            const state = reactive({
                playlist:[]
            })
            onMounted(async ()=>{
                let id = useRoute().query.id
                let res = await getMusicItem(id)
                state.playlist=res.data.playlist
                console.log(state.playlist,id)
                sessionStorage.setItem('itemDetail',JSON.stringify(state))
            })
            return {state}
        },
        components:{
            ItemIntroduce,
            ItemMusicOption,
            DetailNav
        }
    }
</script>

<style scoped>
.bgimg{
    width: 100%;
    height: 11rem;
    position: absolute;
    z-index: -1;
    /* 图片模糊和亮度 */
    filter: blur(40px) brightness(60%);
}
   
</style>