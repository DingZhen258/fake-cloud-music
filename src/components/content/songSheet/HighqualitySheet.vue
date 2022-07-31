<template>
    <div class="Highquality_list">
        <div class="title">
            <h2>热门歌单推荐</h2>
        </div>
        <div class="goods">
            <div class="goods_items" 
            v-for="item in state.highqualitySheet" :key="item" >
                <router-link :to="{path:'/itemMusicDeatil',query:{id:item.id}}">
                    <img :src="item.coverImgUrl" alt="">
                    <p>{{item.name}}</p>
                    <span class="playCount">
                        <svg class="iconpark-icon"><use href="#play-one"></use></svg>
                        {{$myFun.changeCount(item.playCount)}}
                    </span>
                </router-link>
            </div>
            <button v-if="state.isShowMore" @click="moreShow">点击加载更多</button>
            <h3 v-else>哎呀,到底了~</h3>
        </div>
    </div>
</template>

<script>
import {getHighquality} from '@/network/home'

import { reactive,onMounted } from 'vue'
    export default { 
        setup(){
            const state = reactive({
                highqualitySheet:[],
                isShowMore: true,
                nowPage: 1
            })          
            onMounted(async ()=>{
                let res = await getHighquality()
                console.log(res.data.playlists);
                state.highqualitySheet = res.data.playlists.slice(0, 6)// 默认渲染6条数据
            })
            async function moreShow(){//点击加载更多
                let res = await getHighquality()
                state.highqualitySheet.push(...res.data.playlists.slice(state.nowPage * 6, (state.nowPage + 1) * 6))
                state.nowPage++
                res.data.playlists.length >state.nowPage * 6? state.isShowMore = true : state.isShowMore = false
            }
            return {state,moreShow}
        }
    }
</script>

<style lang="less" scoped>
.Highquality_list{
    width: 100%;
    padding: 0 0.2rem;
    margin-bottom: 1.5rem;
}
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: .3rem;
    button{
        
        width: 80%;
        border-radius: .2rem;
        border: none;
    }
}
.goods_items{
    position: relative;
    height: 3rem;
    width: 2.2rem;
    img{
        width: 100%;
        border-radius: .25rem;
    }
    p{
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
        right: .1rem;
        padding: 0.06rem;
        text-align: center;
        border: 1px solid #ccc;
        background-color:rgb(0, 0, 0,.4);
        border-radius: .2rem;
        font-size: .2rem;
        color: white;
        z-index: 3;
        .iconpark-icon{
            width: 0.3rem;
            height:0.3rem;
        }
    }
} 
    
</style>