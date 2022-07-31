<template>
    <div class="item-music-deatil">
        <img :src="state.playlist.coverImgUrl" class="bgimg">
        <van-sticky><DetailNav/></van-sticky>
        <ItemIntroduce :playlist='state.playlist'/>
        <ItemMusicOption :playlist='state.playlist'/>
        <MusciList :musiclist='state.musiclist'
        :subsCount='state.playlist.subscribedCount'/>
    </div>
</template>

<script>
import ItemIntroduce from '@/views/itemMusicDeatil/childComps/ItemIntroduce.vue'
import ItemMusicOption from '@/views/itemMusicDeatil/childComps/ItemMusicOption.vue'
import DetailNav from '@/views/itemMusicDeatil/childComps/DetailNav.vue'
import MusciList from '@/views/itemMusicDeatil/childComps/MusciList.vue'

import {getMusicItem,getAllMusic} from '@/network/musicItem'

import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
    export default {
        setup(){
            const state = reactive({
                playlist:[],
                musiclist:[]
            })
            const store = useStore()
            onMounted(async ()=>{
                // 拿到query携带的id
                let id = useRoute().query.id
                store.commit('updatePageId',id)
                // 请求歌单详情页头部信息
                let res1 = await getMusicItem(id)
                state.playlist=res1.data.playlist
                // 请求歌曲列表信息
                let res2 = await getAllMusic(id)
                state.musiclist = res2.data.songs
            })
            return {state}
        },
        components:{
            ItemIntroduce,
            ItemMusicOption,
            DetailNav,
            MusciList
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