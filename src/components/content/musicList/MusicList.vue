<template>
    <div class="music-list">
        <div class="music-top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="music-goods">
            <van-swipe class="goods-swiper" :loop="false" 
            :width="120" :show-indicators="false">
                <van-swipe-item v-for="item in state.musicList" :key="item" :style="{width:2.4+'rem'}">
                    <router-link :to="{path:'/itemMusicDeatil',query:{id:item.id}}">
                        <img :src="item.picUrl" alt="">
                        <span class="playCount">
                            <svg class="iconpark-icon"><use href="#play-one"></use></svg>
                            {{changeCount(item.playCount)}}
                        </span>
                        <div class="name">{{item.name}}</div>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import {getpersonalized} from '@/network/home'

import { reactive,onMounted } from 'vue'
    export default { 
        setup(){
            const state = reactive({
                musicList:[],
            })
            // 处理播放量
            function changeCount(num){
                if(num>=100000000){
                    return (num / 100000000).toFixed(1) + "亿";
                }
                else if(num >= 10000){
                    return (num / 10000).toFixed(1) + "万";
                }
            }
            
            onMounted(async ()=>{
                let res = await getpersonalized()
                // getpersonalized().then(res=>{
                state.musicList=res.data.result
                    // console.log(personalized.musicList);
                    
                // })
            })
            return {state,changeCount}
        }
    }
</script>

<style scoped>
.music-list{
    width: 100%;
    padding: 0.25rem;
}
/* 模块标题 */
.music-top{
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
}
.more{
    border: 1px solid #ccc;
    text-align: center;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    border-radius: 15px;
    font-size: .25rem;
}
.title{
    line-height: 0.6rem;
    font-size: 0.4rem;
    font-weight: 900;
}

/* 每日歌单 */
.music-goods{
    height: 3rem;
    width: 100%;

}
.goods-swiper{
    position: relative;
    height: 100%;
    width: 100%;
}
.van-swipe-item{
    position: relative;
    padding-right:.2rem;
    width: 2.3rem;
    height: 100%;
}
.van-swipe-item img{
    border-radius: .35rem;
    width: 100%;
}
.name{
    display: -webkit-box;
    height: .55rem;
    font-size: .2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
}
.playCount {
    position: absolute;
    display: flex;
    align-items: center;
    top: .1rem;
    right: .3rem;
    padding: 0.06rem;
    text-align: center;
    border: 1px solid #ccc;
    background-color:rgb(0, 0, 0,.4);
    border-radius: .2rem;
    font-size: .2rem;
    color: white;
    z-index: 33;
}
.iconpark-icon{
    width: 0.3rem;
    height:0.3rem;
}
</style>